$(document).ready(function(){

//Menu
$("#my-menu").mmenu({
  extensions : [
  "theme-dark",
  "fx-menu-slide",
  "fx-panels-none",
  "fx-listitems-slide",
  "pagedim-black"
  ],
  navbar: {
    title: "Menu"
  }
});
  //   // Display Mobile menu
  //   $(".mobile-mnu-btn").click(function() {
  //     var mmAPI = $("#my-menu").data( "mmenu" );
  //     mmAPI.open();
  //     return false;
  //   });
  // var mmAPI = $("#my-menu").data( "mmenu" );
  // mmAPI.bind('opened', function() {
  //   $('.hamburger').addClass("is-active");
  // }).bind('closed', function(){
  //   $('.hamburger').removeClass("is-active");
  // });


    $('.mobile-mnu-btn').click(function(){
    var mmAPI = $("#my-menu").data( "mmenu" );
    mmAPI.open();
    $('.mobile-mnu-btn').addClass("is-active");
  });

    $('#my-menu').data('mmenu').bind('close:finish', function () {
      $('.mobile-mnu-btn').removeClass("is-active");
    });

  // Carousel
  $(".owl-carousel").owlCarousel({
    // autoplay: true,
    // autoplayTimeout: 6000,
    loop: true,
    smartSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
    dots: false,
    // margin: 30,
    items: 1
  });

  // MixitUp
  var mixer = mixitup('.blog-grid');
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
