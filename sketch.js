const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

var score = 0;
var bg1;
function preload() {
     bg1  =loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig2(810, 220);
    pig2= new Pig3(810,140)
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(700,135,70,70);
    box6 = new Box(700,65,70,70);
    box7 = new Box(920,135,70,70);
    box8 = new Box(920,65,70,70);
    log4 = new Log(760,120,150, PI/8);
    log5 = new Log(855,120,150, -PI/8);
    bird2 = new Bird2(120,100);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){

        background(bg1);
    
        noStroke();
    textSize(35);
    fill ("white");
    text ("Score"+score , width-300,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
    pig2.score();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    log4.display();
    log5.display();
    pig2.display();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    bird2.display();   
}

function mouseDragged(){
    if (gameState!=="launched"&&mouseX<220&& mouseY<220){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    else if(gameState==="launched"&&mouseX<220&& mouseY<220){
        Matter.Body.setPosition(bird2.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
   
}

function keyPressed(){
    if(keyCode === 32&&bird.body.speed<1){
      
       gameState="onSling";
       bird.trajectory=[];
       bird2.trajectory=[];
       Matter.Body.setPosition(bird.body,{x:200,y:50})
       slingshot.attach(bird.body);
    }
    if (keyCode===83&&bird2.body.speed<1){
        slingshot.attach(bird2.body);
        bird.trajectory=[];
        bird2.trajectory=[];
        Matter.Body.setPosition(bird2.body,{x:200,y:50})
    } 

}


    

