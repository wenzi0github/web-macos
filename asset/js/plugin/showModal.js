(function($){
	'use strict';

	function ShowModal(options){
		this.defaults = {
			'css' : {
				'min-width' : '300px',
				'min-height' : '400px',
				'background' : '#fff'
			},
			'html' : '',
            'obj' : '',
            'single' : false, // 是否只出现一个提示框
		}
		this.HTML = '<div class="modal"><div class="modal_title"><span class="close">×</span><span class="tomin">-</span><span class="tomax">□</span></div><div class="modal_content"></div><div class="change"></div></div>';

		$.extend(this.defaults, options);

        if(this.defaults.single){
            if(!this.defaults.obj.hasClass('single')){
                this.show();
                this.defaults.obj.addClass('single');
            }
        }else{
            this.show();
        }
	}
	ShowModal.prototype.show = function(){
		var $html = $(this.HTML);
        var self = this;
		$html.css(this.defaults.css).children('.modal_content').html(this.defaults.html);
		$('#global_content').append($html);
		$html.addClass('active').fadeIn().siblings().removeClass('active');

        $html.on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
        })

		$('.modal .close').on('click', function(){
            self.defaults.obj.removeClass('single');
			$(this).parents('.modal').fadeOut(function(){
                $(this).prev().addClass('active');
                $(this).remove();
            });
		})

		this.move($html.children('.modal_title'));
	}

	var dragging = false;
	ShowModal.prototype.move = function($obj){
        var iX, iY;
        var iLeft, iTop;

        $('#global_content').find($obj).on('mousedown', function(e) {
            var $parent = $(this).parent();

        	if(!$parent.hasClass('active')){
        		$parent.addClass('active').siblings().removeClass('active');
        	}

            dragging = true;
            iX = e.clientX - $(this)[0].offsetLeft;
            iY = e.clientY - $(this)[0].offsetTop;
            iLeft = parseFloat($parent.css('left'));
            iTop = parseFloat($parent.css('top'));
            $(this)[0].setCapture && $(this)[0].setCapture();
            return false;
        });
        $(document).on('mousemove', function(e) {
            if (dragging) {
                var e = e || window.event;
                
                var $parent = $obj.parent('.active');

                var left = $parent.css('left');
                var top = $parent.css('top');
                var oX = iLeft + (e.clientX - iX);
                var oY = iTop + (e.clientY - iY);
                if(oY<26){
                    oY = 26;
                }
                $parent.css({"left":oX + "px", "top":oY + "px"});
                return false;
            }
        });
        $('#global_content').on('mouseup', $obj, function(e) {
            dragging = false;
            $(this)[0].releaseCapture && $(this)[0].releaseCapture();
        });
        $obj.on('mouseleave', function(){
            // dragging = false;
        })
	}

	$.showModal = function(options){
		new ShowModal(options);
	};

})(jQuery);