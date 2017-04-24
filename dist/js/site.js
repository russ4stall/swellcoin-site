$(document).ready(function () {
    // Mobile Navbar toggle
    $("#nav-toggle").click(function () {
        $(this).toggleClass('open');
        $("#main-nav ul").slideToggle();

        // delay change of logo color 
        var $navTitle = $("#nav-title");
        var delayTime = 80;
        if ($navTitle.hasClass("open")) {
            delayTime = 300;
        }

        $($navTitle).delay(delayTime).queue(function(next){
            $(this).toggleClass('open');
            next();
        });
    });
}); 