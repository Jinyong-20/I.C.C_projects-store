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
var a = 0;
var modeChanged = false;
let img;


function setup() {
  createCanvas(400, 400);
  img =  loadImage('11111.jpg');
  background(255);
}

function draw() {
  
  image(img,0,0,400,400);
  if(keyIsPressed)
  {
    if(modeChanged == false)
    {
      modeChanged = true;  
      mode += 1;
      if(mode == 4)
        mode = 0;
    }
  }
  else
  {
    modeChanged = false;
  }
  if(mode == 0)
  {
    a = 0;
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
    a = 255;
    lineDrawing(a);
  }
}


function lineDrawing(a) 
{
  if (mouseIsPressed) 
    {
      mousePress = true;
      strokeWeight(5);
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
      strokeWeight(1); //n
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
      strokeWeight(1); //n
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