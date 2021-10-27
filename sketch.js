var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/brokenroadcity.png");
  player_img = loadImage("images/reddustbin.png");
  player_img2 = loadImage("images/bluedustbin.png");
  fruit1_img = loadImage("images/bananapeel.png");
  fruit2_img = loadImage("images/eatenwatermelon.png");
  fruit3_img = loadImage("images/eatenapple.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/plasticbottle.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(windowWidth,windowHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}