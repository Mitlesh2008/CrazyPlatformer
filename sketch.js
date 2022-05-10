const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var circularBall;

function setup(){
 createCanvas(900,900)
 engine = Engine.create();
 world = engine.world

 ground = Bodies.rectangle(1,890,1800,50,{isStatic: true});
 World.add(world,ground);
 
 var ball_properties = {

  isStatic: false,
  restitution: 0.3,
  friction: 4,
  density: 1.5
}	

 circularBall = Bodies.circle(210,680,40,ball_properties);
 World.add(world,circularBall);
 
}

function draw(){
  background("grey");
  Engine.update(engine);

  ellipse(circularBall.position.x,circularBall.position.y,40);

  push();
  translate(ground.position.x, ground.position.y);
  fill("lightblue");
  rectMode(CENTER);
  rect(0,0,1800,50);
  pop();

  drawSprites();

}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(circularBall,{x:0,y:0},{x:1,y:500});
}

if (keyCode === RIGHT_ARROW){
  Matter.Body.applyForce(circularBall,{x:0,y:0},{x:5,y:0});
  }

}