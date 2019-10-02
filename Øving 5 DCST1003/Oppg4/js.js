var array = [];
var array1 = [];


function unit(){
while(array.length !=5){
    text = String(prompt("Skriv inn varen her"));
    array.push(text);
    console.log(array);
    }
}


function price(){
while(array1.length !=5){
  number = parseInt(prompt("Skriv inn pris her"));
  array1.push(number);
  console.log(array1);
    }
}

function checkName(element) {
    if(array.includes(element)){
        return true;
    }
    else{
        return false;
    }
  console.log(checkName);
}

function getPrice() {
    unit = document.getElementById("unitname").value;


  if(checkName(unit)){
      document.getElementById("unitprice").innerHTML=array1[array.indexOf(unit)];
  }
  else {
    document.getElementById("unitprice").innerHTML="Varen ved navn " + unit + " finnes ikke og har ikke pris.";
  }
}
