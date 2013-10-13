/// <reference path="jquery-2.0.3.js" />
$(document).ready(function() {
    $('#media').on('play', function() {
        $('#message').html($(this)[0].currentSrc);
    });
});