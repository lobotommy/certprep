"use strict";

    var onload = function() {

    var online = document.getElementById('online');
    if(online) {
        online.innerHTML = "you are online";
    }
    else {
        online.innerHTML = "you are offline";
    }

    if(typeof(Storage) !== "undefined") {
        var lastPositionElement = document.getElementById("lastPosition");

        var lastPositionData = localStorage.getItem("lastPosition");
        if(lastPositionData) {
            lastPositionElement.innerHTML = "Last position: " + lastPositionData;
        }
    }


    var button = document.getElementById("getPosition");
    var x = document.getElementById("content");
    button.onclick = function() {
        if(navigator.geolocation) {
            x.innerHTML = "Loading...";
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }
        else {
            alert(
                x.innerHTML = 'geolocation not supported');
        }
    };

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude +
        "<br>Accuracy: " + position.coords.accuracy;

        if(typeof(Storage) !== "undefined") {
            localStorage.lastPosition = x.innerHTML;
       }
    }

    function showError(error) {
        switch(error.code)
        {
            case error.PERMISSION_DENIED:
                x.innerHTML="User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML="Location information is unavailable.";
                break;
            case error.TIMEOUT:
                x.innerHTML="The request to get user location timed out.";
                break;
            default:
                x.innerHTML="An unknown error occurred.";
                break;
        }
    }
};

window.onload = onload();