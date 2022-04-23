var today = new Date();
var year = today.getFullYear();
var msg = "<p>&copy;" + year + " .:|:. Johnathon A. Staples .:|:. Colorado" + "<br />"
msg += "<b>last modified: </b>" + document.lastModified + "</p>";


var el = document.getElementById("myfooter");
el.innerHTML = msg;
 