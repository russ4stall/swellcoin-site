$(document).ready(function () {

    // MOBILE NAVBAR TOGGLE

    $("#nav-toggle").click(function () {
        $(this).toggleClass('open');
        $("#main-nav ul").slideToggle();

        // delay change of logo color 
        var $navTitle = $("#nav-title");
        var delayTime = 80;
        if ($navTitle.hasClass("open")) {
            delayTime = 300;
        }

        $($navTitle).delay(delayTime).queue(function (next) {
            $(this).toggleClass('open');
            next();
        });
    });

    // CAROUSEL

    $(".carousel").slick({
        'autoplay': true,
        'autoplaySpeed': 5000,
        'arrows': false
    });

    // CONTACT FORM

    var $contactForm = $("#contact-form");
    $contactForm.find("button").click(function () {

        var formData = $contactForm.serializeArray();

        $.ajax({
            url: "https://formspree.io/contact@swellcoin.com",
            method: "POST",
            data: formData,
            dataType: "json"
        }).done(function () {
            $contactForm.hide();
            $("#success-msg").show();
        }).fail(function () {
            alert("There was an error submitting this form. Please try again later, or simply send us an email at contact@swellcoin.com");
        });
    })
}); 