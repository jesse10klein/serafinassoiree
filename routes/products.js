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
    salePrice: 10.00
  },
  {
    imageURL: "cat6.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00
  },
  {
    imageURL: "cat2.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00
  },
  {
    imageURL: "cat3.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00
  },
  {
    imageURL: "cat4.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00
  },
  {
    imageURL: "cat5.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00
  }
];

const cartItems = [
  {
    title: 'Bicardi 151',
    imageURL: 'prod-1.jpg',
    price: 25.99,
    quantity: 1,
    description: 'This will be a description eventually'
  },
  {
    title: 'Jim Beam Kentucky Straight',
    imageURL: 'prod-2.jpg',
    price: 30.89,
    quantity: 2,
    description: 'This will be a description eventually'
  },
  {
    title: 'Citadelle',
    imageURL: 'prod-3.jpg',
    price: 25.99,
    quantity: 1,
    description: 'This will be a description eventually'
  }
];

const collections = ['Sale', 'New Arrivals', 'Summer', 'Winter', 'Autumn', 'Spring'];

//Get all products
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/product'), {
    active: {product: true},
    cart: {numItems: cartItems.length, cartItems},
    products: itemsAvailable
  });
})


//Get products by collection
router.post('/:collection',  (req, res) => {
 
  console.log("Searching by collection");
  
   let { collection } = req.params;

  if (![0, 1, 2, 3, 4, 5].includes(parseInt(collection))) {
    res.sendStatus(404);
    return;
  }
  collection = collections[parseInt(collection)];
  console.log(collection);
  filteredItems = [];
  for (let i = 0; i < itemsAvailable.length; i++) {
    if (itemsAvailable[i].collection == collection) {
      filteredItems.push(itemsAvailable[i]);
    }
  }
  console.log(filteredItems.length);

  res.render(path.join(__dirname, '../views/product'), {
    active: {product: true},
    cart: {numItems: cartItems.length, cartItems},
    products: itemsAvailable
  });

})


module.exports = router;