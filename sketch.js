var car,wall;
var speed,height;
var deformation;
var greenCarImage,yellowCarImage,redCarImage;

function preload() {
    greenCarImage=loadImage("green.jpg");
    yellowCarImage=loadImage("yellow.png");
    redCarImage=loadImage("red.jpg");
}

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  deformation=0.5*weight*speed*speed/22500;
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  if (deformation<100) {
    car.addImage="green";

  } else if ((deformation>=100) && (deformation<=180)) {
    car.shapeColor="yellow";
  } else if (deformation>180) {
    car.shapeColor="red";
  }
  
  
  wall = createSprite(1000, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);
  

  if ((Math.round(wall.x-car.x)) === (wall.width/2+car.width/2))  {
    car.velocityX=0;

  }
  car.depth=wall.depth;
  car.depth++; 
}

function draw() {
  background(255,255,255);
  textSize(20);
  text("Speed = "+Math.round(speed),150,50);
  text("Weight = "+Math.round(weight),350,50);
  text("Deformation = "+Math.round(deformation),550,50);
  console.log("wall.x-car.x - "+(Math.round(wall.x-car.x)));
  console.log("wall.width/2+car.width/2 - "+(wall.width/2+car.width/2));
  
      
  if ((Math.round(wall.x-car.x)) <= (wall.width/2+car.width/2))  {
    car.velocityX=0;
  }
  drawSprites();
}