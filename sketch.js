const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var block1;
var ball,rope1

function setup() {
 var canvas = createCanvas(1200,800)
engine = Engine.create();
world = engine.world;

ground1 = new Ground(600,height,1200, 20)

block1 = new Building(600 ,600, 75, 75)
block2 = new Building(600 ,550, 75, 75)
block3 = new Building(600 ,500, 75, 75)
block4 = new Building(600 ,450, 75, 75)
block5 = new Building(600 ,400, 75, 75)


ball = new Ball(400, 400, 50)

rope1 = new Rope(ball.body,{x:400, y:200})
}

function draw() { 
 background(100)   
 Engine.update(engine);

 ground1.display()

 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()


 rope1.display()

 ball.display()
 

}
