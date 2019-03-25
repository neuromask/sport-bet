$(document).ready(function () {

    $('.dropdown').ddslick({
        width:'100%'
    });

});

function JSON_CALLBACK(dataWeGotViaJsonp){
    var arr = dataWeGotViaJsonp;
    //console.log(arr);
    for (var i = 0; i < arr.length; i++){
        var slide = arr[i];
        var el = document.getElementById('carousel'),
            elChild = document.createElement('div');

        elChild.innerHTML = '<div class=\"steps-box-slide\"> <div class=\"row\"> <div class=\"column\"> <div class=\"team-img team-1-img\"> <img src=\"' + slide.homeLogo + '\" title=\"' + slide.home + '"> </div> <h6 class=\"team-name center\">' + slide.home + '</h6> </div> <div class=\"column\"> <div class=\"info-img center\"> <img src=\"' + slide.leagueLogo + '\" title=\"' + slide.sport + '\"> </div> <h6 class=\"info-type center\">' + slide.sport + '</h6> <h6 class=\"info-date center\">' + getDayMonth(slide.kickoff) + '</h6> <h6 class=\"info-time center\">' + getTime(slide.kickoff) + '</h6> </div> <div class=\"column\"> <div class=\"team-img team-2-img\"> <img src=\"' + slide.awayLogo + '\" title=\"' + slide.awayLogo + '\"> </div> <h6 class=\"team-name center\">' + slide.away + '</h6> </div> </div> <div class=\"row\"> <div class=\"column\"> <div class=\"rate center\"> <span class=\"type\">1</span> <span class=\"num\">' + slide.odd1 + '</span> </div> </div> <div class=\"column\"> <div class=\"rate center\"> <span class=\"type\">X</span> <span class=\"num\">' + slide.oddx + '</span> </div> </div> <div class=\"column\"> <div class=\"rate center\"> <span class=\"type\">2</span> <span class=\"num\">' + slide.odd2 + '</span> </div> </div> </div> </div>';
        el.appendChild(elChild);
    }

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

}

function getDayMonth(d) {
    var x = +d;
    var date = new Date(x);
    var monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    var daynum = date.getDate();
    var monthname = monthNames[date.getMonth()];

    return  daynum + ' ' + monthname;
}
function getTime(d) {
    var x = +d;
    var date = new Date(x);
    var minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
    var hour = date.getHours();
    return  hour+':'+minutes;
}

var script = document.createElement('script');
script.src = '//topleaguesandmatches.com/topMatches?v=1545643094533566';
document.querySelector('head').appendChild(script);
script.parentNode.removeChild(script);







