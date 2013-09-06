"use strict";

var program = function() {
     /*
    var element = document.getElementById('bingoButton');
    alert(element.clientHeight);
    alert(element.clientWidth);
    alert(element.clientHeight);
    alert(element.clientHeight);
    alert(element.clientHeight);
    alert(element.clientHeight);
    alert(element.clientHeight);
    alert(element.clientHeight);
    alert(element.clientHeight);
*/
};

var buttonClick = function() {

    var sender = document.getElementById('superheading');

    //alert(document.baseURI);
    //alert(sender.baseURI);

    if(!sender.hasChildNodes())
    {
        alert(sender.getAttribute('id') +  ' has no children');
    }
    else {
        var lastChild = sender.lastChild;

        var previous = lastChild.previousSibling;
        if(previous != null) {
            previous.classList.remove("fat");
            previous.style.color = 'red';
        }
        lastChild.classList.add("fat");
    }


    firstChildGetsANewChild(sender);
};


var firstChildGetsANewChild = function(parent) {

    var label = document.createElement('li');
    label.appendChild(document.createTextNode("jababababa"));
    parent.appendChild(label);
};


window.onload = program;


