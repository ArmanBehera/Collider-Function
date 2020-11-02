var movingRect, fixedRect;

function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(200, 200, 100, 50);
  movingRect.shapeColor = "blue";
}

function draw() {

  background(255,255,255);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x <= movingRect.width / 2 + fixedRect.width / 2 && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
      && movingRect.y - fixedRect.y <= movingRect.height / 2 + fixedRect.height / 2 && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  console.log(movingRect.x - fixedRect.x);

  drawSprites();

}