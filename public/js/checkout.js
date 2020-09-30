

$("#shippingAddress").change(function() {
  if (this.checked) {
    $(".shippingAddress").css("display", "block");
  } else {
    $(".shippingAddress").css("display", "none");
  }
})