 array = [];
function unit(){
while(array.length !=5){
  text = String(prompt("Skriv inn varen her"));
  array.push(text);
  document.getElementById("resultat").innerHTML += text + " er navnet på varen </br>";
}
}
  array1 = [];
function price(){
while(array1.length !=5){
  number = parseInt(prompt("Skriv inn pris her"));
  array1.push(number);
  document.getElementById("resultat1").innerHTML += number + " kr er prisen på varen </br>";
  var sum = array1[0] + array1[1] + array1[2] + array1[3] + array1[4];
  document.getElementById("sum").innerHTML="Summen av alle varene er " + sum + " kr";
  var average = sum/array1.length;
  document.getElementById("average").innerHTML="Gjennomsnittet av alle varene er " + average + " kr";
  var lowprice = Math.min(array1[0],array1[1],array1[2],array1[3],array1[4]);
  document.getElementById("lowprice").innerHTML="Den laveste prisen av alle varene er " + lowprice + " kr";
  var highprice = Math.max(array1[0],array1[1],array1[2],array1[3],array1[4]);
  document.getElementById("highprice").innerHTML="Den høyeste prisen av alle varene er " + highprice + " kr";
}
}
console.log(array1);
