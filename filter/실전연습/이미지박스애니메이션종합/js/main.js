/**
 *
 *  Site JavaScript
 *
 *  @package aero_js
 *  @dependences: jQuery
 *
 **/

jQuery(document).ready(function($){

  // Wait for window load
  $(window).load(function() {
    setTimeout(function() {
      $(".page-loader").addClass('load-complete');
    }, 1500);
  });

  // Scrollax Init
  'use strict';
  $.Scrollax();

  // Smooth Scrolling Link
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Disable ContextMenu | Right Click
  $(document)[0].oncontextmenu = function() { return false;}

  $(document).mousedown(function(e){
    if( e.button == 2 ) {
      $('.pop-up-alert').addClass('active');
      return false;
    } else $('.close-btn').click(function() {
    		$('.pop-up-alert').removeClass('active');
    	return true;
    });
  });

  // Go to top
  $(window).scroll(function() {

  	var $top = $(window).scrollTop();
  	var $go_top = $('.go-to-top-button');

  	if ( $top > 600 ) {
  		$go_top.addClass('active');
  	} else {
  		$go_top.removeClass('active');
  	}

  });

  // Toggle Slide Menu
  var $toggleBtn = $('.toggle-menu-btn, .slide-menu li a'),
  		$siteMenu = $('.slide-menu'),
      $body = $('body');

  $toggleBtn.on('click', function(){

		if ( $toggleBtn.hasClass('active') ) {

	    $siteMenu.toggleClass('active');
			$toggleBtn.toggleClass('active');
      $body.toggleClass('active');

		} else {

      $siteMenu.toggleClass('active');
			$toggleBtn.toggleClass('active');
      $body.toggleClass('active');
		}
  });

});
