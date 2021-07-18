
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball8;
var ground8;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   ground8=Bodies.rectangle(300,200,200,20,ground_options);
   World.add(world,ground8);
  var ball8_options={
    restitution:0.10,
    frictionAir:0.08

  }
  ball8=Bodies.circle(300,20,10,ball_options);
  World.add(world,ball8);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball8.position.x,ball8.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground8.position.x,ground8.position.y,200,20);
 
}

