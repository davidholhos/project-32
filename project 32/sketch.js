const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
    polygon_img = loadImage("polygon.png")
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    score = 0;

    ground = new Ground(590,315,250,20)
    ground1 = new Ground(600,390,1200,20)
    block1 = new Box(500,285,30,40,"yellow");
    block2  = new Box(530,285,30,40,"yellow");
    block3 = new Box(560,285,30,40,"yellow");
    block4 = new Box(590,285,30,40,"yellow");
    block5 = new Box(620,285,30,40,"yellow");
    block6 = new Box(650,285,30,40,"yellow");
    block7 = new Box(680,285,30,40,"yellow");
    block8 = new Box(530,245,30,40,"orange");
    block9 = new Box(560,245,30,40,"orange");
    block10 = new Box(590,245,30,40,"orange")
    block11 = new Box(620,245,30,40,"orange");
    block12 = new Box(650,245,30,40,"orange");
    block13 = new Box(560,205,30,40,"blue");
    block14 = new Box(590,205,30,40,"blue");
    block15 = new Box(620,195,30,40,"blue");
    block16 = new Box(590,155,30,40,"green");
    polygon = Bodies.circle(90,200,20);
    World.add(world,polygon);
   

    slingshot = new Slingshot(this.polygon,{x:260,y:200});


    Engine.run(engine);
}

function draw(){
        background("white")
    ground.display();
    ground1.display();
    block1.display();
    block2.display(); 
    block3.display();
    block4.display();    
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block12.display();
    block13.display();
    block11.display();
    block14.display();
    block15.display();
    block16.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    slingshot.display();



    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    fill("red")
    text("SCORE : "+score,750,40);
}


function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode == 32){
    Matter.Body.setPosition(polygon,{x:90,y:200})
    slingshot.attach(this.polygon)
    }
}
