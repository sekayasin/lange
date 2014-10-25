
function slideShow() {
    var $active = $('#slideshow img.active');

    if ($active.length == 0)
        $active = $('#slideshow img:last');

    var $next = $active.next().length ? $active.next() : $('#slideshow img:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
        $active.removeClass('active last-active');
    });

}

$(function() {
    setInterval("slideShow()", 5000);

    $('#portfolio').magnificPopup({
         delegate: 'a',
         type: 'image',
         image: {
             cursor: null,
             titleSrc: 'title'
         },
         gallery: {
             enabled: true,
             preload: [0, 1], // will preload 0 - before current, and 1 after the current image
             navigateByImgClick: true
         }
     });

    $("#date-picker").datepicker({
        minDate: new Date(),
        buttonImage: "images/cal.png",
        buttonImageOnly: true,
        buttonText: "Open Datepicker",
        showOn: "both",
        inline: true
    });

    $("#date-picker-out").datepicker({
        minDate: new Date(),
        buttonImage: "images/cal.png",
        buttonImageOnly: true,
        buttonText: "Open Datepicker",
        showOn: "both",
        inline: true
    });
});
