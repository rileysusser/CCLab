let ang = 0
let myBoolean = false
let xPos = []
let yPos = []
let xSpeed = []
let ySpeed = []
let sizes = []

function setup() {
 let canvas =  createCanvas(400, 400);
 canvas.id("pscanvas");
 canvas.parent("p5-canvas-container")
  background(40);
  angleMode(DEGREES)
   for(let x = 0; x<= width; x +=50){
    for(let y = 0; y <= height; y +=50){
      fill(195,100+random(-50,50))
      textSize(random(12,28))
      text("*",x,y)
      text("*",x+25,y+25)
    }
  }
 
}

function draw() {
  
  ang++
  strokeWeight(5);
  line(200,400,200,350);
  translate(200,300)
  drawFlower();
  
 

  }
function drawFlower(){
  for(let i = 0; i < 9; i++){
      rotate(45)
      fill(random(0,255),random(0,255),random(0,255))
     
      ellipse(25,0,60,40)
    ellipse(25,0,45,30)
    if(mouseIsPressed){
      rotate(-ang)
    }else{
      rotate(ang)
    }
   }

 
}
