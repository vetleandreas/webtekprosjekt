var table=[1,2,3,4,5,6,7,8,9,10];


function divide(){

    var array2D = [];


    for (var i = 0; i < table.length; i++) {
        var temp = [];

        for (var j = 0; j < table.length; j++) {
            var svar=(table[i]/table[j]).toFixed(3);
            temp.push(svar);
        }
        array2D.push(temp);
    }


    printArray(array2D);
}

function printArray(array){

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){

            document.getElementById("result").innerHTML+= array[j][i] + "   ";

        }
        document.getElementById("result").innerHTML += " </br>";
    }

}
