var car,wall;

var speed, weight;

function setup() {

  createCanvas(1600 ,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);4
  wall = createSprite(1500, 200, 60, height/2);

}

function draw() {
  background(0);  

  car.velocityX = speed;

  //if (car.x - wall.x < wall.width/2 + car.width/2
   // && wall.x - car.x < wall.width/2 + car.width/2
   // && car.y - wall.y < wall.height/2 + car.height/2
   // && wall.y - car.y < wall.height/2 + car.height/2) {
   //     car.velocityX = 0
//}

  if(wall.x - car.x < (car.width + wall.width)/2){

      car.velocityX = 0;

      var deformation = 0.5 * weight * speed * speed/22500;

      if(deformation > 180){
        car.shapeColor = color("red");
      }

      if(deformation < 180 && deformation > 100){
        car.shapeColor = color("gold");
      }

      if(deformation < 100){
        car.shapeColor = color("green");
      }

  }

  car.depth = wall.depth 
  car.depth = car.deapth - 1;

  drawSprites();
}