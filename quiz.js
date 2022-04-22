/*
* Author: Oanh Pham
* Target: quiz.html
* Purpose: Load data from session storage and submit to server
* Credits: Oanh Pham
*/
"use strict"

//get variables from form and check rules//
function validate() {
    //initialize local variables
    var errMsg = "";        //stores the error message
    var result = true;      //assumes no errors

    if (errMsg != ""){  //only display message box if there is somthing to show
        alert(errMsg);
    }

    if (isNaN(stuid)) {
        errMsg = errMsg + "Your Student ID must be a number\n"
        result = false;
    }

    var name = document.getElementById("name").value;

    if (!name.match(/^[a-zA-Z]+$/)) {
        errMsg = errMsg + "Your first name must only contain alpha characters.\n";
        result = false;
    }

    var nineFour= document.getElementById("nineFour").selected;
    var nineFive = document.getElementById("nineFive").selected;
    var nineSix = document.getElementById("nineSix").selected;
    var nineSeven = document.getElementById("nineSeven").selected;

    /*  at least one anwser selected */
    if (!(nineFour || nineFive || nineSix || nineSeven)) {
        errMsg += "Please select one answer.\n";
        result = false;
    }

    var lossless= document.getElementById("lossless").selected;
    var lossy = document.getElementById("lossy").selected;

    /*  at least one anwser selected */
    if (!(lossless || lossy)) {
        errMsg += "Please select one answer.\n";
        result = false;
    }

    var firefox= document.getElementById("firefox").selected;
    var safari = document.getElementById("safari").selected;
    var chrome = document.getElementById("chrome").selected;
    var all = document.getElementById("all").selected;

    /*  at least one anwser selected */
    if (!(firefox || safari || chrome || all)) {
        errMsg += "Please select one answer.\n";
        result = false;
    }

    var losslesscomp= document.getElementById("losslesscomp").selected;
    var notprint = document.getElementById("notprint").selected;
    var support = document.getElementById("support").selected;
    var full = document.getElementById("full").selected;

    /*  a t least one anwser selected */
    if (!(losslesscomp || notprint || support || full)) {
        errMsg += "Please select one answer.\n";
        result = false;
    }

    var images= document.getElementById("images").selected;
    var transparency = document.getElementById("transparency").selected;
    var all = document.getElementById("all").selected;

    /*  at least one anwser selected */
    if (!(images || transparency || all)) {
        errMsg += "Please select one answer.\n";
        result = false;
    }
return result;
}

//check score
function getScore() {
    score = new Array ();
    var count = 0;

    if (document.forms[0].one[1].checked) {
        
        count++;
    }
    if (document.forms[0].two[0].checked) {
        count++;
    }
    if (document.forms[0].three[3].checked) {
        count++;
    }
    if (document.forms[0].four[1].checked) {
        count++;
    }
    if (document.forms[0].five[2].checked) {
        count++;
    }
    if (result.length > 0) {
        var vString = "";
        for (var i=0; i<result.length; i++) {
        vString = vString + result[i] + "\n";
        }
        alert(result.length + " incorrect answers:\n" + vString);
        return(false);
        }
        else {
        alert("All of the questions were answered correctly so submit email notice.");
        return(true);
        }
}


function init(){
    var form = document.getElementById("form"); //get ref to the HTML element
    form.onsubmit = validate;    //register the event listener
}
window.onload = init;