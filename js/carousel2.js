$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        indicators: true
    });
});

var autoplay = true;

setInterval(function() { 
    if(autoplay) $('.carousel.carousel-slider').carousel('next');
}, 6000);

$('.carousel.carousel-slider').hover(function(){ 
     autoplay = false; 
}, function(){ 
     autoplay = true; 
});