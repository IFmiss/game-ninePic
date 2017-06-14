var Loading = (function(){
	var loadingShuZhuang = function(){
		if(!$('body').find('.myLoading').length){
			var str = '';
			str += '<div class="bg-mask-loading"></div>';
			str += '<div class="loading myLoading">';
			str += '<span class="span1 shuXing"></span>';
			str += '<span class="span2 shuXing"></span>';
			str += '<span class="span3 shuXing"></span>';
			str += '<span class="span4 shuXing"></span>';
			str += '<span class="span5 shuXing"></span>';
			$('body').prepend(str);  //传入id class 或者document
		}
	}

	var loadingYuan = function(){
		if(!$('body').find('.myLoading').length){
			var str = '';
			str += '<div class="bg-mask-loading"></div>';
			str += '<div class="loading myLoading loadEffect">';
			str += '<div><span></span></div>';
			str += '<div><span></span></div>';
			str += '<div><span></span></div>';
			str += '<div><span></span></div>';
			str += '<div><span></span></div>';
			str += '</div>';
			$('body').prepend(str);  //传入id class 或者document
		}
	}

	var removeLoading = function(){
		$('.bg-mask-loading').remove();
		$('.myLoading').remove();
	}

	return{
		loadingShuZhuang:loadingShuZhuang,
		loadingYuan:loadingYuan,
		removeLoading:removeLoading,
	}

})();