var pq = new PriorityQueue();
var previousVertex
var weightmaps
var dist
var weight
var innerboxwidth =0
var innerboxheight =0
async function djikstra(src,dest){
  var complete = 0
   src = parseFloat(src)
   dest = parseFloat(dest)
   previousVertex= new Map();
   innerboxMap= new Map();
   dist = new Map();
   weightmaps= new Map();
   var unvisitedlength = unvisited.length
   for(i = 0; i < unvisitedlength; i++) {
     dist.set(unvisited[i], max);
      innerboxMap.set(i,0)
   }
   for(i=0;i<unvisitedlength;i++){
   var w = new Map();
   var distanceMax = 1
   w.set(i+1, Math.floor(Math.random()*distanceMax))
   w.set(i+columns-1, Math.floor(Math.random()*distanceMax))
   w.set(i+columns, Math.floor(Math.random()*distanceMax))
   w.set(i+columns+1, Math.floor(Math.random()*distanceMax))
   weightmaps.set(i,w);
 }
  speed = 1010-document.getElementById("delayRange").value
  djikstrasAlgorithm(src,dest).then();
}
async function djikstrasAlgorithm(src,dest){
  dist.set(src, 0)
  pq.enqueue(src,1);
  while(!pq.isEmpty()){
    var u = parseFloat(pq.dequeue().element)
    while(visited.get(u)===1){
      u = pq.dequeue().element
    }
    visited.set(u,1);
    drawBoxes(src,dest)
    await sleep(speed);
    v = u + columns
    if(v < columns*(rows)){//down
      weight = weightmaps.get(u).get(u+columns)
      if(parseFloat(dist.get(u)) + parseFloat(weight) < parseFloat(dist.get(v))){
        dist.set(v, dist.get(u) + weight)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }
    v = u - 1//left
    if(v > columns*Math.floor(u/columns)-1){
        weight = weightmaps.get(v).get(v + 1)
      if(dist.get(u) + weight < dist.get(v )){
        dist.set(u - 1, dist.get(u) + weight)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }
    v = u - columns
    if(v > 0){//up
      weight = weightmaps.get(v).get(v+columns)
    if(dist.get(u) + weight < dist.get(v)){
      dist.set(v, dist.get(u) + weight)
      previousVertex.set(v,u)
      pq.enqueue(v,dist.get(u) + weight);
    }
   }
   v = u + 1//right
   if(v < columns*Math.floor(u/columns + 1)){
      weight = weightmaps.get(u).get(u+1)
    if(dist.get(u) + weight < dist.get(v)){
      dist.set(v, dist.get(u) + weight)
      previousVertex.set(v,u)
      pq.enqueue(v,dist.get(u) + weight);
    }
   }
    if(u===dest||resetOn===1){
      var p = previousVertex.get(u)
      while(!pq.isEmpty()){
        pq.dequeue(previousVertex.get(p));
      }
    }
  }
  while(complete === 0){
    drawBoxes(src,dest)
    await sleep(speed);
  }
  innerboxes[src].style.width =boxwidth+'px'
  innerboxes[src].style.height = boxheight+'px'
  innerboxes[dest].style.width =boxwidth+'px'
  innerboxes[dest].style.height = boxheight+'px'
  path = []
  if(resetOn===0){
    path.push(dest)
    innerboxes[dest].style.backgroundColor = '#41FF00'
    await sleep(speed);
    var c = previousVertex.get(dest)
    innerboxes[c].style.backgroundColor = '#41FF00'
    path.push(c)
    await sleep(speed);
    while(previousVertex.get(c)!=null){
      c = previousVertex.get(c);
      path.push(c);
      innerboxes[c].style.backgroundColor = '#41FF00'
      await sleep(speed);
    }
  }
  resetOn=0
  return path;
}
function dijkstraReset(){
  resetOn=0
  if(!pq.isEmpty())
    resetOn = 1
}
function drawBoxes(src,dest){
  complete = 1;
  for(i=0;i<visited.size;i++){
    var cur = visited.get(i)
    if(parseFloat(i)!==parseFloat(src)&&parseFloat(i)!==parseFloat(dest)){
      if(cur>0){
        visited.set(i,cur+1);
        innerboxes[i].style.backgroundColor = 'blue'
        if(innerboxMap.get(i) < boxwidth){
          complete = 0;
          console.log("here")
          innerboxMap.set(i,innerboxMap.get(i)+.2)
          innerboxes[i].style.width =innerboxMap.get(i)+'px'
          innerboxes[i].style.height = innerboxMap.get(i)+'px'
          innerboxes[i].style.marginLeft =(boxwidth-innerboxMap.get(i))/2+'px'
          innerboxes[i].style.marginTop =(boxwidth-innerboxMap.get(i))/2+'px'
          innerboxes[i].style.marginRight =(boxwidth-innerboxMap.get(i))/2+'px'
          innerboxes[i].style.marginBottom =(boxwidth-innerboxMap.get(i))/2+'px'
        }
      }
    }
  }
}
