

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

function removeCartItem(element) {
  const id = element.id;
 
  const cartItems = getCartItemsList();

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].itemID == id) {
      cartItems.splice(i, 1);
      break;
    }
  }

  let cartStrings = [];
  for (let i = 0; i < cartItems.length; i++) {
    cartStrings.push(JSON.stringify(cartItems[i]));
  }

  const finalCookieString = cartStrings.join('-');
  setCookie('cartItems', finalCookieString, 1);

  location.reload();

}

function removeItem(element) {

  $('#cartNumItems')[0].innerText -= 1;
  if ($('#cartNumItems')[0].innerText == 0) {
    const container = $(element).parent().parent();
    container.empty();
    container.append('<h3 id="emptyCart"> No items in cart </h3>');
  } else {
    $(element).parent().remove()
  }

  const itemID = $(element).prev().prev()[0].innerText;

  const cartItems = getCartItemsList();

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].itemID == itemID) {
      cartItems.splice(i, 1);
      break;
    }
  }

  let cartStrings = [];
  for (let i = 0; i < cartItems.length; i++) {
    cartStrings.push(JSON.stringify(cartItems[i]));
  }

  const finalCookieString = cartStrings.join('-');
  setCookie('cartItems', finalCookieString, 1);

}

function getCartItemsList() {
  const cookie = getCookie('cartItems');
  if (cookie == "") return [];
  const cartItemStrings = cookie.split('-');
  let cartItems = [];
  for (let i = 0; i < cartItemStrings.length; i++) {
    cartItems.push(JSON.parse(cartItemStrings[i]));
  }
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
      if (cartItems[i].quantity > parseInt($('#numAvailable')[0].innerText)) {
        $("#numAvailable").css({'color': 'red', 'text-decoration': 'underline'});
        return;
      }
      itemExisted = true;
    }
  }

  $("#numAvailable").css({'color': 'black', 'text-decoration': 'none'});
  if (!itemExisted) {
    if (quantity > parseInt($('#numAvailable')[0].innerText)) {
      $("#numAvailable").css('color', 'red');
      return;
    }
    cartItems.push({ itemID, quantity })
  }

  let cartStrings = [];
  for (let i = 0; i < cartItems.length; i++) {
    cartStrings.push(JSON.stringify(cartItems[i]));
  }

  const finalCookieString = cartStrings.join('-');
  setCookie('cartItems', finalCookieString, 1);

  location.reload();

}


function redirectToCheckout() {
  if ($(".selectpicker")[0].value == '0') {
    setCookie('shipping', 0, 1);
  }
  else {
    setCookie('shipping', 9.99, 1);
  }
  window.location.pathname = '/checkout';
}

function displayCheckoutError() {
  $("#checkoutError").text("Orders cannot be placed at this time, sorry for any inconvenience.");
}