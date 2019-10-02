function siffer(){
let tall = [3,8,7,3,6,2];
var text = "";
var i;

for (i = 0; i < tall.length; i++) {
text += tall[i] + "<br>";
}
document.getElementById("rekke").innerHTML = text;
}
