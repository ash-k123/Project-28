
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone,boy,ground;
var mango1,mango2,mango3;
var mango4,mango5,tree;
var shot,stonePos,mangoPos;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(0,690,16000,20);
	tree   = new Tree(1260,380,600,700);
	stone  = new Stone(270,500,5);
	boy    = new Boy(270,630,250,300);

	mango1 = new Mango(1190,138,7);
	mango2 = new Mango(1260,260,7);
	mango3 = new Mango(1120,300,7);
	mango4 = new Mango(1375,200,7);
	mango5 = new Mango(1450,315,7);

	shot   = new Rope(stone.body,{x:270,y:630});
	

	Engine.run(engine);
  
}


function draw() {
  background(0,233,255);
 
  stone.display();
  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  shot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   shot.fly()
}
function keyPressed(){
	if(keyCode===32){
		Matter.body.setPosition(stone.body,{x:270,y:630});
		shot.attach(stone.body);
	}
}
function detectCollision(bodyA,bodyB){
	mangoPos = bodyB.body.position;
	stonePos = bodyA.body.position;

   var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
   if(distance<=bodyA.r+bodyB.r){
	   Matter.body,setStatic(bodyB.body,false);
   }
}


