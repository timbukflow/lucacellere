$(document).ready(function () {
    
////////////// home fade in animation //
    
$('.navbutton').click(function() {
    var navinfo = $(this).attr("data-toggle");
    $(navinfo).show(500);
});

$('.infocontainer').click(function() {
    $('.infocontainer').hide(500);
});
    
    
    
    
    
    
     // home fade in animation //

    setTimeout(function () {
    $('.einleitung').addClass('fadeInUp');
    $('.cd-auto-hide-header').addClass('fadeInDown');}, 500
);
    
    // impressum //

    $('.impressum').click(function() {
        var totoggle = $(this).attr("data-toggle");
        $(totoggle).slideToggle(500);
        $(totoggle).next().hide();
        
        if ($(totoggle).is(":visible")) {
            $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000);
        }     
    });
    
});