function openExplore(obj){
	var $form = $(obj);
	var $url = $form.children('.url');
	var url = $url.val();
	if(!url){
		return;
	}
	if(url.indexOf('www')<0 && url.indexOf('http')<0){
		url = 'www.' + url;
	}
	if(url.indexOf('http')<0){
		url = 'http://' + url;
	}

	$url.val(url);
	$form.parents('.explore').find('iframe').attr('src', url)
	return false;
}