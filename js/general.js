$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#addshadow').addClass('addshadow');
    } else {
       $('#addshadow').removeClass('addshadow');
    }
});