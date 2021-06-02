var current = 0;
var swaps=0;
var switched = 1;
var f=0;
async function bubbleSort(){
  if(resetOn === 1)
  return;
  if(sorted===0){
    bubbledraw()
    if(unsortedArray[current] > unsortedArray[current+1]){
      if(resetOn === 1)
      return;
      var temp = unsortedArray[current];
      unsortedArray[current]  = unsortedArray[current+1];
      unsortedArray[current+1] = temp;
      switched = 1;
      swaps++
      document.getElementById('swapVal').innerHTML = swaps;
    }
    current++;//so now current is too much
    if(current === end && switched === 0){
        current=0;
        sorted = 1;
      }
    if(current === end && switched === 1){
      switched = 0;
      end = end - 1;
      current=0;
  }
}
  if(sorted === 1){
    //sorted = 1;
    isRunning = 0
    if(current===unsortedArray.length){
      resetbubble()
      clearInterval(interval)
    }else{
      bubblefinished()
    }
  }
}
function bubblefinished(){
  squares[current].style.backgroundColor = '#41FF00'
  current++
}
function bubbledraw(){
  var i = 1;
  unsortedArray.forEach(index =>{
  squares[i - 1].style.backgroundColor = 'blue'
  squares[current].style.backgroundColor = 'red'
  squares[i - 1].style.height = (index) +3+ '%'
  squares[i - 1].style.width = T*100/(1+(T+1)*arraylength) + '%'
    i++
  })
  var j = 1;
  dividers.forEach(index =>{
  dividers[j - 1].style.backgroundColor = 'black'
  dividers[j - 1].style.width = 100/(1+(T+1)*arraylength) + '%'
  j++
  })
}
function resetbubble(){
  sorted=0
  current = 0;
  end = unsortedArray.length - 1;
  switched = 1;
  resetOn = 1
  isRunning = 0
  swaps = 0
  clearInterval(interval)
}
