$(document).ready(function() {

    window.onscroll = function() { navCheck(); };

    var navbar = document.getElementById("navigation");

    var about = document.getElementById("about");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navCheck() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            about.classList.add("pad");
        } else {
            navbar.classList.remove("sticky");
            about.classList.remove("pad");
        }
    }

});