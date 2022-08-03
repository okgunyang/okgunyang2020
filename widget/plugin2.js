(function($) { 
    $.fn.sliding2 = function(opt) { 
        var tar = $(this);
        var opt1 = opt.spd;
        var opt2 = opt.intv;
        var chd = opt.chd;
        var prev = opt.prev;
        var next = opt.next;
        var numfr = opt.numfr;
        var numbox = opt.numbox;
        function nextAni() {
            tar.not(":animated").animate({"margin-left":"-600px"}, opt1, function(){
                tar.find(chd).eq(0).appendTo(tar);
                tar.css("margin-left", "0px");
                $(numbox).eq(0).appendTo($(numfr));
                $(numbox).removeClass("on");
                $(numbox).eq(0).addClass("on");
            }); 
            
            
        }
        
        function prevAni() {
            tar.find(chd).eq(4).prependTo(tar);
            tar.css("margin-left", "-600px");
            tar.not(":animated").animate({"margin-left":"0px"}, opt1);  
            $(numbox).eq(0).prependTo($(numfr));
            $(numbox).removeClass("on");
            $(numbox).eq(0).addClass("on");
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
        
        $(numbox).click(function(){
            var th = $(this).index()-1;
            if(th>0) {
                tar.stop();
                clearInterval(intv1);
                for(var i=0;i<th;i++){
                    tar.find(chd).eq(0).appendTo(tar);
                    $(numbox).eq(0).appendTo($(numfr));
                }
            }
            nextAni();
            intv1 = setInterval(function(){ nextAni(); }, opt2);
        });
    }; 
}(jQuery));