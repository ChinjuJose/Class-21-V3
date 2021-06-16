const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, left, right, top;
var ball;

var button1, button2;

function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    var ballOptions = {
        restitution:0.2
    };

    ball = Bodies.circle(200,200,20,ballOptions);
    World.add(world,ball);

    ground = new Ground(200,390,400,20);
    rightWall = new Ground(390,200,20,400)
    leftWall = new Ground(10,200,20,400);
    topWall = new Ground(200,10,400,20);

    button1 = createImg("right.png");
    button1.position(20,30);
    button1.size(50,50);
    button1.mouseClicked(hForce);

    button2 = createImg("up.png");
    button2.position(100,30);
    button2.size(50,50);
    button2.mouseClicked(vForce);
}

function draw() {
    background("lightblue");
    Engine.update(engine);

    rectMode(CENTER);
    ellipseMode(RADIUS);

    leftWall.show();
    rightWall.show(); 
    topWall.show();
    ground.show();

    ellipse(ball.position.x, ball.position.y,20);
}

function hForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0, y:-0.05});
}

