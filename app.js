const express = require("express");
const pug = require("pug");
const path = require("path");

const app = express();


app.set('view engine', 'pug')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/index'), {active: {home: true}});
})

app.get('/about', (req, res) => {
  res.render(path.join(__dirname, '/views/about'), {active: {about: true}});
})

app.get('/blog', (req, res) => {
  res.render(path.join(__dirname, '/views/blog'), {active: {blog: true}});
})

app.get('/cart', (req, res) => {
  res.render(path.join(__dirname, '/views/cart'), {active: {cart: true}});
})

app.get('/contact', (req, res) => {
  res.render(path.join(__dirname, '/views/contact'), {active: {contact: true}});
})

app.get('/product', (req, res) => {
  res.render(path.join(__dirname, '/views/product'), {active: {product: true}});
})

app.get('/checkout', (req, res) => {
  res.render(path.join(__dirname+'/views/checkout'), {active: {checkout: true}});
})




const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));