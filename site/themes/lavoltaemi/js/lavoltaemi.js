$(document).foundation();

console.log(Foundation.version);

$( document ).ready(function() {

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
	
});

