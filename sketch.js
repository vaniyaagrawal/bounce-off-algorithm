var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  gameObj1 = createSprite(100, 400, 60, 90);
  gameObj1.velocityX = +6;
  gameObj1.shapeColor = "yellow";
  gameObj2 = createSprite(500, 400, 60, 90);
  gameObj2.velocityX = -6;
  gameObj2.shapeColor = "red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceoff(movingRect, fixedRect);
  bounceoff(gameObj1, gameObj2);
 
  drawSprites();
}

