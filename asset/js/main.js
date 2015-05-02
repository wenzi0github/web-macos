$(function(){
	$('.global_docker .chrome').click(function(){
		$.showModal({
			'html':'<div class="explore"><div class="title"><form action="" onSubmit="return openExplore(this);"><input type="text" class="url" placeholder="请输入网址"></form></div><div class="content"><iframe src="" frameborder="0"></iframe></div></div>',
			'css':{'height':'600px', 'width':'800px'},
			'obj' : $(this),
		});
	});
	$('.global_docker .reminders').click(function(){
		$.showModal({
			'html':'记事本',
			'obj' : $(this),
			'single' : true
		});
	})
});