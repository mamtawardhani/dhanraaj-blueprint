const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g1

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    g1 = new Ground(200,350)
}

function draw(){
    background(0);
    Engine.update(engine);
    g1.display()
    
}

//rectangle=> rect()
//circle=> ellipse()