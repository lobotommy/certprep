'use strict'

window.onload = init;
function init() {

    var elements = document.getElementsByClassName('focusable');

    for(var cnt = 0; cnt < elements.length; cnt++) {
        elements[cnt].onblur = function(e) { PerformFunction(e, 'blur'); };
        elements[cnt].onfocus = function(e) { PerformFunction(e, 'focus'); };
    }

    function PerformFunctionIfIsButton(event, resultElement) {
        if (event.target.type === "text") {
            PerformFunction(event, resultElement);
        }
    }

    function PerformFunction(event, resultElement) {
        var result = document.getElementById(resultElement);
        result.innerHTML = event.target.value;
    }

    var body = document.body;
    body.addEventListener('mouseover', function(e) { PerformFunctionIfIsButton(e, 'mouseover'), true });
}

