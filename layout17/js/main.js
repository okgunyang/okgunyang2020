$(document).ready(function(){

   $(".contact").click(function(){
       $(this).children(".text").fadeToggle("slow");
                    
        $(this).toggleClass("active");
          
    });
});