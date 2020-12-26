const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
   
    boy   = new Log(200,440,340);
    tree1   = new tree(700,350,640);
   
    mango1 = new Paper(800,300,90);
    mango2 = new Paper(900,300,90);
    mango3 = new Paper(840,435,90);
    mango4 = new Paper(880,200,90);
    mango5= new Paper(1080,280,90);
    mango6= new Paper(1000,250,90);
    mango7 = new Paper(1060,420,90);
    mango8 = new Paper(960,370,90);

    stone= new Stone(220,390,90);
   
    chain = new Chain(stone.body,{x:240,y:390});

   
   

   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
ground.display();
boy.display();
tree1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
stone.display();
chain.display();


textSize(20)
fill("green")
text("click sapce bar to restart the game",20,20)





//detectollision(stone,mango1);
//detectollision(stone,mango2);
//detectollision(stone,mango3);
//detectollision(stone,mango4);
//detectollision(stone,mango5);
//detectollision(stone,mango6);
//detectollision(stone,mango7);
//detectollision(stone,mango8);


}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   
    chain.fly();
    
}

function detectollision(Lstone,Lmango){
    mangoBodyPosition=Lmango.body.setPosition
    stoneBodyPosition=Lstone.body.setPosition

    var distance = dist( stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<-Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false)
}
}

function keyPressed(){
    if(keyCode === 32){
       
        Matter.Body.setPosition(stone.body,{x:220,y:390})
        chain = new Chain(stone.body,{x:240,y:390});
       
    }
}


