if(!window.jQuery){ throw Error('This blog needs jQuery');}
(function($){

	function BlogController(){

	} 

	BlogController.prototype.stickyNavigation = function(){
	var offset = $('#navigation').offset().top;
		$(window).bind('scroll', function() {
			if ($(window).scrollTop() > offset) {
				$('#navigation').addClass('fixed');
				$('#main').css('margin-top','46px');
			}
			else {
				$('#navigation').removeClass('fixed');
				$('#main').css('margin-top','0px');
			}
		});
	};

	BlogController.prototype.bindActiveLine = function(){
		var self = this;
		var activeLine = $("#active-line");
		$("#navigation .main-navigation li a").hover(function(){
			var activeLine = $("#active-line");
			$el = $(this);
	        leftPos = $el.position().left;
	        newWidth = $el.parent().width();
	        activeLine.stop().animate({
	            left: leftPos,
	            width: newWidth
	        });
		},function(){
			activeLine.stop().animate({
            	left: activeLine.data("originalLeft"),
            	width: activeLine.data("originalWidth")
        	});  
		});
	};

	BlogController.prototype.showActiveTab = function(){
		var path = window.location.pathname;
		console.log("url = ",path);
		if(path =="/blog/archives/"){
			$("#archives").addClass("active");
		}else if(path == "/about/"){
			$("#about").addClass("active");
		}else{
			$("#blog").addClass("active");
		}
		var activeLine = $("#active-line");
		var activeTab = $(".active");
		activeLine.css("left",activeTab.position().left).width(activeTab.width()).data("originalLeft",activeLine.position().left).data("originalWidth",activeLine.width());
	};

	window.BlogController = BlogController;

})(jQuery);


$(document).ready(function(){
	var controller = new  BlogController();
	controller.showActiveTab();
	controller.bindActiveLine();
	controller.stickyNavigation();
});
