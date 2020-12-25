
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
bob1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1= new Roof(255,120,470,20)

	bobDiameter = 70;
	bob1 = new Bob(380,450,bobDiameter)
	bob2 = new Bob(450,450,bobDiameter)
	bob3 = new Bob(520,450,bobDiameter)
	bob4 = new Bob(590,450,bobDiameter)
	bob5 = new Bob(660,450,bobDiameter)



	rope1 = new Rope(bob1.body,roof1.body,116,105)
	rope2 = new Rope(bob2.body,roof1.body,200,105)
	rope3 = new Rope(bob3.body,roof1.body,260,105)
	rope4 = new Rope(bob4.body,roof1.body,345,105)
	rope5 = new Rope(bob5.body,roof1.body,410,105)



   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

roof1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  
  
 
 
}
function keyPressed(){
 
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-40})
	}


}









