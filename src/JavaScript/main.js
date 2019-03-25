$(document).ready(function () {
   $('.steps-box-carousel').slick({
       loop: true,
       infinite: true,
       initialSlide: 0,
       slidesToShow:3,
       slidesToScroll: 1,
       prevArrow: $('.prev'),
       nextArrow: $('.next'),
       responsive:  'unslick'
   });

    $('.dropdown').ddslick({
        width:'100%',
        onSelected: function(selectedData){
            //callback function: do something with selectedData;
        }
    });
});



