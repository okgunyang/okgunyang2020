$(document).ready(function(){

  $('.to-down-btn').click(function(){
    $("html, body").animate({ scrollTop: $('.main-header').height() }, "slow");
    return false;
  });

  function menu(){
    if($('body').hasClass('is-home')){
      $('.top-line li a[href="index.html"]').parents().addClass('active');
    }
    else{
      $('.top-line li a[href="index.html"]').parents().removeClass('active');
    }
  }; menu();


// Mixitup
if($('body').hasClass('is-home')){
  var mixer = mixitup('.portfolio-grid');
}



  // Carousel TEAM
  $(".carousel-team").owlCarousel({
    loop: true,
    smartSpeed: 500,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1100: {
        items: 4
      }
    }
  });

  // Carousel CLIENTS
  $(".carousel-clients").owlCarousel({
    autoplay: true,
    autoplayTimeout: 6000,
    loop: true,
    smartSpeed: 500,
    nav: false,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 4
      },
      1100: {
        items: 5
      }
    }
  });

   // Carousel Testimonials
  $(".carousel-testimonials").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    smartSpeed: 500,
    dots: true,
    items: 1
  });


  // Form
    // Required marker
    function reqMarker(){
      var reqInput = $('input[required], textarea[required], select[required], radio[required]');
      var labelInput = $(reqInput).parent('label');
      if (labelInput) {
        $(labelInput).children('span').addClass('input-required');
      }
      return;
    }reqMarker();


  /*Chrome Smooth Scroll*/
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
