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
        $(navinfo).css('left','0%');
    });
    
    $('.closer').click(function() {
        var closer = $(this).attr("data-closer");
        $(closer).css('left','100%');
    });
    
    $('.impressum').click(function() {
        $('.ficontainer').slideDown(500);
    });
    
    $('.ficontainer').click(function() {
        $('.ficontainer').slideUp(500);
    }); 
    
});

