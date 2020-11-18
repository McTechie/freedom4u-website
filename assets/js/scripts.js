$(document).ready(function(){
  $('#mycarousel').carousel({interval:4500});
  $('#carouselButton').click(function(){
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    }
    else if ($('#carouselButton').children('span').hasClass('fa-play')){
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').addClass('fa-pause');
      $('#carouselButton').children('span').removeClass('fa-play');
    }
  });
  $('#donationButton').click(function(){
    $('#donationModal').modal('show');
  });
  $('#donationSubmit').click(function(){
    document.getElementById("donationModal").submit();
  });
});
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
