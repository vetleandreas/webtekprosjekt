var array = [];
function shoot(){
while(array.length !=5){
  text = String(prompt("Skriv inn varen her"));
  array.push(text);
  document.getElementById("resultat").innerHTML += text + "</br>";
}
}
