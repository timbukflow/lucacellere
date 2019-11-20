$(document).ready(function () {
    
////////////// Navigation / Header / Impressum //////////////
    
    $('.navinfo').click(function() {
        $('.navinfocontainer').css('left','0px');
    });
    
    $('.closernav').click(function() {
        $('.navinfocontainer').css('left','-100%');
    });
    
    $('.open').click(function() {
        var navinfo = $(this).attr("data-navinfo");
        $(navinfo).delay(300).show(500);
    });
    
    $('.closer').click(function() {
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

