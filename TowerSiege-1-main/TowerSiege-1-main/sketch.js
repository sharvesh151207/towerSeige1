const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
 ground = new Ground(400,300,200,10);
}

function draw(){
    background("grey");
    Engine.update(engine);   
    ground.display();
}
