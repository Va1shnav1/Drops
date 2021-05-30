const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;
var drops=[];
var umbrellaImg, umbrella;
var rand;
var thunder1, thunder2, thunder3, thunder4;
var man;
function preload(){
    umbrellaImg = loadAnimation("images/walking_1.png", "images/walking_2.png", "images/walking_3.png",
    "images/walking_4.png", "images/walking_5.png", "images/walking_6.png",
    "images/walking_7.png","images/walking_8.png");

    thunder1 = loadImage("images/1.png");
    thunder2 = loadImage("images/2.png");
    thunder3 = loadImage("images/3.png");
    thunder4 = loadImage("images/4.png");

}

function setup(){
    var canvas = createCanvas(550,800);
    engine = Engine.create();
    world = engine.world;

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 800), random(0, 800)));
    }
    man = createSprite(200, 600, 10, 10);
    man.addAnimation("walking", umbrellaImg);
    man.scale=0.4
    umbrella = Bodies.circle(500, 550, 120,{isStatic:true});
    World.add(world, umbrella);
}

function draw(){
    background(0);

    Engine.update(engine);
    console.log("1");
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateDrops();
    }
    console.log("2");
    Matter.Body.setPosition(umbrella, {x:man.x, y:man.y})
    rand=Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10, 370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale = random(0.3, 0.6)
    }
    drawSprites();
}   

