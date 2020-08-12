
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mangoBoy,tree,pos

function preload()
{
mangoBoy = loadImage("boy.png");
tree = loadImage("tree.png");	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	kid=Bodies.rectangle(125,590,10,10,{isStatic:true});
    World.add(world,kid)
	
	engine = Engine.create();
    world = engine.world;
	//Create the Bodies Here.
	stone= new Stone(100,100);
	chain=new Chain(stone.body,kid);
	mangoOne=new Mango(700,400);
	mangoTwo= new Mango(600,370);
	mangoThree = new Mango(563,410);
	mangoFour = new Mango(640,448);
	mangoFive = new Mango(637,336);
	mangoSix= new Mango(644,394);
	mangoSeven= new Mango(563,360);
	mangoEight= new Mango(746,455);
	mangoNine = new Mango(514,408);
	mangoTen = new Mango(482,460);
	mangoEleven = new Mango(460,438);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  image(mangoBoy,100,550,140,150);
  image(tree,400,300,400,400);
  stone.display();
  chain.display();
  mangoOne.display();
  mangoTwo.display();
  mangoThree.display();
  mangoFour.display();
  mangoFive.display();
  mangoSix.display();
  mangoSeven.display();
  mangoEight.display();
  mangoNine.display();
  mangoTen.display();
  mangoEleven.display();
  mangoShot(stone,mangoOne);
  mangoShot(stone,mangoTwo);
  mangoShot(stone,mangoThree);
  mangoShot(stone,mangoFour);
  mangoShot(stone,mangoFive);
  mangoShot(stone,mangoSix);
  mangoShot(stone,mangoSeven);
  mangoShot(stone,mangoEight);
  mangoShot(stone,mangoNine);
  mangoShot(stone,mangoTen);
  mangoShot(stone,mangoEleven);
  
  console.log(mouseX);
  console.log(mouseY);

  drawSprites();
 
}
function mouseDragged() {
    Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    chain.fly();
}
function mangoShot(lstone,lmango){
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
    
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if (distance<=lmango.r+lstone.r){
        console.log(lstone.r);
        Matter.Body.setStatic(lmango.body,false);
        console.log(lmango.body.isStatic);
    }
}




