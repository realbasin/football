/**
 * jQuery Line Progressbar
 * Author: KingRayhan<rayhan095@gmail.com>
 * Author URL: http://rayhan.info
 * Version: 1.0.0
 */

(function($){
	'use strict';

	$.fn.LineProgressbar = function(options){

		var options = $.extend({
			percentage : null,
			ShowProgressCount: true,
			duration: 1000,
			percentage2:null,
			// Styling Options
			fillBackgroundColor: '#263d4f',
			fillBackgroundColor2: '#bf1e2d',
			backgroundColor: '#fff',
			radius: '0px',
			borderTopLeftRadius: '0px',
			borderTopRightRadius: '0px',
			borderBottomLeftRadius: '0px',
			borderBottomRightRadius: '0px',
			height: '10px',
			width: '100%',
			position:'absolute',
			left:options.percentage/2,
			top:'50%',
			right:options.percentage2/2,
		},options);

		return this.each(function(index, el) {
			// Markup
			$(el).html('<div class="progressbar"><div class="proggress"></div><div class="_proggress"></div><div class="percentCount"></div><div class="percentCount2"></div></div>');
			


			var progressFill = $(el).find('.proggress');
			var progressBar= $(el).find('.progressbar');
			var percentCount= $(el).find('.percentCount');

			var _proggressFill = $(el).find('._proggress');
			var percentCount2= $(el).find('.percentCount2');


			progressFill.css({
				backgroundColor : options.fillBackgroundColor,
				height : options.height,
				borderRadius: options.radius,
				borderTopLeftRadius: options.borderTopLeftRadius,
				// borderTopRightRadius: options.borderTopRightRadius,
				borderBottomLeftRadius: options.borderBottomLeftRadius,
				// borderBottomRightRadius: options.borderBottomRightRadius
			});

			_proggressFill.css({
				backgroundColor : options.fillBackgroundColor2,
				height : options.height,
				borderRadius: options.radius,
				// borderTopLeftRadius: options.borderTopLeftRadius,
				borderTopRightRadius: options.borderTopRightRadius,
				// borderBottomLeftRadius: options.borderBottomLeftRadius,
				borderBottomRightRadius: options.borderBottomRightRadius
			});





			progressBar.css({
				width : options.width,
				backgroundColor : options.backgroundColor,
				borderRadius: options.radius,
			});
			percentCount.css({
				position: options.position,
				top: options.top,
				left:options.left + "%"
			});
			percentCount2.css({
				position: options.position,
				top: options.top,
				right:options.right + "%"
			});
			// Progressing
			progressFill.animate(
				{
					width: options.percentage + "%"
				},
				{	
					step: function(x) {//每一步执行完之后要执行的函数  可选
						if(options.ShowProgressCount){
							$(el).find(".percentCount").text(Math.round(x) + "%");
						}
					},
					duration: options.duration
				}
			);
			_proggressFill.animate(
				{
					width: options.percentage2 + "%"
				},
				{	
					step: function(x) {//每一步执行完之后要执行的函数  可选
						if(options.ShowProgressCount){
							$(el).find(".percentCount2").text(Math.round(x) + "%");
						}
					},
					duration: options.duration
				}
			);
		////////////////////////////////////////////////////////////////////
		});
	}
})(jQuery);