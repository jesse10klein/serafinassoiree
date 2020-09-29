

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getCartItemsList() {
  const cookie = getCookie('cartItems');
  if (cookie == "") return [];
  const cartItemStrings = cookie.split('-');
  let cartItems = [];
  for (let i = 0; i < cartItemStrings.length; i++) {
    cartItems.push(JSON.parse(cartItemStrings[i]));
  }
  console.log(cartItems);
  return cartItems;
}

function addToCart(element) {
  
  const splits = window.location.pathname.split('/');
  const itemID = splits[splits.length - 1];
  const quantity = $(element).parent().parent().find('.quantity')[0].value;
  if (quantity == 0) return;

  const cartItems = getCartItemsList();
  let itemExisted = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].itemID == itemID) {
      cartItems[i].quantity = parseInt(cartItems[i].quantity)
      cartItems[i].quantity += parseInt(quantity);
      itemExisted = true;
    }
  }
  if (!itemExisted) {
    cartItems.push({ itemID, quantity })
  }

  let cartStrings = [];
  for (let i = 0; i < cartItems.length; i++) {
    cartStrings.push(JSON.stringify(cartItems[i]));
  }

  const finalCookieString = cartStrings.join('-');
  setCookie('cartItems', finalCookieString, 1);

}