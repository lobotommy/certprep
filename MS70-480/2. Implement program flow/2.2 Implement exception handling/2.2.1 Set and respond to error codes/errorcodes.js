window.onload = init;

function init() {

    var scapegoat = document.getElementById('scapegoat');
    scapegoat.onclick = scapegoatClicked;

    function scapegoatClicked() {
        try {
            // jibberish // this is of course not defined

            var nuArray = function (values) {
                for (var i in values) {this[i] = values[i]}
            }
            nuArray.prototype = Array.prototype;

            var defaultProperties = {configurable: true, writable: true, enumerable: false, get: undefined, set: undefined, value: undefined};

            Object.defineProperty(nuArray, "grep", defaultProperties)
        }
        catch (e if e instanceof TypeError) {
            document.writeln("TypeError occurred: " + e +"<br/>");
            alert(e.message);
        } catch (e if e instanceof RangeError) {
            document.writeln("RangeError occurred: " +e +"<br/>");
            alert(e.message);
        } catch (e if e instanceof EvalError) {
            document.writeln("EvalError occurred: " +e +"<br/>");
            alert(e.message);
        } catch (e) {
            // statements to handle any unspecified exceptions
            document.writeln("Unspecified error occurred: " +e +"<br/>");
            alert(e.message);
        }
    }

    var scapegoat2 = document.getElementById('scapegoat2');
    scapegoat2.onclick = scapegoat2Clicked;
    function scapegoat2Clicked() {
        try {

            throw { message: "This is a custom error message which happened in "
                + this.id + " of type " + this.type
            };
        }
        catch(error) {
            document.writeln("Error occurred: " + error.message +"<br/>");
            alert(error.message);
        }
    }
}