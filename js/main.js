$(document).ready(function () {
    
////////////// Navigation / Header / Impressum //////////////
    
    $('.navinfo').click(function() {
        $('.navinfocontainer').css('left','0px');
        $('body').addClass('respfix');
    });
    
    $('.closernav').click(function() {
        $('.navinfocontainer').css('left','-100%');
        $('body').removeClass('respfix')
    });
    
    $('.open').click(function() {
        var navinfo = $(this).attr("data-navinfo");
        $(navinfo).css('left','0%');
        $('body').addClass('respfixinfo')
    });
    
    $('.closer').click(function() {
        var closer = $(this).attr("data-closer");
        $(closer).css('left','100%');
        $('body').removeClass('respfixinfo')
    });
    
    $('.impressum').click(function() {
        $('.ficontainer').slideDown(500);
    });
    
    $('.ficontainer').click(function() {
        $('.ficontainer').slideUp(500);
    }); 
    
});

