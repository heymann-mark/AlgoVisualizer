var method = 0
var s1=0
var s2=0
interval = null
var cellsize = 27
async function chooseMethod(m){
  if(document.getElementById("cellsize")!== null)
     cellsize = document.getElementById("cellsize").value
  htmlElements = "";
  htmlElements += 'delay:<output id="delaySliderVal"> 10 ms &nbsp &nbsp</output>'
  htmlElements += 'quantity:<output id="quantitySliderVal"> 50 &nbsp</output>'
  htmlElements += 'swaps:<output id="swapVal"> 0 &nbsp &nbsp &nbsp </output>'
  if(m===0)
      htmlElements += '&nbsp &nbsp Bubble Sort'
  if(m===1)
      htmlElements += '&nbsp &nbsp Quick Sort'
  if(m===2)
      htmlElements += '&nbsp &nbsp Merge Sort'
  var display = document.getElementById("display");
  display.innerHTML = htmlElements;
  delaySliderChange(document.getElementById("delayRange").value)
  clearInterval(interval)
  method = m
  if(method<3)
    sortSetup()
  if(method===0){
    resetbubble()
    bubbledraw()
     }
  if(method===1){
    resetquick()
     quickdraw();
   }
  if(method===2){
    resetmerge()
     mergedraw();
  }
  if(method>2&&method<5){
    if(method===3){
      dijkstraReset()
      searchSetup(m,cellsize)
    }
    if(method===4){
     astarReset()
    searchSetup(m,cellsize)}

  if(method===5)
   pathfinder2()
  }
}
chooseMethod(0)
async function start(){
  speed = 1010-document.getElementById("delayRange").value
 if(isRunning === 0){
   if(method===0){
     isRunning = 1
     resetOn = 0
     interval = setInterval("bubbleSort()",speed)
  }
   if(method===1){
     isRunning = 1
     resetOn = 0
     await quickSort(0,arraylength-1);
     isRunning = 0
     await finishedquickDraw();
   }
   if(method===2){
     isRunning = 1
     resetOn = 0
     await mergeSort(l,arraylength - 1)
     isRunning = 0
     await finishedmergeDraw()
   }
 }
}
async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
function reset(){
  chooseMethod(method)
}
