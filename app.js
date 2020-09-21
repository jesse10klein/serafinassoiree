const express = require("express");
const pug = require("pug");
const path = require("path");

const app = express();


app.set('view engine', 'pug')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render(path.join(__dirname+'/views/index'));
})

app.get('/about', (req, res) => {
  res.render(path.join(__dirname+'/views/about'));
})

app.get('/cart', (req, res) => {
  res.render(path.join(__dirname+'/views/cart'));
})

app.get('/product', (req, res) => {
  res.render(path.join(__dirname+'/views/product'));
})

app.get('/checkout', (req, res) => {
  res.render(path.join(__dirname+'/views/checkout'));
})




const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));