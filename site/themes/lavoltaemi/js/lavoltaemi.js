$(document).foundation();

console.log(Foundation.version);

$( document ).ready(function() {

	$('#body').animate({"opacity":"1"}, 600);

	/* Custom Slider button controls
	$(".next-slide").click(function() {
		var activeIdx = ~~$('.orbit .orbit-bullets .is-active').data('product-slider')
		var changeIdx = ~~$(this).data('product-slider');
		var chosenSlide = $('.orbit .orbit-slide').filter(function (index) {
		  return index === changeIdx
		})
    	$('.next-slide').foundation('changeSlide', true, chosenSlide, changeIdx);
    	console.log('clicked');
	});

	$(".prev-slide").click(function() {
		var activeIdx = ~~$('.orbit .orbit-bullets .is-active').data('product-slider')
		var changeIdx = ~~$(this).data('product-slider');
		var chosenSlide = $('.orbit .orbit-slide').filter(function (index) {
		  return index === changeIdx
		})
    	$('.prev-slide').foundation('changeSlide', true, chosenSlide, changeIdx);
    	console.log('clicked');
	});*/

	// Image Swap
	$('#thumbs img').click(function(){
    	$('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    	$('#description').html($(this).attr('alt'));
    	console.log('clicked');
	});
	
	// Custom Slider button controls
	$('.orbit-external-control').on('click', function () {
	  var activeIdx = ~~$('.orbit .orbit-bullets .is-active').data('data-slide');
	  console.log(activeIdx);
	  var changeIdx = ~~$(this).data('data-slide');
	  console.log(changeIdx);
	  var isLTR = (changeIdx > activeIdx) ? true : false;
	  console.log(isLTR);

	  if (activeIdx ===  changeIdx)
	    return
	
	  var chosenSlide = $('.orbit .orbit-slide').filter(function (index) {
	    return index === changeIdx
	  })
	  console.log(chosenSlide);
	
	  $('.orbit').foundation('changeSlide', isLTR, chosenSlide, changeIdx) 
	})
	
	//SnipCart
	$('#my-quantity').change(function() {
	    $('#my-button').data('item-quantity', $(this).val());
	});
	$('#my-size').change(function() {
	    $('#my-button').data('item-custom1-value', $(this).val());
	});
	$('#my-color').change(function() {
	    $('#my-button').data('item-custom2-value', $(this).val());
	});
	Snipcart.execute('config', 'show_continue_shopping', true);
	
	// Fancybox
	
	$('[data-fancybox="video"]').fancybox({
	  afterLoad : function( instance, current ) {
	
	     // Remove scrollbars and change background
	    current.$content.css({
				overflow   : 'visible',
	      background : '#000'
			});
				    
	  },
	  onUpdate : function( instance, current ) {
	    var width,
	        height,
	        ratio = 16 / 9,
	        video = current.$content;
	    
	    if ( video ) {
	      video.hide();
	
	      width  = current.$slide.width();
	      height = current.$slide.height() - 100;
	      
	      if ( height * ratio > width ) {
	        height = width / ratio;
	      } else {
	        width = height * ratio;
	      }
	
	      video.css({
	        width  : width,
	        height : height
	      }).show();
	
	    }
	  }
	})
	
});

