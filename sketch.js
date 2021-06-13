const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies; 

var myEngine;
var myWorld;
var box1, box2;
var ground;

function setup()
{
  createCanvas(800,800);

  myEngine = Engine.create();                     
  myWorld = myEngine.world; 
  
  box1 = new Box(400, 200, 50, 50);
  box2 = new Box(430, 50, 70, 150);

  ground = new Ground(400, 790, 800, 20);
}

function draw()
{
  background("black");

  Engine.update(myEngine);

  box1.display();
  box2.display();

  ground.display();
}
