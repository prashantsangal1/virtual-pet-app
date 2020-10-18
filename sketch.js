//variables list
var dog, happyDog, dogIMG;
var foodStock, foodS;
var database;
var readStock;
function preload()
{
  //load images here
  happyDog = loadImage("images/happydog.png");
  dogIMG = loadImage("images/dogImg.png");
}

function setup() {
  //canvas
    createCanvas(500, 500);
  //database 
    database = firebase.database();
  //spritework
    dog = createSprite(250,250,50,25);
    dog.addImage(dogIMG);
  //food stock
    foodStock = database.ref('Food');
    foodStock.on("value",readStock);
}


function draw() {  
  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(10);
  fill("white");
  stroke("red");
  text(foodStock, 250, 10);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}

