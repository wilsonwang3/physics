const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World; 

var engine, world, ground;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world, ground);

  var ball_options = {
    restitution: 3,
    speed: 45,
    //sleepCounter: 1
  }

  ball = Bodies.circle(200, 100, 25, ball_options);
  World.add(world, ball);

  console.log(ball);
}

function draw() {
  background("blue");  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 25, 25);
}