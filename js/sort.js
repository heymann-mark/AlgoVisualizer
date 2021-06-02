//get the arraylength from the range slider on the page
var unsortedArray = [];
var arraylength = document.getElementById("quantityRange").value;
var end = arraylength - 1;
var partitionIndex = arraylength - 1
//set speed
var speed=0;
var sorted = 0;
//set is running
var htmlElements = "";
var begin  = 0
var squares
var dividers
var resetOn = 0
var isRunning = 0
function sortSetup(){
  swaps=0
  document.getElementById('swapVal').innerHTML = 0;
  arraylength = document.getElementById("quantityRange").value;
  end = arraylength - 1;
  partitionIndex = arraylength - 1
  htmlElements = "";
//send speed to display quantity if slider is moved
//creates all the divs to display the lines
htmlElements += '<div class="bline"> </div>';
for (var i = 0; i < arraylength; i++) {
 htmlElements += '<div class="line"> </div>';
 htmlElements += '<div class="bline"> </div>';
}

//let the variable container be the div container
var container = document.getElementById("container");
//set the innerhtml  of container to all the divs line and bline
container.innerHTML = htmlElements;
//make arrays of the line and bline divs
squares = Array.from(document.querySelectorAll('.line'));
dividers = Array.from(document.querySelectorAll('.bline'));
//make random array
var n;
for(n = 0; n < arraylength; n++){
  unsortedArray[n] = Math.floor(Math.random()*100);
}
unsortedArray.length  =arraylength
}
