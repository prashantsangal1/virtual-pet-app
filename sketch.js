//variables list
var dog, happyDog, dogIMG;
var foodS, database, readStock;
var fedTime, lastFed, foodObj;
var feed, addFood, moreFood;
function preload(){
  //load images here
    happyDog = loadImage("images/happydog.png");
    dogIMG   = loadImage("images/dogImg.png");
}
function setup(){
  //canvas
    createCanvas(800,800);
  //database 
    database = firebase.database();
  //spritework
    dog = createSprite(600,600,50,25);
    dog.addImage(dogIMG);
    dog.scale = 0.5;
  //food class
    foodObj = new Food();        
  //buttons
    feed = createButton("Feed the dog");
    feed.position(500,750);
    moreFood = createButton("Add Food");
    moreFood.position(650,750);
    readStock();
}
function draw(){  
  background(46,139,87);
  foodObj.display();
  moreFood.mousePressed(addFood);
  feed.mousePressed(feedDog);
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
  database.ref('/').update({
    Food: foodS
  })
}
function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    fedTime:hour()
  })
}
function readStock(){
  database.ref("Food").on("value",(data) =>{
    foodS = data.val();
    foodObj.updateFoodStock(foodS);
    console.log(foodS);
  })
}