$(function(){
	var win_h = $(window).height();
	$("#quick a").click(function(){ //퀵 또는 메인메뉴 버튼 클릭시 스크롤링
		var aPage = parseInt($(this).attr("data-val"));
		$("body, html").not(":animated").animate({"scrollTop" : aPage*win_h }, 1200);
		$("#quick a").removeClass("on");
		$("#quick a[data-val]").eq(aPage).addClass("on");
	});
	$('.page').each(function(index){  //각 페이지 data-page 값=스크롤 값을 계산해서 넣기
	    $(this).attr("data-page",win_h*index);
	});
	$('.page').on("mousewheel",function(e){ //마우스 휠로 스크롤할 때 한 페이지씩 스크롤링
	    var sectionPos = parseInt($(this).attr("data-page"));
	    if(e.originalEvent.wheelDelta > 0) {  //위로 스크롤시 0, +1
	        $("body, html").not(":animated").animate({scrollTop:sectionPos - win_h});

	    return false;
	    } else if (e.originalEvent.wheelDelta < 0) {  //아래로 스크롤시 -1
	        $("body, html").not(":animated").animate({scrollTop:sectionPos + win_h});
	    return false; 
	    }
	});  	 
	$(window).scroll(function(){  //스크롤링 될 때 메인메뉴 버튼, 퀵 버튼 활성화
		var cnt = parseInt($(window).scrollTop() / win_h);
        if($(window).scrollTop()<=100){ 
		  $("#quick a").removeClass("on");
		  $("#quick a.pageMove").eq(0).addClass("on");     
        } else {
		  $("#quick a").removeClass("on");
		  $("#quick a.pageMove").eq(cnt).addClass("on");
        }
        if($(window).scrollTop()<=win_h-1){
            $("#quick_up").css("display", "none");
            $("#quick_down").css("display", "block");
        } else {
            $("#quick_up").css("display", "block");
            $("#quick_down").css("display", "none");
        }
	});
	$("#quick_up").click(function(){ //퀵 메뉴에서 위로 버튼 눌렀을 때 가장 위로 스크롤링
		$("body, html").not(":animated").animate({"scrollTop" : "0px" }, 1200);
	});
	var pageCnt = $(".page").length - 1;
	$("#quick_down").click(function(){ //퀵 메뉴에서 아래로 버튼 눌렀을 때 가장 끝으로 
		$("body, html").animate({"scrollTop" : win_h*pageCnt }, 1200);
	});
});