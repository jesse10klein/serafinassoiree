const express = require("express");
const pug = require("pug");
const path = require("path");

const app = express();


const cartItems = [
  {
    title: 'Bicardi 151',
    imageURL: 'cat1.PNG',
    price: 25.99,
    quantity: 1,
    description: 'This will be a description eventually',
    id: 0
  },
  {
    title: 'Jim Beam Kentucky Straight',
    imageURL: 'cat1.PNG',
    price: 30.89,
    quantity: 2,
    description: 'This will be a description eventually',
    id: 1
  },
  {
    title: 'Citadelle',
    imageURL: 'cat1.PNG',
    price: 25.99,
    quantity: 1,
    description: 'This will be a description eventually',
    id: 2
  }
];

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));

const productRoutes = require('./routes/products');
app.use('/product', productRoutes);



app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/index'), {
    active: {home: true},
    cart: {numItems: cartItems.length, cartItems}
  });
})

app.get('/about', (req, res) => {
  res.render(path.join(__dirname, '/views/about'), {
    active: {about: true},
    cart: {numItems: cartItems.length, cartItems}
  });
})

app.get('/blog', (req, res) => {
  res.render(path.join(__dirname, '/views/blog'), {
    active: {blog: true},
    cart: {numItems: cartItems.length, cartItems}
  });
})

app.get('/cart', (req, res) => {
  res.render(path.join(__dirname, '/views/cart'), {
    active: {cart: true},
    cart: {numItems: cartItems.length, cartItems}
  });
})

app.get('/contact', (req, res) => {
  res.render(path.join(__dirname, '/views/contact'), {
    active: {contact: true}, 
    cart: {numItems: cartItems.length, cartItems} 
  });
})

app.get('/checkout', (req, res) => {
  res.render(path.join(__dirname+'/views/checkout'), {
    active: {checkout: true},
    cart: {numItems: cartItems.length, cartItems}
  });
})






const port = 3001;
app.listen(port, () => console.log(`App listening on port ${port}`));