const express = require("express");
const pug = require("pug");
const path = require("path");

const app = express();

const cookieParser = require('cookie-parser');

const tools = require('./routes/helpers');

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

//Middleware to get items in the cart
app.use(getCartItems);

const productRoutes = require('./routes/products');
const { getProductById } = require("./routes/helpers");
app.use('/product', productRoutes);



function getCartItems(req, res, next) {
  const { cookies } = req;
  if (!cookies.cartItems || cookies.cartItems == '') {
    res.locals.cartItems = [];
    next();
    return;
  }

  //If we get here, there are items in the cart
  const cartStrings = cookies.cartItems.split('-');
  let cartItems = [];
  for (let i = 0; i < cartStrings.length; i++) {
    const cartObject = JSON.parse(cartStrings[i]);
    const product = tools.getProductById(parseInt(cartObject.itemID));
    totalPrice = null;
    if (product.onSale) {
      totalPrice = parseInt(cartObject.quantity) * product.salePrice;
    } else {
      totalPrice = parseInt(cartObject.quantity) * product.price;
    }
    cartItems.push({
      imageURL: product.imageURL,
      id: cartObject.itemID,
      title: product.title,
      price: product.price,
      quantity: cartObject.quantity,
      collection: product.collection,
      onSale: product.onSale,
      salePrice: product.salePrice,
      totalPrice
    })

  }

  //Get total price
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].totalPrice;
  }

  res.locals.totalCost = total;
  res.locals.cartItems = cartItems;

  next();
}


app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/index'), {
    active: {home: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems}
  });
})

app.get('/about', (req, res) => {
  res.render(path.join(__dirname, '/views/about'), {
    active: {about: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems}
  });
})

app.get('/blog', (req, res) => {
  res.render(path.join(__dirname, '/views/blog'), {
    active: {blog: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems}
  });
})

app.get('/cart', (req, res) => {
  res.render(path.join(__dirname, '/views/cart'), {
    active: {cart: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems, empty: res.locals.cartItems.length != 0, totalCode: res.locals.totalCost}
  });
})

app.get('/contact', (req, res) => {
  res.render(path.join(__dirname, '/views/contact'), {
    active: {contact: true}, 
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems} 
  });
})

app.get('/checkout', (req, res) => {
  if (res.locals.cartItems.length == 0) {
    res.redirect('/cart');
    return;
  }
  let delivery = req.cookies.shipping;
  if (delivery == 0) {
    delivery = false;
  }
  res.render(path.join(__dirname+'/views/checkout'), {
    active: {checkout: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems},
    delivery
  });
})

app.get('/contact-sent', (req, res) => {
  res.render(path.join(__dirname, '/views/contact-sent'), {
    active: {contact: true}, 
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems} 
  });
})




const port = process.env.port || 8080; //Has to be this for nginx

app.set('trust proxy', 'loopback');

app.listen(port, () => console.log(`App listening on port ${port}`));