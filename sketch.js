var gameState = 0;
var playerCount;
var allPlayers;
var database

var form, player, game;

var background, planes, plane1, plane2, plane3, plane4;
var backgroundIMG, plane1IMG, plane2IMG, plane3IMG, plane4IMG;
var angle1 = 0, angle2 = 0, angle3 = 0, angle4 = 0;
var plane1HP = 1000;
var plane2HP = 1000;
var plane3HP = 1000;
var plane4HP = 1000;
var missiles, missile1, missile2, missile3, missile4;
var edges

function preload() {
backgroundIMG = loadImage("SkyBackground.PNG");
plane1IMG = loadImage("b-25Fire.PNG");
plane2IMG = loadImage("b-25Moon.PNG");
plane3IMG = loadImage("b-25Sun.PNG");
plane4IMG = loadImage("b-25Water.PNG");
missileIMG = loadImage("missileinvis.png");
}

function setup() {
  createCanvas(1200,1200);
  //database = firebase.database();
  background = createSprite(600,600,1200,1200);
  background.addImage(backgroundIMG);
  background.scale = 2;

  edges = createEdgeSprites();

  plane1 = createSprite(100,100);
  plane1.addImage(plane1IMG);
  plane1.scale = 0.5;

  plane2 = createSprite(1100,100);
  plane2.addImage(plane2IMG);
  plane2.scale = 0.5;

  plane3 = createSprite(100,1100);
  plane3.addImage(plane3IMG);
  plane3.scale = 0.5;

  plane4 = createSprite(1100,1100);
  plane4.addImage(plane4IMG);
  plane4.scale = 0.5;
  planes = [plane1, plane2, plane3, plane4];

  missile1 = createSprite(plane1.x, plane1.y,25, 50);
  missile1.addImage(missileIMG);
  missile1.scale = 0.1;


  missile2 = createSprite(plane2.x, plane2.y,25, 50);
  missile2.addImage(missileIMG);
  missile2.scale = 0.1;


  missile3 = createSprite(plane3.x, plane3.y,25, 50);
  missile3.addImage(missileIMG);
  missile3.scale = 0.1;


  missile4 = createSprite(plane4.x, plane4.y,25, 50);
  missile4.addImage(missileIMG);
  missile4.scale = 0.1;


  missiles = [missile1, missile2, missile3, missile4];
}

