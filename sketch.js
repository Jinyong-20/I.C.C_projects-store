var aX;
var aY;
var bX;
var bY;
var pressStart = true;
var pressReleased = false;
var mouseXwas;
var mouseYwas;
var d1X;
var d1Y;
var d2X;
var d2Y;
var mode = 0;
var firstPress = true;
var penStart = false;
var modeChanged = false;
var btnClicked = false;
let a;
var strokeSize;
var patternSize;
let img;


function setup() {
  createCanvas(600, 400);
  a = color(0,0,0);
  strokeSize = 5;
  patternSize = 1;
  background(255);
  textSize(10);
  fill(0);
  stroke(255);
  strokeWeight(5);
  text("Mode : "+ (mode+1), 270, 350);
  img = loadImage("UI.png");
  frameRate(30);
}

function draw() {
  image(img,0,0,600,400)
  btnClick();
  if(keyIsPressed)
  {
    if(modeChanged == false)
    {
      modeChanged = true;  
      mode += 1;
      if(mode == 4)
      {
        mode = 0;
        a = color(0,0,0);
      }
      textSize(10);
      fill(0);
      stroke(255);
      strokeWeight(5);
      text("Mode : "+ (mode+1), 270, 350);
    }
  }
  else
  {
    modeChanged = false;
  }
  if(mode == 0)
  {
    lineDrawing(a);
  }
  if(mode == 1)
  {
    rectPattern();
  }
  if(mode == 2)
  {
    ellipsePattern();
  }
  if(mode == 3)
  {
    a = color(255,255,255);
    lineDrawing(a);
  }
}


function lineDrawing(a) 
{
  if (mouseIsPressed) 
    {
      mousePress = true;
      strokeWeight(strokeSize);
      stroke(a);
      d1X = d2X;
      d2X = mouseX;
      d1Y = d2Y;
      d2Y = mouseY;
      if (penStart)
      {
        d1X = d2X;
        d1Y = d2Y;
      }
      line(d1X, d1Y, d2X, d2Y);
      penStart = false;
    }
    else
    {
      mousePress = false;
      penStart = true;
    }
}

function ellipsePattern()
{
  if(mouseIsPressed)
    {
      if(pressStart)
      {
        aX = mouseX;
        aY = mouseY;
        pressStart = false;
        pressReleased = true;
      }
      bX = mouseX;
      bY = mouseY;
      noFill();
      stroke(255);
      strokeWeight(patternSize); //n
      ellipseMode(CORNERS);
      ellipse(aX, aY, bX, bY);
    }
    else
    {
      if(pressReleased)
      {
        bX = mouseX;
        bY = mouseY;
        pressReleased = false;
      }
      pressStart = true;
    }
}

function rectPattern()
{
    if(mouseIsPressed)
    {
      if(pressStart)
      {
        aX = mouseX;
        aY = mouseY;
        pressStart = false;
        pressReleased = true;
      }
      bX = mouseX;
      bY = mouseY;
      noFill();
      stroke(255);
      strokeWeight(patternSize); //n
      rectMode(CORNERS);
      rect(aX, aY, bX, bY);
    }
    else
    {
      if(pressReleased)
      {
        bX = mouseX;
        bY = mouseY;
        pressReleased = false;
      }
      pressStart = true;
    }
}

function btnClick()
{
  if(mouseIsPressed)
  {
    if(btnClicked == false)
    {
      btnClicked = true;
      if(mouseX >=516 && mouseX <=542 && mouseY >=61 && mouseY <= 87)
        a = color(0,0,0);
      if(mouseX >=556 && mouseX <=582 && mouseY >=61 && mouseY <= 87)
        a = color(0,0,255);
      if(mouseX >=516 && mouseX <=542 && mouseY >=101 && mouseY <= 127)
        a = color(255,0,0);
      if(mouseX >=556 && mouseX <=582 && mouseY >=101 && mouseY <= 127)
        a = color(0,255,0);
      if(mouseX >=536 && mouseX <=562 && mouseY >=290 && mouseY <= 303)
        if(patternSize < 10)
          patternSize += 1;
      if(mouseX >=536 && mouseX <=562 && mouseY >=338 && mouseY <= 350)
        if(patternSize > 1)
          patternSize -= 1; 
      if(mouseX >=20 && mouseX <=77 && mouseY >=275 && mouseY <= 323)
      {
        console.log("File saved!");
        save('PatternArt.jpg');
      }
    }
    if(mouseX >=536 && mouseX <=562 && mouseY >=177 && mouseY <= 190)
      if(strokeSize < 50)
        strokeSize += 1;
    if(mouseX >=536 && mouseX <=562 && mouseY >=225 && mouseY <= 238)
      if(strokeSize > 1)
        strokeSize -= 1;
  }
  else
  {
    btnClicked = false;
  }
}