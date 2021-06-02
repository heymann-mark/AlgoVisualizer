temp = []
visited = []
var l = 0
var r
var left = 0
var right = document.getElementById("quantityRange").value - 1;
async function mergeSort(l, r){
  if(resetOn === 1)
  return;
  if (l < r) {
      var m = parseInt((l + r) >> 1)
      await mergeSort(l, m);
      await mergeSort( m + 1, r);
      await mergeArray(l, r);
      await mergedraw(l,r)
      await sleep(speed)

  }
  left = l
  right = r
}
async function mergeArray(lz, rz){
  if(resetOn === 1)
  return;
  var mz = parseInt((lz + rz) >> 1)
  var lz1 = lz;
  var lz2 = mz + 1;
  var rz1 = mz;
  var rz2 = rz;
  let index = lz;
  while (lz1 <= rz1 && lz2 <= rz2) {
    if (unsortedArray[lz1] <= unsortedArray[lz2]) {
      temp[index] = unsortedArray[lz1]
      index++;
      lz1++;
    }else if(unsortedArray[lz1] > unsortedArray[lz2]){
      temp[index] = unsortedArray[lz2]
      index++
      lz2++
      swaps++
      document.getElementById('swapVal').innerHTML = swaps;
    }
  }
  while (lz1 <= rz1) {
    temp[index] = unsortedArray[lz1]
    index++
    lz1++
  }
  while (lz2 <= rz2) {
    temp[index] = unsortedArray[lz2];
    index++
    lz2++
  }
  index = lz
  while(index <= rz){
    if(resetOn === 1)
      return;
    unsortedArray[index] = temp[index]
    index++
    await mergedraw()
    await sleep(speed)
  }

}
let T=3;
async function mergedraw(){
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
    if(isRunning===1){
      squares[left].style.backgroundColor = 'red'
      squares[right].style.backgroundColor = 'green'}
      squares[i - 1].style.backgroundColor = 'blue'
      squares[i - 1].style.height = .9*(index + 10) + 1 + '%'
      squares[i - 1].style.width = T*100/(1+(T+1)*arraylength) + '%'
      i++
  })
}
function resetmerge(){
  clearInterval(interval);
  resetOn = 1
  isRunning = 0
  swaps=0
}
var fm = 0;
async function finishedmergeDraw(){
  f=1;
  while(fm  < unsortedArray.length){
    if(f===1  && resetOn === 0 &&isRunning===0)
      squares[fm].style.backgroundColor = '#41FF00'
    fm++
    await sleep(speed);
  }
  fm = 0;
}
