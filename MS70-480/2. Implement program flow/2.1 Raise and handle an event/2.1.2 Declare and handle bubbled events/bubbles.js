window.onload = init;

function init() {
    "use strict";
    var childElement = document.getElementById('childElement');
    var parentElement = document.getElementById('parentElement');

    function clickHandler(e) {

       var stopPropagation = document.getElementById('stopPropagation').checked;
        if(stopPropagation) {
            e.stopPropagation();
        }

        this.classList.add('gotIt');

    };

    childElement.onclick = clickHandler;
    parentElement.onclick = clickHandler;
}

