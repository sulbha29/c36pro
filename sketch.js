var drawing=[];
var path=[];
var isDrawing = false;

function setup() {
  canvas = createCanvas(1000, 600);
  database= firebase.database();
  canvas.mousePressed(start);
  canvas.mouseReleased(end);
  form = new Form();
  form.display();
  
  
}

function draw() {
  background(51);

  if(isDrawing){
    var point = {
      x:mouseX,
      y:mouseY
    }
    path.push(point);
  }
  
  strokeWeight(4);
  noFill();
  stroke("blue");
 
  for(var i=0; i<drawing.length;i++){
    var path1=drawing[i];
    beginShape();
    for(var j=0;j<path1.length;j++){
      vertex(path1[j].x,path1[j].y);
    }
    endShape();
  }
  form.button.mousePressed(() => {
    saveDrawing();
    
});

}
function start(){
  isDrawing = true;
  path=[];
  drawing.push(path);
}
function end(){
  isDrawing = false;
}
function saveDrawing(){
  var ref = database.ref('drawing');
  var data={
      
      drawing :drawing
  }
  var result = ref.push(data,dataSent);
  console.log(result.key);
  function dataSent(status){
    console.log(status);
  }
  
}