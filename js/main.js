$(document).ready(function () {
    
////////////// Navigation / Header / Impressum //////////////
    
    $('.navinfo').click(function() {
        $('.navinfocontainer').css('left','0px');
    });
    
    $('.navinfocontainer').click(function() {
        $('.navinfocontainer').css('left','-100%');
    });
    
    $('.navbutton').click(function() {
        var navinfo = $(this).attr("data-navinfo");
        $(navinfo).show(500);
    });
    
    $('.closerinfo').click(function() {
        var closer = $(this).attr("data-closer");
        $(closer).hide(500);
    });

    
    
    $('.impressum').click(function() {
        $('.ficontainer').slideDown(500);
    });
    
    $('.ficontainer').click(function() {
        $('.ficontainer').slideUp(500);
    });
    
    
    
});

