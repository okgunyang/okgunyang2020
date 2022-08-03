// knob
var pie_data1 = {
  trackColor: '#ccc',
  barColor: '#c2ce1a',
  lineWidth: 10,
  lineCap: 'butt',
  size: 140	
}
var pie_data2 = {
	trackColor: '#ccc',
	barColor: '#149ca8',
	lineWidth: 10,
	lineCap: 'square',
	size: 140
}
var pie_data3 = {
	trackColor: '#ccc',
	barColor: '#7e9d73',
	lineWidth: 10,
	lineCap: 'butt' ,
	size: 140
	}
var pie_data4 = {
	trackColor: '#ccc',
	barColor: '#ccb361',
	lineWidth: 10,
	lineCap: 'butt' ,
	size: 140
	}

// 차트 업데이트(차트위치요 소명)
function update_pieChart(el){
	var scroll_top = $(window).scrollTop();
	console.log(scroll_top);
	if(scroll_top >= el){
		var chart_data = [];
		chart_data.push($('.chart1').attr('data-percent'));
		chart_data.push($('.chart2').attr('data-percent'));
		chart_data.push($('.chart3').attr('data-percent'));
		chart_data.push($('.chart4').attr('data-percent'));
		console.log(chart_data);
		$('[class^=chart]').each(function(){
			var val = $(this).attr('data-percent');
			$(this).data('easyPieChart').update(0).update(val);	
		});
	}	
}                


$(function() {
	
	var about_top = $('#about').offset().top;
	var scroll_count = 0; // 파이차트 재생 변수
	
	$(window).on('scroll', function(){
		
		var scroll_top = $(window).scrollTop();
		
		// 파이차트 재생 설정 초기화
		if(scroll_top == 0){ scroll_count = 0;}
		
		// 파이차트 업데이트(#차트위치 요소명)
		if(scroll_top >= about_top){
			var chart_data = [];
			chart_data.push($('.chart1').attr('data-percent'));
			chart_data.push($('.chart2').attr('data-percent'));
			chart_data.push($('.chart3').attr('data-percent'));
			chart_data.push($('.chart4').attr('data-percent'));
			console.log(chart_data);

			if(scroll_count == 0){
				$('[class^=chart]').each(function(){
					var val = $(this).attr('data-percent');
					$(this).data('easyPieChart').update(0).update(val);	
				});			
			}
			scroll_count += 1;
				
		}

		// 파이차트 업데이트(#차트위치 요소명)
		// update_pieChart(about_top);
	});
	
    // 파이차트 세팅
	$('.chart1').easyPieChart(pie_data1);
	$('.chart2').easyPieChart(pie_data2); 
	$('.chart3').easyPieChart(pie_data3);     
	$('.chart4').easyPieChart(pie_data4);     
	
	// 파이차트 내 %정보 표시(data-percent)
	$('[class^=chart]').each(function(i){
		var attr = $(this).attr('data-percent');
		$(this).find('span').text(attr);
	})
	

	
});