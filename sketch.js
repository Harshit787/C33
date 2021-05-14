function preload(){

  bg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,600);
  
  var background = createSprite(400,300,100,100)
  background.scale = 1.6
  background.addImage(bg)

}

function draw() {
  background(0);  
  drawSprites();
}

