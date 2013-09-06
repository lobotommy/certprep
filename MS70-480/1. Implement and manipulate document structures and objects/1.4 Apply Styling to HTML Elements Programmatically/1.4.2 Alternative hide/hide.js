"use strict";
$(document).ready(function() {
    var previousHidden = null;
    var a = document.getElementById("A");

    $("div").hover(function(event) { $(this).addClass("bingo")}, function() { $(this).removeClass("bingo")});
    $("div").click(function(event) {
/*        if(previousHidden) {
            previousHidden.removeClass("hidden");
        }
        previousHidden = $(this);
        previousHidden.addClass("hidden");
        */

        if(previousHidden) {
            previousHidden.show("fast", "swing");
        }
        previousHidden = $(this);
        previousHidden.hide("fast", "swing");

    });
});
