var bullet,wall;
var speed,weight;
var thickness

function setup() {
  createCanvas(1600,400);
     createSprite(400, 200, 50, 50);
     speed=random(223,321);
     weight=random(30,52);
     thickness=random(22,83);
     bullet=createSprite(50,200,50,50);
     bullet.velocityX=speed;
     bullet.shapeColor=("red");
     wall=createSprite(1300,200,thickness,height/2);
     wall.shapeColor=color(80,80,80);
     

     

}

function draw() {
  background(255,255,255);  
  if(touching(bullet,wall)){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    
    if (damage>10) {
      wall.shapeColor=("pink")
    }
    if (damage<10) {
      wall.shapeColor=("green")
  }


 
  drawSprites();
}

function touching(b,w) {
 bulletRightEdge=b.x+b.width
 wallLeftEdge=w.x;
 if(bulletRightEdge>=wallLeftEdge){

  return(true)
  
 }
 return(false)
}