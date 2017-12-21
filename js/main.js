(function($) {
    "use strict";

/*--
    Menu Sticky
-----------------------------------*/
var $window = $(window);
$window.on('scroll', function() {
	var scroll = $window.scrollTop();
	if (scroll < 300) {
		$(".sticker").removeClass("stick");
	}else{
		$(".sticker").addClass("stick");
	}
});
/*--
    Mobile Menu
-----------------------------------*/
$('.main-menu').meanmenu({
	meanScreenWidth: '991',
	meanMenuContainer: '.mobile-menu',
	meanMenuClose: '<i class="pe-7s-close-circle"></i>',
	meanMenuOpen: '<i class="pe-7s-menu"></i>',
	meanRevealPosition: 'right',
	meanMenuCloseSize: '30px',
});

/*--
    Nivo Slider
-----------------------------------*/
$('#home-slider').nivoSlider({
    directionNav: true,
    animSpeed: 1000,
    effect: 'random',
    slices: 18,
    pauseTime: 88885000,
    pauseOnHover: false,
    controlNav: false,
    prevText: '<i class="fa fa-long-arrow-left"></i>',
    nextText: '<i class="fa fa-long-arrow-right"></i>'
});

/*--
	Home Slick Slider
-----------------------------------*/
/*-- Image Slider --*/
$('.home-slick-image-slider').slick({
    asNavFor: '.home-slick-text-slider',
    slidesToShow: 1,
    prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
            }
        },
    ]
});
/*-- Text Slider --*/
$('.home-slick-text-slider').slick({
    arrows: false,
    asNavFor: '.home-slick-image-slider',
    slidesToShow: 1,
});

/*--
	Isotop with ImagesLoaded
-----------------------------------*/
var productFilter = $('.isotope-product-filter');
var productGrid = $('.isotope-grid');
/*-- Images Loaded --*/
productGrid.imagesLoaded( function() {
    /*-- Filter List --*/
    productFilter.on( 'click', 'button', function() {
        productFilter.find('button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        productGrid.isotope({ filter: filterValue });
    });
    /*-- Filter Grid --*/
    productGrid.isotope({
      itemSelector: '.isotope-item',
      masonry: {
        columnWidth: '.isotope-item',
      }
    });
});

/*--
    Price Range
-----------------------------------*/
$('#price-range').slider({
   range: true,
   min: 0,
   max: 700,
   values: [ 70, 500 ],
   slide: function( event, ui ) {
    
	$('.price-amount').val( 'â‚¬' + ui.values[ 0 ] + ' - â‚¬' + ui.values[ 1 ] );
    
   }
});
$('.price-amount').val( 'â‚¬' + $('#price-range').slider( 'values', 0 ) +
   ' - â‚¬' + $('#price-range').slider('values', 1 ) );

/*--
    Product Quantity
-----------------------------------*/
$('.product-quantity').append('<span class="dec qtybtn"><i class="fa fa-angle-left"></i></span><span class="inc qtybtn"><i class="fa fa-angle-right"></i></span>');
$('.qtybtn').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find('input').val(newVal);
});

/*--
    Product Slider 4 Item
-----------------------------------*/
$('.product-slider-4').slick({
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1169,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
 
/*--
    Product Details Thumbnail Slider
-----------------------------------*/
$('.pro-thumb-img-slider').slick({
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
})

/*--
    Checkout Form Collapse on Checkbox
-----------------------------------*/
$('.checkout-form input[type="checkbox"]').on('click', function(){
    var $collapse = $(this).data('target');
    if( $(this).is(':checked') ){
        $('.collapse[data-collapse="'+$collapse+'"]').slideDown();
    }else {
        $('.collapse[data-collapse="'+$collapse+'"]').slideUp();
    }
})

/*--
    Product Filter Toggle
-----------------------------------*/
$('.product-filter-toggle').on('click', function(){
    $('.product-filter-wrapper').slideToggle();
})

/*-- 
    ScrollUp
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});

/*-- 
    WOW
-----------------------------------*/
new WOW().init();

})(jQuery);

/*----------------------------*/
$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});



/*---------------------------------*/
$(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval:6000
    });

// scroll slides on mouse scroll 
$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
            
            
        }
        else{
            $(this).carousel('next');
            
        }
    });

//scroll slides on swipe for touch enabled devices 

    $("#myCarousel").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
    
});
//animated  carousel start
$(document).ready(function(){

//to add  start animation on load for first slide 
$(function(){
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass(animationName);
                });
            }
        });
             $('.item1.active img').animateCss('slideInDown');
             $('.item1.active h2').animateCss('zoomIn');
             $('.item1.active p').animateCss('fadeIn');
             
});
    
//to start animation on  mousescroll , click and swipe


 
     $("#myCarousel").on('slide.bs.carousel', function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass(animationName);
                });
            }
        });
    
// add animation type  from animate.css on the element which you want to animate

        $('.item1 img').animateCss('slideInDown');
        $('.item1 h2').animateCss('zoomIn');
        $('.item1 p').animateCss('fadeIn');
        
        $('.item2 img').animateCss('zoomIn');
        $('.item2 h2').animateCss('swing');
        $('.item2 p').animateCss('fadeIn');
        
        $('.item3 img').animateCss('fadeInLeft');
        $('.item3 h2').animateCss('fadeInDown');
        $('.item3 p').animateCss('fadeIn');
    });
});
