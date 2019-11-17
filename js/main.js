$(document).ready(function () {
    
////////////// Navigation / Header / Impressum //////////////
    
    $('.navinfo').click(function() {
        $('.navinfocontainer').css('left','0px');
    });
    
    $('.closer').click(function() {
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
    
    $('.monster').click(function () {
        $('body').toggleClass("black-background");
        $('.bw').toggleClass("black-font");
        $('.monster').toggleClass('black-monster');
    });
    
    $('.impressum').click(function() {
        $('.ficontainer').slideDown(500);
    });
    
    $('.ficontainer').click(function() {
        $('.ficontainer').slideUp(500);
    });
    
    
////////////// Fullscreen Slider //////////////
   

    $(".click").on("click", function(event) {
      var hash = $(this).attr("data-target"),
        target = $("#" + hash);
    
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(target).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      });
    
    
});

