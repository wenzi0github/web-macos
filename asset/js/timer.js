function getSystemTime(){
	var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

	var date    = new Date();
	var weekday = date.getDay();
	var hour    = date.getHours();
	var minute  = date.getMinutes();
	var html    = '';
	var mm      = '';

	hour = hour<10 ? '0'+hour : hour;
	minute = minute<10 ? '0'+minute : minute;

	if(hour<12) {
		mm = '上午';
	}else if(hour==12){
		mm = '中午';
	}else if(hour<=18){
		mm = '下午';
	}else{
		mm = '晚上';
	}
	
	html = week[weekday]+mm+hour+':'+minute;
	$('.system_menu .time').html(html);
	setTimeout(function(){
		getSystemTime();
	}, 5000);
}
getSystemTime();