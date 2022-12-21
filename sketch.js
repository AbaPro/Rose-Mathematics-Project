let nS,dS;
function setup() {
  let canv = createCanvas(400, 400);
canv.parent("sketch-holder");
  nS=createSlider(1,9,5,1);
  nS.position(20,60);
  dS=createSlider(1,9,4,1);
  dS.position(350,60);

}
let n,d;
let k,a=150;
function draw() {
  frameRate(60);
  n=nS.value();
  d=dS.value();
  k=n/d;
  background(240);  textSize(15);
  strokeWeight(1);
  text('n Value : '+nS.value(),0,19);
  text('d Value : '+dS.value(),width-70,19);
  translate(width/2,height/2);
  for(let th=0; th<(PI*2)*d;th+=0.01){
    let r=a*cos(k*th);
    stroke(100,0,random(80,255));
    strokeWeight(3);
    point(r*cos(th),r*sin(th));
  }
}
