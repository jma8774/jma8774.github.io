// of boxes
const WINDOW_WIDTH = 1152;
const WINDOW_HEIGHT = 648;
const WIDTH = 100;
const HEIGHT = 100;
const GAP = 15;

function Box(x, y){
  this.number = 0;
  this.x = x;
  this.y = y;
}

function updateScore(score, best) {
  ctx.font = "bold 40px ClearSans, sans-serif";
  ctx.fillText(2048, WINDOW_WIDTH - 225 - 180, title_y + 115);
  ctx.fillText(2048, WINDOW_WIDTH - 180, title_y + 115);
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

box0 = new Box(100, 100);
box1 = new Box(box0.x + GAP + WIDTH, box0.y);
box2 = new Box(box1.x + GAP + WIDTH, box0.y);
box3 = new Box(box2.x + GAP + WIDTH, box0.y);

box4 = new Box(box0.x, box0.y + GAP + HEIGHT);
box5 = new Box(box1.x, box0.y + GAP + HEIGHT);
box6 = new Box(box2.x, box0.y + GAP + HEIGHT);
box7 = new Box(box3.x, box0.y + GAP + HEIGHT);

box8 = new Box(box0.x, box4.y + GAP + HEIGHT);
box9 = new Box(box1.x, box4.y + GAP + HEIGHT);
box10 = new Box(box2.x, box4.y + GAP + HEIGHT);
box11 = new Box(box3.x, box4.y + GAP + HEIGHT);

box12 = new Box(box0.x, box8.y + GAP + HEIGHT);
box13 = new Box(box1.x, box8.y + GAP + HEIGHT);
box14 = new Box(box2.x, box8.y + GAP + HEIGHT);
box15 = new Box(box3.x, box8.y + GAP + HEIGHT);

var boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15];
var box_colors = ['#CDC1B3', '#EEE4DA', '#ECE0C6', '#F2B179', '#F59563', '#F27E5E', '#F85D35'];
//                    0          2          4          8         16         32         64
var text_color = ['#CDC1B3', '#766C62', '#786F69', '#FEECCD', '#FEEEE1', '#FBF7EA', '#FCF8F8'];

// Initial Game Creation
const CONTAINERWIDTH = 2*GAP + 4*WIDTH + 3*GAP;
const CONTAINERHEIGHT = 2*GAP + 4*HEIGHT + 3*GAP;
ctx.fillStyle = '#B9AB9E';
ctx.fillRect(100 - GAP , 100 - GAP, CONTAINERWIDTH, CONTAINERHEIGHT);
ctx.fillStyle = '#ECE0C8';
for (i = 0; i < boxes.length; i ++) {
  box = boxes[i];
  ctx.fillStyle = box_colors[Math.floor(Math.random() * box_colors.length)];
  ctx.globalAlpha = 0.9;
  ctx.fillRect(box.x, box.y, WIDTH, HEIGHT);
}
ctx.globalAlpha = 1;

// 2048 Title
ctx.font = "bold 100px sans-serif";
ctx.fillStyle = '#777066';
title_y = 125;
ctx.fillText(2048, WINDOW_WIDTH - 360, title_y);

// Scoreboards
ctx.fillStyle = '#BBADA0';
ctx.fillRect(WINDOW_WIDTH - 225 - 175 - 50, title_y + 50, 175, 80); // 225 is the distance from wall, 175 is the other box width, 50 for gap
ctx.fillRect(WINDOW_WIDTH - 225, title_y + 50, 175, 80);
ctx.fillStyle = '#EFE3D7';
ctx.font = "bold 15px sans-serif";
ctx.fillText('SCORE', WINDOW_WIDTH - 225 - 175/2 - 50 - 30, title_y + 75);
ctx.fillText('BEST', WINDOW_WIDTH - 175/2 - 50 - 20, title_y + 75);
ctx.fillStyle = '#FCFDFB';
updateScore(2048, 2048);

// New game
ctx.fillStyle = '#8B7359';
ctx.globalAlpha = 0.9;
ctx.fillRect(WINDOW_WIDTH - 140, WINDOW_HEIGHT - 100, 90, 50);
ctx.globalAlpha = 1;
ctx.fillStyle = '#FCFDFB';
ctx.font = "18px ClearSans, sans-serif";
ctx.fillText('New Game', WINDOW_WIDTH - 135, WINDOW_HEIGHT - 70, 80, 50);

// Good luck!
ctx.font = "bold 30px ClearSans, sans-serif";
ctx.fillStyle = '#949188';
ctx.fillText("Good luck!", WINDOW_WIDTH - 335, title_y + 300);
