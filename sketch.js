var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed= random(223,321);
  weight= random(30,52);
  wall = createSprite(900, 200, thickness, height/2);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw() {
  background(0); 

  if(hasCollide(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5 *weight * speed * speed/(thickness* thickness*thickness);

    
    

    

  }
  
  drawSprites();

  if(damage>10){
    wall.shapeColor =color(255,0,0);
    fill("white");
    textSize(25);
    text("Reject the Material",500,200);

    
    
  }

  if(damage<10){

    wall.shapeColor = color(0,255,0);
    fill("white");
    textSize(25);
    text("Material Accepted",500,200);
    
  }
}

function hasCollide(lbullet,lwall){

  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){

    return true;

  } else{

    return false;
  }
}