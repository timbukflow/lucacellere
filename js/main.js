$(document).ready(function () {
    
////////////// Navigation / Header / Impressum //////////////
    
    $('.navinfo').click(function() {
        $('.navinfocontainer').css('left','0px');
    });
    
    $('.closercursor').click(function() {
        $('.navinfocontainer').css('left','-100%');
    });
    
    $('.opencursor').click(function() {
        var navinfo = $(this).attr("data-navinfo");
        $(navinfo).delay(500).show(600);
    });
    
    $('.closercursor').click(function() {
        var closer = $(this).attr("data-closer");
        $(closer).hide(600);
    });
    
    $('.impressum').click(function() {
        $('.ficontainer').slideDown(500);
    });
    
    $('.ficontainer').click(function() {
        $('.ficontainer').slideUp(500);
    }); 
    
});

