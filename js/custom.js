$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', 'Введите название или артикул');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

$('.button-phone').click(function(){
	$(this).toggleClass('active'), 
	$('.contact').slideToggle(); 
	return false;
});

$('.button-nav').click(function(){
	$(this).toggleClass('active'), 
	$('.navigation').slideToggle(); 
	return false;
});

$('.button-search').click(function(){
	$(this).toggleClass('active'), 
	$('.search').slideToggle(); 
	return false;
});

$('.button-basket').click(function(){
	$(this).toggleClass('active'), 
	$('.nav_basket').slideToggle(); 
	return false;
});

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport(320).width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


/*slick============================*/

 $('.sl').slick({
 	speed: 700,
 	autoplaySpeed: 3000,
 	autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,

 });


$(function() {  

    // Default
    jQuery.scrollSpeed(100, 2000 ); 
    
});