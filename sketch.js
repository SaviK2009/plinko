var particles = [];
var plinkos = [];
var divisions = [];


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var division;
var divisionHeight=300;

function setup(){
    var canvas = createCanvas(480,800);
    
    engine = Engine.create();
    world = engine.world;
    
    
    for(var i=0; i<=width; i=i+80)
    {
        divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
    }
   
    
    ground=new Ground(240,790,480,30)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    
    
    
    
    console.log(divisions)
}