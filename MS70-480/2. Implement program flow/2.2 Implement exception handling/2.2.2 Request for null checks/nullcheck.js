window.onload = init;
function init() {

    var hello;
    if(hello === null) {
        hello = "null?";
    }
    else if(!hello)  {
        hello = "hello!";
    }

    document.writeln(hello + "<br/>");

    var check;
    document.writeln((check === undefined).toString());
}