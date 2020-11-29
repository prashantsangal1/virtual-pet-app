class Food{
    constructor(){
        var lastFed;
    }
    function getFoodStock(data){
        foodS = database.ref('Food');
        foodS.on("value",readStock);
    }
    function updateFoodStock(){
     database.ref("/").update({
         Food:x
        })
    }
    function deductFood(){
        foodS = foodS - 1;
    }
    }
    function display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image,250,220,70,70);

        if(this.foodS !=0){ 
            for(var i =0; i < this.foodS; i++){
                if(i%10==0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image,x,y,50,50);
                x = x + 30;
            }
        }
    }
