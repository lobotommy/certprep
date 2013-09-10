var onload = function() {
    "use strict";

    var a = "text";
    var b = "text";
    document.writeln("a === b is " + (a === b).toString() + "<br>");

    var c = new String("text");
    var d = new String("text");
    var two = document.getElementById("two");
    document.writeln("c === d is " + (c === d).toString() + "<br>");
    document.writeln("c == d is " + (c == d).toString() + "<br>");


    var withConversion = a;
    document.writeln("Character 3 in " + withConversion + " is " + withConversion.charAt(2) + " which has character code " + withConversion.charCodeAt(2) + "<br/>");


    var withoutConversion = new String(a);
    document.writeln("Character 3 in " + withoutConversion + " is " + withoutConversion.charAt(2) + " which has character code " + withoutConversion.charCodeAt(2) + "<br/>");


    document.writeln("Charcode 120 is " + String.fromCharCode(120) +"<br/>");


    document.writeln("'banansplit'.substring(2,4) = " + "banansplit".substring(2, 4) + ", gives start and stop index" + "<br/>");
    document.writeln("'banansplit'.subst(2,4) = " + "banansplit".substr(2, 4) + ", gives start index and length" +"<br/>");

    var arra = [1, 2, 3, 4];
    var arrb = [4, 5, 6, 7];
    var concat = arra.concat(arrb).reverse();
    concat.shift();
    document.writeln(concat.join() + "<br/>");


    var competitors = [];
    var results = {'Mary':'23:16', 'Ana':'21:19', 'Evelyn':'22:47'};

    for (var prop in results) {
        competitors[competitors.length] = prop;
    }
    document.writeln(competitors.join() +"<br/>");

    var competitors2 = [];

    for (var prop in results) {
        results.hasOwnProperty(prop) && competitors2.push(prop);
    }
    document.writeln(competitors2.join() +"<br/>");
    document.writeln(competitors2.toString() +"<br/>");
    document.writeln("competitors2 still is " + competitors2.length + " items.");

    Array.prototype.ucase=function()
    {
        for (var i=0;i<this.length;i++)
        {this[i]=this[i].toUpperCase();}
    }

    var Person = function(firstName) {
        this.firstName =  firstName;
    };
    var personProto = Person.prototype;
    Object.defineProperty(personProto, "firstName", function() { return this._firstName;});


    var person = new Person("Tommy");
    alert(person.firstName);


    function Item(val) {
        Object.defineProperty(this, "number", {
            writable: false,
            value: 9
        });
    }


    var user = new Item(5);
    //user.number = 4;
    document.writeln(user.number + "<br/>");
};

window.onload = onload();