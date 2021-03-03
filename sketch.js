const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    roofObject=new Roof(width/2,height/4,width/7,20);

    bobDiameter=40;

    startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

    //create a ground
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: true
        }
      });


    chain1=new Chain(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	chain2=new Chain(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	chain3=new Chain(bobObject3.body,roofObject.body,0, 0)
	chain4=new Chain(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	chain5=new Chain(bobObject5.body,roofObject.body,bobDiameter*2, 0)

    Engine.run(engine);

}

function draw(){
    background(0);

    roofObject.display();

    chain1.display()
    chain2.display()
    chain3.display()
    chain4.display()
    chain5.display()	
    
    bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

    }
}