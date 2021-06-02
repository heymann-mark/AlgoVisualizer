var pq = new PriorityQueue();
var previousVertex
var dist
var weightmaps
var weight
async function astar(src,dest){
  src = parseFloat(src)
  dest = parseFloat(dest)
  pq = new PriorityQueue();
  previousVertex = new Map();
  dist = new Map();
  weightmaps= new Map();
  var unvisitedlength = unvisited.length
  for(i=0;i<unvisitedlength;i++){
    var w = new Map();
    var distanceMax = 1
    w.set(i+1, Math.floor(Math.random()*distanceMax))
    w.set(i+columns-1, Math.floor(Math.random()*distanceMax))
    w.set(i+columns, Math.floor(Math.random()*distanceMax))
    w.set(i+columns+1, Math.floor(Math.random()*distanceMax))
    weightmaps.set(i,w);
  }
  for(i = 0; i < unvisitedlength; i++) {
    dist.set(unvisited[i], max);
  }
  speed = 1010-document.getElementById("delayRange").value
  astarAlgorithm(src,dest).then();
}
async function astarAlgorithm(src,dest){
  dist.set(src, 0)
  pq.enqueue(src,1);
  while(!pq.isEmpty()){
    var u = pq.dequeue().element
    while(visited.get(u)===1){
      u = pq.dequeue().element
    }
    visited.set(u,1);
    await sleep(speed);
    if(resetOn===0){//down
      var  v = u + columns
      if(v < columns*(rows-1)&&visited.get(v)===0){
        weight = weightmaps.get(u).get(u+columns)
        if(dist.get(u) + weight + h(v, dest)< dist.get(v)){
          dist.set(v, dist.get(u) + weight)
          previousVertex.set(v,u)
          pq.enqueue(v,dist.get(u) + weight + h(v,dest));
        }
      }
      v = u - 1//left
      if(v > columns*Math.floor(u/columns)-1 && visited.get(v)===0){//left
        weight = weightmaps.get(v).get(v+1)
        if(dist.get(u) + weight + h(v,dest)< dist.get(v)){
          dist.set(u - 1, dist.get(u) + weight)
          previousVertex.set(v,u)
          pq.enqueue(v,dist.get(u) + weight+ h(v,dest));
          boxes[v].style.backgroundColor = 'blue'
        }
      }
      v = u - columns
      if(v > 0){//up
        weight = weightmaps.get(v).get(v+columns)
        if(dist.get(u) + weight + h(v,dest)< dist.get(v)&&visited.get(v)===0){
          dist.set(v, dist.get(u) + weight)
          previousVertex.set(v,u)
          pq.enqueue(v,dist.get(u) + weight+ h(v,dest));
          boxes[v].style.backgroundColor = 'blue'
        }
      }
      v =u + 1
      if(v < columns*Math.floor(u/columns + 1)){//right
        weight = weightmaps.get(u).get(u+1)
        if(dist.get(u) + weight + h(v,dest)< dist.get(v)&&visited.get(v)===0){
          dist.set(v, dist.get(u) + weight)
          previousVertex.set(v,u)
          pq.enqueue(v,dist.get(u) + weight+ h(v,dest));
          boxes[v].style.backgroundColor = 'blue'
        }
      }
      if(u!==src&&u!==dest)
        boxes[u].style.backgroundColor = 'blue'
    }
    if(u === dest){
      while(!pq.isEmpty()){
        pq.dequeue();
      }
      boxes[dest].style.backgroundColor = '#41FF00'
      await sleep(speed);
      var c = previousVertex.get(dest)
      boxes[c].style.backgroundColor = '#41FF00'
      await sleep(speed);
      while(previousVertex.get(c)!=null&&resetOn===0){
        c = previousVertex.get(c);
        boxes[c].style.backgroundColor = '#41FF00'
        await sleep(speed);
      }
    }
  }
}
function h(n,dest){
  //manhattan
  return Math.abs(n%columns - dest%columns)+Math.abs(Math.floor(n/columns) - Math.floor(dest/columns))
}
function manhattan(v){
  return  Math.abs(xstart -xdestination)+Math.abs(ystart - ydestination)
}
function euclidean(src,dest){
  return Math.sqrt(Math.pow(xstart - xdestination,2) + Math.pow(ystart - ydestination,2))
}
function astarReset(){
  previousVertex = new Map();
  resetOn=0
if(!pq.isEmpty())
  resetOn = 1
}
