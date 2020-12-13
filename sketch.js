var fixedRect, movingRect, extraRect;
function setup() {
  createCanvas(800,400);
  //fixedRect = createSprite(400, 200, 50, 70);
  movingRect = createSprite(600, 200, 70, 50);
  extraRect = createSprite(600, 50, 50, 50);
  //fixedRect.debug=true;
  movingRect.debug=true;
  extraRect.debug=true;
  movingRect.shapeColor="white";
  //fixedRect.shapeColor="red";
  extraRect.shapeColor="purple";
  movingRect.velocityY = 1;
  extraRect.velocityY = -1;
  //fixedRect.velocityX = 3;
}

function draw() {
  background(0,0,0);  
  // movingRect.x=mouseX;
  // movingRect.y=mouseY;
  bouncing(extraRect, movingRect);
  drawSprites();
}

