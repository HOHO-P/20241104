let font;
let point = [];
let angle = 0

function preload(){
  font = loadFont("fonts/NotoSansTC-Black.ttf")
  }
  function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
  angleMode(DEGREES)
  points = font.textToPoints("HOHO", 0, 200, 400, {
    sampleFactor:0.06
  });
  for (let i=0; i<points.length; i++) { 
    ellipse(points[i].x,points[i].y,10)
  } 
}
function draw() {
  background(0);
    for(let  y=0;y<height;y= y+120){
    for(let x=0;x<width;x = x+120){
    push()
    translate(x,y)
    stroke(255)
    for(let i =0; i<15;i = i+1){
     let r = map(sin(frameCount),-1,1,50,255) 
     let g = map(cos(frameCount/2),-1,1,50,255) 
     let b = map(sin(frameCount/4),-1,1,50,255) 
     stroke(r,g,b);
     rotate(angle)
     noFill()
     ellipse(20,0,100-i*3,100-i*3,20)
     angle=sin(frameCount) *10
     }
  pop()
     fill(255)
  for (let i=0; i<points.length; i++) { 
    ellipse(points[i].x+400,points[i].y+400,10)
   } 
   if (mouseIsPressed){
    noFill()
    stroke("#005AB5")
    rect(950,450,1500,500)
   }else{
    
   }
  }
 }
}