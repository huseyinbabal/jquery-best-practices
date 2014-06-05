(function (JBP) {
    JBP(window, document, window.jQuery);
}
(function (window, document, $) {

    $(".demo").on("click", function() {
        event.preventDefault();
        var $demoButton = $(this);
        var $demoRunButton = $(this).next();
        $(this).parent().next(".demo-area").slideToggle(500, function() {
            $demoButton.text(($(this).is(":visible")) ? "Hide Demo": "Show Demo");
            $demoRunButton.slideToggle(500);
        });
    });

}));