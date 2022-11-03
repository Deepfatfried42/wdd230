const today = new Date();
const year = today.getFullYear();
const msg = "<p>&copy;" + year + "  .:|:. Southern Chamber of Commerce.:|:. Johnathon A. Staples .:|:. WDD 230 Project .:|:. " + "<b>last modified: </b>" + document.lastModified + "</p>";


const el = document.getElementById("myfooter");
el.innerHTML = msg;