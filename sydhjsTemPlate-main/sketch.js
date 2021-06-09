var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var Sound;
var invisibleCatcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	Sound = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	
	fairy = createSprite(130,520);
	fairy.addAnimation("flyingfairy",fairyImg);
	fairy.scale = 0.2;

	Sound.play();

	star = createSprite(650,40);
	star.addImage(starImg);
	star.scale = 0.2;
	
	invisibleCatcher = createSprite(300,510,20,20);
	invisibleCatcher.visible = false;
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y
  
  


  if(invisibleCatcher.isTouching(star)){
     Matter.Body.setStatic(starBody, true);
  }

  console.log(star.y);

  invisibleCatcher.x = fairy.x+100;

 
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x-20; 
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x+20; 
	}

	}

	