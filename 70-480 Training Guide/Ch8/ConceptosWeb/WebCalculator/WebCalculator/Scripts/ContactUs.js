/// <reference path="jquery-2.0.3.min.js" />

$(document).ready(function () {
    $('#submit').on('click', callServer);
});

function callServer() {
    var data = $('form[name="ContactForm"]').serialize();
    $.post('/ContactService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}