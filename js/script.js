$(document).ready(function() {

    window.onscroll = function() { navCheck(); };

    var navbar = document.getElementById("navigation");

    // Get the offset position of the navbar
    var fixed = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navCheck() {
        if (window.pageYOffset >= fixed) {
            navbar.classList.add("fixed-top");
        } else {
            navbar.classList.remove("fixed-top");
        }
    }

});