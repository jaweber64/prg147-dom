/**
 * Created by jaWeber on 10/11/16.
 */
// Use the Document Object Model Node functions to create opening and closing panels through JavaScript - bonus - include
// the Material Design Icons and change them. Try some variations, include images or lists, and have at least six panels.

var num = 1;        // used to create a unique ID for elements.

// ****************************************************************
function controlPanel() {
    var h3 = this;                                          // h3 is the element clicked to get here
    var h3Child = h3.firstElementChild;                     // h3Child is the icon <i.../> element
    var h3Sib = h3.nextElementSibling;                      // h3Sib is the w3-row (image plus text) to be opened/closed
    var currentClass = h3Sib.getAttribute("class");         // currentClass contains the class value of h3Sib (open or close)

    h3Child.setAttribute("id", num);                        // no id's were set in html so add one to the icon. num converted to string
    num++;                                                  // increment num so it will be unique.  integer
    var h3Id = h3Child.getAttribute("id");                  // h3Id will retrieve this id.  string

    if (currentClass === "open") {                              // test for class = open
        h3Sib.setAttribute("class", "close");                   //   YES - change it to closed
        document.getElementById(h3Id).innerHTML = "portrait";   // change the icon to portrait
    } else {
        h3Sib.setAttribute("class", "open");                    //   NO - change it to open
        document.getElementById(h3Id).innerHTML = "expand_less";// change the icon to downward carrot
    }
}  // end of controlPanel() function


// ****************************************************************
window.onload = function() {
    "use strict";

    var members = document.getElementById("members");   // set var members to section of document you are working with
    var h3s = members.getElementsByTagName("h3");       // h3s will contain all of the h3 elements within members
    var h3Node;                                         // h3Node is declared and will hold one of h3s elements

    for (var i = 0; i < h3s.length; i++) {              // Loop thru h3 elements within members
        h3Node = h3s[i];                                // Get individual node.
        h3Node.addEventListener("click", controlPanel); // Add a listener for each node. Call controlPanel function on click event.
    }
};