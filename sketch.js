
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1, stone, rubber, ground, iron, sand1, sand2, sand3, sand4, sand5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(300,500,200,50);
	ground = new Plane(width/2,685,width,30);
	stone = new Stone(250,600,100,100);
	rubber = new Rubber(400,600,20);
	iron = new Iron(500,600,100,40);

	sand1 = new Sand(random(350,400),random(500,600),5);
	sand2 = new Sand(random(350,400),random(500,600),5);
	sand3 = new Sand(random(350,400),random(500,600),5);
	sand4 = new Sand(random(350,400),random(500,600),5);
	sand5 = new Sand(random(350,400),random(500,600),5);


	Engine.run(engine);
}

function draw() {
	background(160,220,230);
	rectMode(CENTER);
	fill('orange');
    strokeWeight(4);
    stroke(255);
	hammer1.display();

	fill('red');
	stroke(0);
	strokeWeight(2);
	ground.display();
	
	fill(0,0,255);
	stroke(0);
	rubber.display();

	fill(100,100,100);
	noStroke(255);
	stone.display();


	fill(255,255,100);
	stroke(0)
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();

	fill(240,240,240);
	stroke(100,100,100);
	iron.display();
}