var hou,min,sec
var h,m,s;






function setup() {
  createCanvas(450,500);
  angleMode(DEGREES)

  
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hou=hour()
  min=minute()
  sec=second()

 push();
 rotate(90)
 strokeWeight(1)
 stroke("red")
 fill(0,0,255)
 textSize(20)
  text("Current time: " + hou + ":" +min+ ":"+sec, -100,200);
  pop();
  
  s=map(sec,0,60,0,360)
  m=map(min,0,60,0,360)
  h=map(hou%12,0,12,0,360)

  push()
  rotate(s)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(m)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(h)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0,s)

  stroke(0,255,0)
  arc(0,0,280,280,0,m)

  stroke(0,0,255)
  arc(0,0,260,260,0,h)







 
}