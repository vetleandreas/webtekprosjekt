let isOneGo = false;
let isTwoGo = false;
let isThreeGo = false;
let isFourGo = false;


function oneGo() {
  isTwoGo = false;
  isThreeGo = false;
  isFourGo = false;

  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "hidden";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";

  isOneGo = true;
}

function twoGo() {
  isThreeGo = false;
  isFourGo = false;

  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";

    isOneGo = true;
    isTwoGo = true;
}

function threeGo() {
  isFourGo = false;

  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "hidden";

  isOneGo = true;
  isTwoGo = true;
  isThreeGo = true;
}

function fourGo() {

  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "visible";

  isOneGo = true;
  isTwoGo = true;
  isThreeGo = true;
  isFourGo = true;
}

function play() {
  document.getElementById("feilmelding").innerHTML = " ";
  console.log("Test play true/false 1: " + isOneGo + ", 2: " + isTwoGo + ", 3: " + isThreeGo + ", 4: " + isFourGo);
  if (isFourGo == true) {
    localStorage["spiller4"] = document.getElementById("playerFour").value;
  }

  if (isThreeGo == true) {
    if (isFourGo == false) {
      localStorage["spiller4"] = "";
    }
    localStorage["spiller3"] = document.getElementById("playerThree").value;
  }

  if (isTwoGo == true) {
    if (isThreeGo == false) {
      localStorage["spiller3"] = "";
      localStorage["spiller4"] = "";
    }
    localStorage["spiller2"] = document.getElementById("playerTwo").value;
  } else {
    localStorage["spiller2"] = "";
    localStorage["spiller3"] = "";
    localStorage["spiller4"] = "";
  }

  localStorage["spiller1"] = document.getElementById("playerOne").value;

  let y = 0;

  try {
    if (localStorage["spiller1"] == "") {
      console.log("Test play() isOneGo er tomt " + localStorage["spiller1"]);
      y += 1;
      throw "Spiller 1 må ha et navn";
    }
    if ((isTwoGo == true) && (localStorage["spiller2"] == "")) {
      console.log("Test play() isTwoGo er tomt");
      y += 1;
      throw "Spiller 2 må ha et navn";
    }
    if ((isThreeGo == true) && (localStorage["spiller3"] == "")) {
      console.log("Test play() isThreeGo er tomt " + localStorage["spiller3"]);
      y += 1;
      throw "Spiller 3 må ha et navn";
    }
    if ((isFourGo == true) && (localStorage["spiller4"] == "")) {
      console.log("Test play() isFourGo er tomt " + localStorage["spiller4"]);
      y += 1;
      throw "Spiller 4 må ha et navn";
    }
    if (y == 0) {
      if (screen.width <= 1024) {
        location.replace("mobile.html");
      } else {
        location.replace("game.html");
      }
    }
    } catch (err) {
      console.log("Test play() catch err " + err);
      document.getElementById("feilmelding").innerHTML = err;
    }

  console.log("Test play()");
  //localStorage["spillere"] = [localStorage["spiller1"], localStorage["spiller2"], ]

}

function settSpillernavn() {
  document.getElementById("spiller1").innerHTML = localStorage["spiller1"];
  document.getElementById("spiller2").innerHTML = localStorage["spiller2"];
  document.getElementById("spiller3").innerHTML = localStorage["spiller3"];
  document.getElementById("spiller4").innerHTML = localStorage["spiller4"];
  document.getElementById("avatar1").innerHTML = localStorage["spiller1"];
  document.getElementById("avatar2").innerHTML = localStorage["spiller2"];
  document.getElementById("avatar3").innerHTML = localStorage["spiller3"];
  document.getElementById("avatar4").innerHTML = localStorage["spiller4"];
  console.log("Test localStorage " + localStorage["spiller1"]);
}
