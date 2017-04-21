$(document).ready(function () {

    // Navbar
    $("#nav-toggle").click(function () {
        $(this).toggleClass('open');
        $("#main-nav ul").slideToggle();
    });

}); 