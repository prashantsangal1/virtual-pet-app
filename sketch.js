//variables list
var dog, happyDog, dogIMG;
var foodS, database, readStock;
var fedTime, lastFed, foodObj;
var feed, addFood;



function preload(){
  //load images here
  happyDog = loadImage("images/happydog.png");
  dogIMG   = loadImage("images/dogImg.png");
}

function setup() {
  //canvas
    createCanvas(800,800);
  //database 
    database = firebase.database();
  //spritework
    dog = createSprite(600,600,50,25);
    dog.addImage(dogIMG);
  //food class
    foodObj = new Food();        
  //buttons
    feed = createButton("Feed the dog");
    feed.position(500,750);
    feed.mousePressed(feedDog);
    moreFood = createButton("Add Food");
    moreFood.position(550,750);
    moreFood.mousePressed(addFood);

}


function draw(){  
  
  background(46,139,87);

  display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed = data.val();
  });

  drawSprites();
  textSize(10);
  fill("white");         
  stroke("red");
  text(foodS, 250, 10);
}

function addFood(){
  foodS++;
}

function feedDog(){
}