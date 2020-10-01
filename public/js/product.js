



const select = document.querySelector('.selectpicker');

const collections = ['Sale', 'New Arrivals', 'Summer', 'Winter', 'Autumn', 'Spring'];

$('.selectpicker').change(function(){

  if (this.value == "All") {
    window.location.pathname = '/product';
    return;
  }

  const index = collections.indexOf(this.value)
  if (index != -1) {
    window.location.pathname = `/product/collections/${index}`
  }
});

$(".product").hover(function() {
  $(this).find(".viewItem").css("opacity", "1");
})

$(".product").mouseleave(function() {
  $(this).find(".viewItem").css("opacity", "0");
})

  // $.ajax({
  //   url, type: "POST", data,
  //   success: function(response) {

  //     const commentContent = element.parentElement;

  //     if ($(commentContent).find('.edited').length == 0) {
  //       const node = $($.parseHTML(`<div> <p class="edited"> (Edited) </p> </div>`));
  //       $(commentContent).find('.comment-footer').append(node);
  //     }

  //     const node = $($.parseHTML(`<p class="commentBody">${body}</p>`));
  //     node.insertAfter($(element));
  //     $(element).prev().remove();
  //     $(element).remove();
  //   }
  // })