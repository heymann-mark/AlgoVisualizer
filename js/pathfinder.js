var unvisited = []
var innerboxes = []
var squarewidth
function searchSetup(sm,cs){
  squarewidth =cs
  isStartChosen = 0;
  isStopChosen = 0;
  var unsortedArray = [];
  clearInterval(interval);
  squareheight = squarewidth
  boxwidth  = squarewidth-2
  boxheight = squareheight-2
  columns = Math.floor(1485/squarewidth)
  rows = Math.floor(648/squareheight)
  max = columns*rows;
  customizing=0
  visited = new Map();
  unvisited.length = columns*rows
  htmlElements = "";
  htmlElements += 'delay:<output id="delaySliderVal"> 10 ms &nbsp &nbsp</output>'
  //htmlElements += 'quantity:<output id="quantitySliderVal"> 50 &nbsp</output>'
  if(sm===3)
      htmlElements += '&nbsp &nbsp Djikstra\'s Algorithm &nbsp &nbsp'
  if(sm===4)
      htmlElements += '&nbsp &nbsp A* Algorithm &nbsp &nbsp'
  htmlElements += 'cellsize:<input type="text" id = cellsize name="cSize" size="3" maxlength="3" value="'+squarewidth+'" style="height:50%">'
  htmlElements += '<output id=instructions></output>'
  var display = document.getElementById("display");
  display.innerHTML = htmlElements;
  htmlElements = "";
  htmlElements += '<div class="grid" style="width: 1485px; height:648px";> ';
  for (var i = 0; i < unvisited.length; i++) {
    htmlElements += '<div class="square" style="width:'+squarewidth+'px ; height: '+squarewidth+'px" ><div class="box" style="width:'+boxwidth+'px ; height: '+boxheight+'px" onclick="draw(\''+i+'\');">'
    +'<div class = "innerbox" style="width: 10px ; height: 10px"></div></div></div>';
  }
  htmlElements += '</div>';
  var container = document.getElementById("container");
  //set the innerhtml  of container to all the divs line and bline
  container.innerHTML = htmlElements;
  delaySliderChange(document.getElementById("delayRange").value)
  var squares = Array.from(document.querySelectorAll('.square'));
  boxes = Array.from(document.querySelectorAll('.box'));
     innerboxes = Array.from(document.querySelectorAll('.innerbox'));
  var  unvisitedlength =  unvisited.length
  for (i = 0; i < unvisitedlength; i++) {
     unvisited[i] = i;
  }
  for(i=0;i<unvisitedlength;i++){
    visited.set(i,0);//0 is for false
  }
  var i = 0;
  var k = 0
  draw(-1)
}
function randomize(){
  unvisited.forEach(element => {
    var random = Math.floor(Math.random()*5);
    if(random%5===0){
    visited.set(element,1)
      boxes[element].style.backgroundColor = 'black'
    }
  })
}
function customize(){
  if(customizing===0){
    document.getElementById('instructions').innerHTML ='Click any cell to add or delete an obstacle, click customize when done.';
    customizing=1
    let startX;
    let startY;
    var grid = document.querySelector(".grid");
    function getCursorPosition(grid, event) {
      const rect = grid.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      var p = columns*Math.floor(y/squarewidth) + Math.floor(x/squarewidth)
      if(customizing===1&&y>0&&x>0&&x<1485&&y<684){
        boxes[p].style.backgroundColor = 'black'
        visited.set(p,1)
      }
    }
    var mousePosition, holding;
    function myInterval() {
      var setIntervalId = setInterval(function() {
        if (!holding) {clearInterval(setIntervalId)}else{
        getCursorPosition(grid, mousePosition);}
      }, 10); //set your wait time between consoles in milliseconds here
    }

    grid.addEventListener('mousedown', function() {
      holding = true;
      myInterval();
    })
    grid.addEventListener('mouseup', function() {
      holding = false;
      myInterval();
    })
    grid.addEventListener('mouseleave', function() {
      holding = false;
      myInterval();
    })
    grid.addEventListener('mousemove', function(e) {
     if(holding===true)
        mousePosition = e;
        myInterval();
    })
  }else
  if(customizing===1){
     document.getElementById('instructions').innerHTML ='&nbsp Click Square to choose start';
     customizing=0
  }
}
function draw(i){
  if(i === -1){
     document.getElementById('instructions').innerHTML ='&nbsp Click Square to choose start';
  }else{
    if(customizing===0){
  if(isStartChosen===0 ){
    isStartChosen=1
    boxes[i].style.backgroundColor = 'green'
    beginning = i
    if(isStopChosen===0)
      document.getElementById('instructions').innerHTML ='Click Square to choose end';
  }else if(isStopChosen===0){
    isStopChosen=1
    boxes[i].style.backgroundColor = 'red'
    stop = i
    document.getElementById('instructions').innerHTML =' ';
    if(method===3)
      djikstra(beginning,stop)
    if(method===4)
      astar(beginning,stop)
  }
}else{
  visited.set(i,1)
  boxes[i].style.backgroundColor = 'black'
  }
}
}
