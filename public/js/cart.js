

$('.selectpicker').change(function(){

  $("#deliveryFee")[0].innerText = '$' + this.value;
  $("#finalTotalCost")[0].innerText = '$' + (parseFloat(this.value) + parseFloat($("#totalCost")[0].innerText)).toFixed(2);

});
