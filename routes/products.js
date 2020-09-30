const express = require('express');
const router = express.Router();
const path = require('path');

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


const collections = ['Sale', 'New Arrivals', 'Summer', 'Winter', 'Autumn', 'Spring'];

//Get all products
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/product'), {
    active: {product: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems},
    products: itemsAvailable,
    selected: {all: true}
  });
})

//Get a specific product
router.get('/:productID', (req, res) => {
  res.render(path.join(__dirname, '../views/product-single'), {
    active: {product: true},
    cart: {numItems: res.locals.cartItems.length, cartItems: res.locals.cartItems}
  });

})

//Get products by collection
router.get('/collections/:collection',  (req, res) => {
 
  console.log("Searching by collection");
  
   let { collection } = req.params;

  if (![0, 1, 2, 3, 4, 5].includes(parseInt(collection))) {
    res.sendStatus(404);
    return;
  }
  collection = collections[parseInt(collection)];

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

  for (let i = 0; i < itemsAvailable.length; i++) {
    if (itemsAvailable[i].collection == collection) {
      filteredItems.push(itemsAvailable[i]);
    }
  }

  if (filteredItems.length == 0) filteredItems = null;

  res.render(path.join(__dirname, '../views/product'), {
    active: {product: true},
    cart: {numItems: cartItems.length, cartItems},
    products: filteredItems,
    selected
  });

})


module.exports = router;