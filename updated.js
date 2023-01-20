let nS2,dS2,cn2;
function setup() {
  cn2 = createCanvas(400, 300);
  nS = createSlider(1, 10, 8, 1);
  dS = createSlider(1, 10, 10, 1);
  frameRate(5);
}
let n,d;
let k,a=125;
function draw() {
  n=nS.value();
  d=dS.value();
  k=n/d;
  background(240);
  textSize(15);
  text('n Value : '+nS.value(),10,19);
  text('d Value : '+dS.value(),width-90,19);
      translate(width/2,height/2);
  noFill();
  beginShape();
  for(let th=0; th<(PI*2)*d;th+=0.1){
    let r=a*cos(k*th);
    stroke(random(200,255),random(0,50),random(0,255));
    strokeWeight(1);
    vertex(r*cos(th),r*sin(th));
  }
  endShape(CLOSE);
}
