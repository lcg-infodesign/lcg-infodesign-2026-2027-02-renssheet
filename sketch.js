function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noLoop(); 
  let numeroMacchie = 180;
  let numeroColonne = ceil(sqrt(numeroMacchie));
  let numeroRighe = sqrt(numeroMacchie);
  
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;
  
  let xCorrente = 0;
  let yCorrente = 0;
  

  for (let g = 0; g < numeroMacchie; g++) {
    //  casualità
    
    let offsetX = random(-dimColonna * 0.2, dimColonna * 0.2);
    let offsetY = random(-dimRiga * 0.2, dimRiga * 0.2);
    
    let posX = xCorrente + dimColonna / 2 + offsetX;
    let posY = yCorrente + dimRiga / 2 + offsetY;
    let dimensione = random(dimRiga * 0.4, dimRiga * 0.9);
    
    // macchia vernice
    macchiaVernice(posX, posY, dimensione);
    
    xCorrente += dimColonna;
    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente += dimRiga;
    }
  }
}

function draw() {
 
}

function macchiaVernice(_x, _y, _size) {
  push();
  translate(_x, _y);
  
  
  // colori casuali
  let r = random(50, 255);
  let g = random(50, 255);
  let b = random(50, 255);
  let alpha = random(150, 220);
  
  fill(r, g, b, alpha);
  noStroke();
  

  let formaScelta = floor(random(3));
  
  if (formaScelta === 0) {
    // macchia 1
    ellipse(0, 0, _size, _size * random(0.7, 1.3));
  } else if (formaScelta === 1) {
    // macchia 2
    beginShape();
    let vertici = 8;
    for (let a = 0; a < TWO_PI; a += TWO_PI / vertici) {
      let rVar = (_size / 2) * random(0.6, 1.2);
      let vx = cos(a) * rVar;
      let vy = sin(a) * rVar;
      vertex(vx, vy);
    }
    endShape(CLOSE);
  } else {
    // macchia 3
    ellipse(0, 0, _size * 1.5, _size * 0.5);
  }
  
  
  let numeroGocce = floor(random(3, 8));
  for (let i = 0; i < numeroGocce; i++) {
    push();
    angleMode(DEGREES);
    let angolo = random(360);
    let distanza = random(_size * 0.3, _size * 0.9);
    
    rotate(angolo);
    translate(distanza, 0);
    
    // macchie piccole
    fill(r, g, b, random(100, 200));
    let dimGoccia = random(_size / 10, _size / 3);
    ellipse(0, 0, dimGoccia, dimGoccia * random(0.8, 1.5));
    pop();
  }
  
  pop();
}