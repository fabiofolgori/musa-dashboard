$(document).ready(function(){

    $('.main-carousel').flickity({

        // options
        cellAlign: 'center',
        contain: true,
        autoPlay: true,
        selectedAttraction: 0.009,
        friction: 0.15,
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true
    });

    console.log('ciao');

});
