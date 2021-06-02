function resetquick(){
  clearInterval(interval)
  if(isRunning ===1)
    resetOn = 1
  isRunning = 0
  s1=0
  s2=0
  swaps=-1
}

async function quickSort(begin, end){
  if(resetOn === 1){
    return;
  }
  if (begin < end) {
    await partition(begin, end);
    await quickSort(begin, partitionIndex-1)
    await quickSort(partitionIndex + 1, end)
  }
}
async function partition(beginz, endz){
  var pivot = unsortedArray[endz];
  var i = (beginz - 1);
  switched = 0;
  for (j = beginz; j < endz; j++) {
    if(resetOn === 1)
      return;
    if (unsortedArray[j] <= pivot) {
      await sleep(speed);
      i++;
      switched = 1;
      await swap(unsortedArray,i,j)
      await quickdraw()
    }
  }
  var swapTemp = unsortedArray[i+1];
  unsortedArray[i + 1] = unsortedArray[endz];
  unsortedArray[endz] = swapTemp;
  partitionIndex = i + 1
}
async function swap(arr, a, b){
  s1=b
  s2=a
  var swapTemp = arr[a];
  arr[a] = arr[b];
  arr[b] = swapTemp;
  s1=a
  s2=b
  swaps++
  document.getElementById('swapVal').innerHTML = swaps;
}

 async function quickdraw(){
   if(resetOn===1&&isRunning===1)
   return;
   var j = 1;
   dividers.forEach(index =>{
     dividers[j - 1].style.backgroundColor = 'black'
     dividers[j - 1].style.width = 100/(1+(T+1)*arraylength) + '%'
     j++
   })
  var i = 1;
  unsortedArray.forEach(index =>{
    squares[i - 1].style.backgroundColor = 'blue'
    if(resetOn === 0){
    squares[s1].style.backgroundColor = 'red'
    squares[s2].style.backgroundColor = 'pink'
  }
    squares[partitionIndex].style.backgroundColor = 'white'//pivot
    squares[i - 1].style.height = .9*(index + 10) + 1 + '%'
    squares[i - 1].style.width = T*100/(1+(T+1)*arraylength) + '%'
    i++
  })
}
var fq = 0;
async function finishedquickDraw(){
    f=1;
  while(fq  < unsortedArray.length){
    if(f===1  && resetOn === 0&&isRunning===0)
    squares[fq].style.backgroundColor = '#41FF00'
    fq++
    await sleep(speed);
  }fq = 0;
}
