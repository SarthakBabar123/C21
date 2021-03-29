var fixedRect, movingRect;
var object1, object2, object3;



function setup() {
  createCanvas(1200,400);
  
  fixedRect = createSprite(300, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 2;

  movingRect = createSprite(600, 200, 40, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -2;

  object1 = createSprite(300,50);
  object1.shapeColor= "red";

  object2 = createSprite(600,50);
  object2.shapeColor= "red";
 
  object3 = createSprite(900,50);
  object3.shapeColor= "red";


}

function draw() {
background("black"); 
console.log(movingRect.x - fixedRect.x);

//movingRect.x = World.mouseX;
//movingRect.y = World.mouseY;  

/*if(isTouching(movingRect,object1)){
movingRect.shapeColor = "yellow";
object1.shapeColor = "yellow";
}
else{
movingRect.shapeColor = "green";
object1.shapeColor = "red";
}*/

bounceOff(movingRect,fixedRect);
drawSprites();
}

/*function isTouching(o1,o2){
  if(o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2){
      return true;
  }
  else{
      return false;
  }
}*/