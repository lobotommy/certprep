"use strict";

var onload = function() {
    var element = document.getElementById("changeable");
    element.style.borderStyle = "dashed";

    var actionButton = document.getElementById("actionButton");

    actionButton.onclick = doStuff;
    function doStuff() {
        if(element.classList.contains("hiddenStyle"))
        {
            element.classList.remove("hiddenStyle");
        }
        else {
            element.classList.add("hiddenStyle");
        }
    };

};

window.onload = onload();