

const itemsAvailable = [
  {
    imageURL: "cat1.PNG",
    collection: 'Sale',
    title: 'Leaf Art',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 0,
    numAvailable: 1
  },
  {
    imageURL: "cat6.PNG",
    collection: 'New Arrivals',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 1,
    numAvailable: 1
  },
  {
    imageURL: "cat2.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 2,
    numAvailable: 1
  },
  {
    imageURL: "cat3.PNG",
    collection: 'Sale',
    title: 'earrings',
    price: 10.99,
    onSale: true,
    salePrice: 10.00,
    id: 3,
    numAvailable: 1
  },
  {
    imageURL: "cat4.PNG",
    collection: 'New Arrivals',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 4,
    numAvailable: 1
  },
  {
    imageURL: "cat5.PNG",
    collection: 'New Arrivals',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 5,
    numAvailable: 1
  },
  {
    imageURL: "cat21.PNG",
    collection: 'Summer',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 6,
    numAvailable: 1
  },
  {
    imageURL: "cat7.PNG",
    collection: 'Spring',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 7,
    numAvailable: 1
  },
  {
    imageURL: "cat8.PNG",
    collection: 'New Arrivals',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 8,
    numAvailable: 1
  },
  {
    imageURL: "cat9.PNG",
    collection: 'Spring',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 9,
    numAvailable: 1
  },
  {
    imageURL: "cat10.PNG",
    collection: 'Spring',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 10,
    numAvailable: 1
  },
  {
    imageURL: "cat11.PNG",
    collection: 'Autumn',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 11,
    numAvailable: 1
  },
  {
    imageURL: "cat12.PNG",
    collection: 'Autumn',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 12,
    numAvailable: 1
  },
  {
    imageURL: "cat13.PNG",
    collection: 'Autumn',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 13,
    numAvailable: 1
  },
  {
    imageURL: "cat14.PNG",
    collection: 'Winter',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 14,
    numAvailable: 1
  },
  {
    imageURL: "cat15.PNG",
    collection: 'Winter',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 15,
    numAvailable: 1
  },
  {
    imageURL: "cat16.PNG",
    collection: 'Winter',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 16,
    numAvailable: 1
  },
  {
    imageURL: "cat17.PNG",
    collection: 'Winter',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 17,
    numAvailable: 1
  },
  {
    imageURL: "cat18.PNG",
    collection: 'Summer',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 18,
    numAvailable: 1
  },
  {
    imageURL: "cat19.PNG",
    collection: 'Summer',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 19,
    numAvailable: 1
  },
  {
    imageURL: "cat20.PNG",
    collection: 'Summer',
    title: 'earrings',
    price: 10.99,
    onSale: false,
    salePrice: 10.00,
    id: 20,
    numAvailable: 5
  }
];


const collections = ['Sale', 'New Arrivals', 'Summer', 'Winter', 'Autumn', 'Spring'];

function getItemsAvailable() {
  return itemsAvailable;
}

function getCollections() {
  return collections;
}

function getProductById(id) {
  for (let i = 0; i < itemsAvailable.length; i++) {
    if (itemsAvailable[i].id == id) return itemsAvailable[i];
  }
  return null;
}

module.exports = {getItemsAvailable, getCollections, getProductById};
