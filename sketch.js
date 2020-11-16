const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, box1, box2, engine, world;


function setup() {
  createCanvas(400, 400);
  engine = Matter.Engine.create();
  world = engine.world
  ground=new Ground();
  box1 = new Box(200,30,40,30)
  box2 = new Box(210, 20, 60,60)
  
  
}

function draw() {
  background(67, 240, 90);
  Engine.update(engine);
  ground.display();
  box1.display();
 
  
  box2.display();
  
  
}