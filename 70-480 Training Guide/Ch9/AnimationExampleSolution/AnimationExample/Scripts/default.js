/// <reference path="jquery-2.0.3.js" />

var milliseconds = 1000;
var opacity = 0.5;

function showMessageAsync(message) {
    var coverPromise = displayCoverAsync(message);
    var messagePromise = coverPromise.pipe(function () {
        return showMessageContentAsync(message);
    });
    return messagePromise;
}

function displayCoverAsync() {
    return $('#cover').fadeTo(milliseconds, opacity).promise();
}

function showMessageContentAsync(message) {
    $('#message').html(message);
    $('#messageBox').show();
    return $('#messageContent').slideDown(milliseconds).promise();
}

function displayTimeAsync() {

    var message = "The time is now " + getTime();
    return showMessageAsync(message);
}

function hideMessageAsync() {
    var messagePromise = hideMessageContentAsync();
    var coverPromise = messagePromise.pipe(function () {
        return hideCoverAsync();
    });
    return coverPromise;
}


function hideMessageContentAsync() {
    var promise = $('#messageContent').slideUp(milliseconds).promise();
    promise.done(function () {
        $('#messageBox').hide();
    });
    return promise;
}

function hideCoverAsync() {
    return $('#cover').fadeOut(milliseconds).promise();
}

function getTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    return hours + ' : ' + (minutes < 10 ? '0' + minutes : minutes);
}

$(document).ready(function() {
    $('#btnShowMessage').click(displayTimeAsync);
    $('#btnMessageOk').click(hideMessageAsync);
});