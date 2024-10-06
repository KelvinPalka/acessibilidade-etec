jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 200) {
        jQuery(".back-to-top").removeClass("hidden");
    } else {
        jQuery(".back-to-top").addClass("hidden");
    }
});
jQuery(document).ready(function(){
    jQuery('.back-to-top').click(function(){
        jQuery('html, body').animate({scrollTop : 0},800);
        return false;
    });
});