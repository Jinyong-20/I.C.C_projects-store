var a,b,c;
let k;
function setup() {
  createCanvas(windowWidth, windowHeight);
  a = random(0,255);
  b = random(0,255);
  c = random(0,255);
  k = color(0,0,0);
}



function draw() {
  background(255);
  randomSeed(0);
  
  var x,y,r,rr,rrr,rrrr;
  var delta = 50;
  
  var volume = map(mouseX, 0, windowWidth, 0,1);
  var circle = map(mouseY, 0, windowHeight, 0,1);
  var coLor = map(mouseX, 0, windowWidth, 0, 255);
  var coloR = map(mouseY, 0, windowHeight, 0, 255);
  
  
  for(y=0; y<windowHeight; y+=delta)
  {
    for(x=0; x<windowWidth; x+=delta) 
    {
      r = random(0,1);
      for(var i=0;i<2;i++)
      {
        rr = random(0,1);
        if(r < volume)
        {
          if(rr<0.25)
          {
            line(x+delta/2,y+delta/2,x,y);
          }
          else if(rr<0.5)
          {
            line(x+delta/2,y+delta/2,x+delta,y);
          }
          else if(rr<0.75)
          {
            line(x+delta/2,y+delta/2,x,y+delta);
          }
          else
          {
            line(x+delta/2,y+delta/2,x+delta,y+delta);
          }
        }
      }
    }  
  }
  for(x=0; x<windowWidth; x+=delta)
  {
    for(y=0; y<windowHeight; y+=delta)
    {
      rrr = random(0,1);
      rrrr = random(0,1);
      if(rrr*4<circle)
      {
        ellipseMode(CENTER);
        fill(c,coLor,coloR);
        noStroke();
        if(rrrr<0.25)
        {
          ellipse(x+delta/2, y+delta/4,7,7);
        }
        else if(rrrr<0.5)
        {
          ellipse(x+delta/4*3, y+delta/2,7,7);
        }
        else if(rrrr<0.75)
        {
          ellipse(x+delta/4, y+delta/2,7,7);
        }
        else
        {
          ellipse(x+delta/2, y+delta/4*3,7,7);
        }
        stroke(k);
      }
    }
  }
  if(mouseIsPressed)
  {
    k = color(coLor,coloR,a);
    stroke(k);
  }
  if(keyIsPressed)
  {
    k = color(b,coLor,coloR);
    stroke(k);
  }
}
