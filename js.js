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

// bglh de deficiente de cor dos óio

function toggleDropdown() {
var dropdown = document.getElementById("colorDropdown");
var button = document.getElementById("accessibilityBtn");
dropdown.classList.toggle("show");
button.classList.toggle("active");
}

function applyFilter(type) {
var htmlElement = document.documentElement;
var filter = "none";
switch (type) {
    case "protanopia":
    filter = "url(#protanopia-filter)";
    break;
    case "deuteranopia":
    filter = "url(#deuteranopia-filter)";
    break;
    case "tritanopia":
    filter = "url(#tritanopia-filter)";
    break;
}
htmlElement.style.filter = filter;
toggleDropdown();
}

document.addEventListener("click", function (event) {
var dropdown = document.getElementById("colorDropdown");
var button = document.getElementById("accessibilityBtn");
if (!event.target.closest(".accessibility-wrapper")) {
    dropdown.classList.remove("show");
    button.classList.remove("active");
}
});
