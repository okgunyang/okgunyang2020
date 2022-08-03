$(document).ready(function(){

//Timer
$('.countdown').downCount({
       date: '10/10/2019 12:00:00',
       offset: +10
   }, function () {
       alert('Конец акции!');
   });




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
