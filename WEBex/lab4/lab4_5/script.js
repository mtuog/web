$(document).ready(function() {
    var degree = 0;
    var $rotateImage = $("#rotateImage");

    function rotateImage() {
        degree += 15;
        $rotateImage.css('transform', 'rotate(' + degree + 'deg)');
    }

    setInterval(rotateImage, 2000);
});