function draw() {

  if(missile2.isTouching(plane1)||missile3.isTouching(plane1)||missile4.isTouching(plane1)){
    plane1HP = plane1HP-5;
  }
  console.log("Plane1:"+plane1HP);

  if(plane1HP<=0){
    plane1.destroy();
    missile1.destroy();
  }

  if(missile1.isTouching(plane2)||missile3.isTouching(plane2)||missile4.isTouching(plane2)){
    plane2HP = plane2HP-5;
  }
  console.log("Plane2:"+plane2HP);

  if(plane2HP<=0){
    plane2.destroy();
    missile2.destroy();
  }

  if(missile1.isTouching(plane3)||missile2.isTouching(plane3)||missile4.isTouching(plane3)){
    plane3HP = plane3HP-5;
  }
  console.log("Plane3:"+plane3HP);

  if(plane3HP<=0){
    plane3.destroy();
    missile3.destroy();
  }

  if(missile1.isTouching(plane4)||missile3.isTouching(plane4)||missile2.isTouching(plane4)){
    plane4HP = plane4HP-5;
  }
  console.log("Plane4:"+plane4HP);

  if(plane4HP<=0){
    plane4.destroy();
    missile4.destroy();
  }
 
    plane1.collide(edges);
    plane2.collide(edges);
    plane3.collide(edges);
    plane4.collide(edges);
    
    if(missile1.collide(edges)){
    missile1.x = plane1.x;
    missile1.y = plane1.y;
    }
    if(missile2.collide(edges)){
      missile2.x = plane2.x;
      missile2.y = plane2.y; 
    }
    if(missile3.collide(edges)){
      missile3.x = plane3.x;
      missile3.y = plane3.y; 
    }
    if(missile4.collide(edges)){
      missile4.x = plane4.x;
      missile4.y = plane4.y;  
    }


  if(keyDown(RIGHT_ARROW)){
    plane1.x = plane1.x+10;
    missile1.x = plane1.x;
    missile1.y = plane1.y;
    plane1.rotation = 90-angle1;
    missile1.rotation = 90-angle1;
    if(keyDown("space")){
    missile1.velocityX = 20;
    }
  }

  if(keyDown(LEFT_ARROW)){
    plane1.x = plane1.x-10;
    missile1.x = plane1.x;
    missile1.y = plane1.y;
    plane1.rotation = 270-angle1;
    missile1.rotation = 270-angle1;
    if(keyDown("space")){
      missile1.velocityX = -20;
      }
  }

  if(keyDown(UP_ARROW)){
    plane1.y = plane1.y-10;
    missile1.x = plane1.x;
    missile1.y = plane1.y;
    plane1.rotation = 360-angle1;
    missile1.rotation = 360-angle1;
    if(keyDown("space")){
    missile1.velocityY = -20;
    }
  }

  if(keyDown(DOWN_ARROW)){
    plane1.y = plane1.y+10;
    missile1.x = plane1.x;
    missile1.y = plane1.y;
    plane1.rotation = 180-angle1;
    missile1.rotation = 180-angle1;
    if(keyDown("space")){
    missile1.velocityY = 20;
    }
  }

  if(keyDown("d")){
    plane2.x = plane2.x+10;
    missile2.x = plane2.x;
    missile2.y = plane2.y;
    plane2.rotation = 90-angle1;
    missile2.rotation = 90-angle1;
    if(keyDown("e")){
    missile2.velocityX = 20;
    }
  }

  if(keyDown("a")){
    plane2.x = plane2.x-10;
    missile2.x = plane2.x;
    missile2.y = plane2.y;
    plane2.rotation = 270-angle1;
    missile2.rotation = 270-angle1;
    if(keyDown("e")){
      missile2.velocityX = -20;
      }
  }

  if(keyDown("w")){
    plane2.y = plane2.y-10;
    missile2.x = plane2.x;
    missile2.y = plane2.y;
    plane2.rotation = 360-angle1;
    missile2.rotation = 360-angle1;
    if(keyDown("e")){
    missile2.velocityY = -20;
    }
  }

  if(keyDown("s")){
    plane2.y = plane2.y+10;
    missile2.x = plane2.x;
    missile2.y = plane2.y;
    plane2.rotation = 180-angle1;
    missile2.rotation = 180-angle1;
    if(keyDown("e")){
    missile2.velocityY = 20;
    }
  }

  if(keyDown("4")){
    plane3.x = plane3.x+10;
    missile3.x = plane3.x;
    missile3.y = plane3.y;
    plane3.rotation = 90-angle1;
    missile3.rotation = 90-angle1;
    if(keyDown("5")){
    missile3.velocityX = 20;
    }
  }

  if(keyDown("1")){
    plane3.x = plane3.x-10;
    missile3.x = plane3.x;
    missile3.y = plane3.y;
    plane3.rotation = 270-angle1;
    missile3.rotation = 270-angle1;
    if(keyDown("5")){
      missile3.velocityX = -20;
      }
  }

  if(keyDown("2")){
    plane3.y = plane3.y-10;
    missile3.x = plane3.x;
    missile3.y = plane3.y;
    plane3.rotation = 360-angle1;
    missile3.rotation = 360-angle1;
    if(keyDown("5")){
    missile3.velocityY = -20;
    }
  }

  if(keyDown("3")){
    plane3.y = plane3.y+10;
    missile3.x = plane3.x;
    missile3.y = plane3.y;
    plane3.rotation = 180-angle1;
    missile3.rotation = 180-angle1;
    if(keyDown("5")){
    missile3.velocityY = 20;
    }
  }

  
  if(keyDown("9")){
    plane4.x = plane4.x+10;
    missile4.x = plane4.x;
    missile4.y = plane4.y;
    plane4.rotation = 90-angle1;
    missile4.rotation = 90-angle1;
    if(keyDown("0")){
    missile4.velocityX = 20;
    }
  }

  if(keyDown("6")){
    plane4.x = plane4.x-10;
    missile4.x = plane4.x;
    missile4.y = plane4.y;
    plane4.rotation = 270-angle1;
    missile4.rotation = 270-angle1;
    if(keyDown("0")){
      missile4.velocityX = -20;
      }
  }

  if(keyDown("7")){
    plane4.y = plane4.y-10;
    missile4.x = plane4.x;
    missile4.y = plane4.y;
    plane4.rotation = 360-angle1;
    missile4.rotation = 360-angle1;
    if(keyDown("0")){
    missile4.velocityY = -20;
    }
  }

  if(keyDown("8")){
    plane4.y = plane4.y+10;
    missile4.x = plane4.x;
    missile4.y = plane4.y;
    plane4.rotation = 180-angle1;
    missile4.rotation = 180-angle1;
    if(keyDown("0")){
    missile4.velocityY = 20;
    }
  }


  plane1.collide(planes);
  plane2.collide(planes);
  plane3.collide(planes);
  plane4.collide(planes);




  drawSprites();
  }