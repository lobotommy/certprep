$(document).ready(function() {

    var url = "stuff.json";
    $.getJSON(url, function(data) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
    })
        .done(function() {

            $("status").innerHTML = "<h1>Ferdig</h1>";
        })
        .fail(function() {
            alert(this.error);
        })
        .always(function() {
            console.log("fortsetter")
        });

});