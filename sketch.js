
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground,dustbinImage;

function preload(){
    dustbinImage=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	var options={
		isStatic:true
	}
	ground=Bodies.rectangle(600,380,1200,20,options)
	World.add(world,ground)
	paper=new Paper(100,370,20)
	dustbin1=new Dustbin(1000,height-40,200,20)
	dustbin2=new Dustbin(895,height-80,20,100)
	dustbin3=new Dustbin(1105,height-80,20,100)

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  paper.display();
  dustbin1.display();
  
  dustbin2.display();
  dustbin3.display();
  imageMode(CENTER)
  image(dustbinImage,dustbin1.body.position.x,dustbin1.body.position.y-100,300,230)
  rectMode(CENTER)
 fill("brown")
 rect(ground.position.x,ground.position.y,1200,20)
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



