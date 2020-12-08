//Create variables here
var dogImage1;
var dogImage2;
var foodV;
var database;
var dogSprite;
function preload()
{
  //load images here
  dogImage1=loadImage("images/dogImg.png")
  dogImage2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  var child= database.ref("food")
  child.on("value", readValue, showError)
  dogSprite=createSprite(550,250)
  dogSprite.addImage("dogImg.png", dogImage1)
  dogSprite.addImage("dogImg1.png", dogImage2)
  dogSprite.scale=0.5
}
function readValue(data){
foodV= data.val()
}
function showError(){
  console.log("error")
}
function update(){
if(foodV>0){
  var JSON={
    food: foodV-1
  }
  var child= database.ref("/")
  child.update(JSON)
}
}
function draw() {  
  background("blue")
  if(keyDown("up")){
    dogSprite.changeImage("dogImg1.png", dogImage2)
    update()
  }
  drawSprites();
  textSize(20);
  fill("white");
  text("Press Up Arrow Key", 400, 650);
  text("Food="+foodV, 250, 250)

  //add styles here

}



