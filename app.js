const express = require("express");
const pug = require("pug");
const path = require("path");

const app = express();

const cookieParser = require('cookie-parser');

const itemsAvailable = [
  {
    imageURL: "cat1.PNG",
    collection: 'Sale',
    title: 'Leaf Art',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 0
  },
  {
    imageURL: "cat6.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 1
  },
  {
    imageURL: "cat2.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 2
  },
  {
    imageURL: "cat3.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 3
  },
  {
    imageURL: "cat4.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 4
  },
  {
    imageURL: "cat5.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 5
  }
];


app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

//Middleware to get items in the cart
app.use(getCartItems);

const productRoutes = require('./routes/products');
app.use('/product', productRoutes);

function getProductById(id) {
  for (let i = 0; i < itemsAvailable.length; i++) {
    if (itemsAvailable[i].id == id) return itemsAvailable[i];
  }
  return null;
}

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
    const product = getProductById(parseInt(cartObject.itemID));
    cartItems.push({
      imageURL: product.imageURL,
      id: cartObject.itemID,
      title: product.title,
      price: product.price,
      quantity: cartObject.quantity
    })
  }

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
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems}
  });
})

app.get('/contact', (req, res) => {
  res.render(path.join(__dirname, '/views/contact'), {
    active: {contact: true}, 
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems} 
  });
})

app.get('/checkout', (req, res) => {
  res.render(path.join(__dirname+'/views/checkout'), {
    active: {checkout: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems}
  });
})






const port = 3001;
app.listen(port, () => console.log(`App listening on port ${port}`));