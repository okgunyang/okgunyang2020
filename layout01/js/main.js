$(function(){	
	
	function init_work_list(){
		// 작품 목록 불러오기
		$work_list = $('#works .work_list');
		$work_list.load('templates/works_list.html', function(){
			// 3번 목록까지만 표시
			$work_list.find('li:gt(2)').slideUp(); 
			$('.btn_close').hide(); // 축소버튼 비표사
		});		
	}	
	init_work_list();
	
	// 전체보기 토글 버튼
	$('#works .btn_all').click(function(){
		$(this).toggleClass('all');	
		
		// 버튼 상태에 따라 목록 열고 닫기
		if($(this).hasClass('all')){
			$work_list.find('li').slideDown();	
			$('.btn_close').show();
		}
		return false;
	});
	
	$('#works .btn_close').click(function(){
		$work_list.find('li').slideUp();
		init_work_list();
		$('#works .btn_all').toggleClass('all');
		$('.btn_close').hide();
		return false;
	});
	
	// 능력치 그래프 
	var yoffset = 200;	// 스크로 보정값
	var about_top = $('#skill').offset().top - yoffset;
	var header_height = parseInt($('#main_header').css('height'));
	console.log(header_height);

	$(window).on('scroll', function(){
		var win_scroll_top = $(window).scrollTop();
		var point = [90, 70, 80, 70, 50, 60];
		
		// #skill 섹션에 도달하면 그래프 애니메이션 시작
		if(win_scroll_top >= about_top){
			for(var i = 0; i < 6; i++){
				$('#skill .skill_list span')
					.eq(i)
					.animate({width: point[i]+'%'});
			}	
		}
		console.log(win_scroll_top);
		if(win_scroll_top >= header_height){
			$('#main_gnb').addClass('fixed');
		} else{
			$('#main_gnb').removeClass('fixed');
		}
	});
	
	
	// 비쥬얼 영역에 마우스가 올라가면 애니메이션 재생
	$('#visual').on('mouseover', function(){
		$('.visual_txt ')
			.css('animation-play-state', 'running');
	});
	
	// 페이지 스크롤 효과
	$('#main_gnb a, #to_top a, #visual a').on('click', function(){
		// 이동한 내부 링크의 위치값(hash)
		var target = $(this.hash);
		console.log(target);
		$('html, body').animate({
			scrollTop: target.offset().top
		});
		return false; // 앵커태그 무효화
	});
	
	// 유투브 비디오 크기 설정
	function youtube_iframe(){
		var $iframe = $('#skill iframe');
		var i_width = parseInt($iframe.css('width'));
		console.log(i_width);
		$iframe.css('height', 56.25*i_width/100);
	}
	
	youtube_iframe();
	$(window).on('resize', function(){
		youtube_iframe();
	});
	
	// 비디오 버튼 효과
	$('#btn_play').on('click', function(){
		console.log('btn play');
		 $(this).hide(200, function(){
			 $('#skill iframe')
				.stop()
				.animate({'opacity': 1});	 
		 });
		 $('#skill .col-2').last().css('border', 'none');	
			
	});

});