const express = require('express');
const router = express.Router();
const path = require('path');


const tools = require('./helpers');

//Get all products
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/product'), {
    active: {product: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems},
    products: tools.getItemsAvailable(),
    selected: {all: true}
  });
})

//Get a specific product
router.get('/:productID', (req, res) => {
  const product = tools.getProductById(parseInt(req.params.productID));
  if (product == null) {
    res.sendStatus(404);
    return;
  }
  res.render(path.join(__dirname, '../views/product-single'), {
    active: {product: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems},
    product
  });

})

//Get products by collection
router.get('/collections/:collection',  (req, res) => {
  
   let { collection } = req.params;

  if (![0, 1, 2, 3, 4, 5].includes(parseInt(collection))) {
    res.sendStatus(404);
    return;
  }
  collection = tools.getCollections()[parseInt(collection)];

  let selected = {};
  switch(parseInt(req.params.collection)) {
    case 0:
      selected = { sale: true };
      break;
    case 1:
      selected = { new: true };
      break;
    case 2:
      selected = { summer: true };
      break;
    case 3:
      selected = { winter: true };
      break;
    case 4:
      selected = { autumn: true };
      break;
    case 5:
      selected = { spring: true };
      break;
  }

  filteredItems = [];

  const itemsAvailable = tools.getItemsAvailable();
  for (let i = 0; i < itemsAvailable.length; i++) {
    if (selected.sale) {
      if (itemsAvailable[i].onSale == true) {
        filteredItems.push(itemsAvailable[i]);
      }
    } else {
      if (itemsAvailable[i].collection == collection) {
        filteredItems.push(itemsAvailable[i]);
      }
    }
  }

  if (filteredItems.length == 0) filteredItems = null;

  res.render(path.join(__dirname, '../views/product'), {
    active: {product: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems},
    products: filteredItems,
    selected
  });

})


module.exports = router;