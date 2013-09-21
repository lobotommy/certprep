window.onload = init;

function init() {
    getThis();

    var clickable = document.getElementById('clickable');
    clickable.addEventListener('click', function() {
        alert("'this' in event handlers equals the element: " + (this === clickable).toString());
    })

    var clickable2 = document.getElementById('clickable2');
    clickable2.onclick = getThis;

    var clickable3 = document.getElementById('clickable3');
    clickable3.onclick = getThis();
}

function getThis() {

    if(this === window) {
       alert("'this' is now the window");
    }
    else {
        alert("'this' is now: " +this.id);
    }
}