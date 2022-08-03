(function(){

    $(document).ready(function(){

        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 1000, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });

        // onScroll function
        function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('.menu a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.menu li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }

        // Change menu size
        var nav = document.querySelector(".menu-fix");
        var logo = document.querySelector(".logo");
        var menu = document.querySelector(".menu");

        window.addEventListener("scroll", function(){
           if(pageYOffset > 120){
               logo.classList.remove("logo");
               nav.classList.add("menu-height");
               logo.classList.add("logo-fixed");
               menu.classList.add("menu-fixed");
           } else {
               nav.classList.remove("menu-height");
               logo.classList.remove("logo-fixed");
               menu.classList.remove("menu-fixed");
               menuBtn.classList.remove("menu-fixed");
           }
        }, false);

        // General Info button
        var generalInfo = document.querySelector(".menu-btn");
        var generalWindow = document.querySelector(".general-info");

        $(".menu-btn").on("click", function(){
            $(".general-info").toggleClass("general-show");
        });

    });

    // Kliknięcie poza obszarem GeneralInfo
    $(document).mouseup(function(e){
        var container = $(".general-info");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.hide();
        }
    });

})();
