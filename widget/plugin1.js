(function($) { 
    $.fn.sliding = function(opt) { 
        var tar = $(this);
        var opt1 = opt.spd;
        var opt2 = opt.intv;
        var chd = opt.chd;
        var prev = opt.prev;
        var next = opt.next;
        function nextAni() {
            tar.not(":animated").animate({"margin-left":"-600px"}, opt1, function(){
                tar.find(chd).eq(0).appendTo(tar);
                tar.css("margin-left", "0px");
            });    
        }
        
        function prevAni() {
            tar.find(chd).eq(4).appendTo(tar);
            tar.css("margin-left", "-600px");
            tar.not(":animated").animate({"margin-left":"0px"}, opt1);    
        }
        $(prev).click(function(){
            clearInterval(intv1);
            prevAni();
            intv1 = setInterval(function(){ nextAni(); }, opt2);
        });
        $(next).click(function(){
            clearInterval(intv1);
            nextAni();
            intv1 = setInterval(function(){ nextAni(); }, opt2);
        });
        
        var intv1 = setInterval(function(){
            nextAni();
        }, opt2);
        
    }; 
}(jQuery));