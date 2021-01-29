
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	

	engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(600,200,100,30);
	ground = new Ground(600,395,1200,10)
	stone = new Stone(800,200,50,50);
	rubber = new Rubber(800,200,75)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();

  drawSprites();
 
}



