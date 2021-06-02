function delaySliderChange(val) {
document.getElementById('delaySliderVal').innerHTML = 1010-val+" ms &nbsp";
}
function quantitySliderChange(val) {
document.getElementById('quantitySliderVal').innerHTML = val+"&nbsp";
}
//display the speed when slider is moved
htmlElements = "";
htmlElements += 'delay:<output id="delaySliderVal"> 10 ms &nbsp &nbsp</output>'
htmlElements += 'quantity:<output id="quantitySliderVal"> 50 &nbsp</output>'
htmlElements += 'swaps:<output id="swapVal"> 0 &nbsp &nbsp &nbsp </output>'
var display = document.getElementById("display");
display.innerHTML = htmlElements;
