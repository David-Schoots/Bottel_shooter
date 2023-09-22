let img_bottle;
let img_bullet;
let locationX = [];
let locationY = [];
let RandomRecX = [];
let RandomRecY = 200;
let score = 0;

function preload() {
  img_bottle = loadImage("./asset/bottel.png");
  img_bullet = loadImage("./asset/bullet_pixel.png"); // laad de bullet afbeelding
}

function setup() {
  createCanvas(500, 500);
  noFill();
  fill("red");

  for (let i = 0; i < 1; i++) {
    RandomRecX.push(random(10, 360));
  }
}

function draw() {
  background(220);

  // tekend de bottle op basis van RandomRecX and RandomRecY arrays
  for (let i = 0; i < RandomRecX.length; i++) {
    image(
      img_bottle,
      RandomRecX[i],
      RandomRecY,
      img_bottle.width * 0.5,
      img_bottle.height * 0.5
    );
  }

  // tekend pixels op basis van locationX en locationY arrays
  for (let i = 0; i < locationX.length; i++) {
    image(img_bullet, locationX[i], locationY[i], 14, 14); // teken de kogels
  }

  // Score
  textSize(20);
  text("Score: " + score, 20, 20);
}

function mouseClicked() {
  locationX.push(mouseX);
  locationY.push(mouseY);

  // loop voor als je op de bottel drukt
  for (let i = 0; i < RandomRecX.length; i++) {
    if (
      mouseX > RandomRecX[i] &&
      mouseX < RandomRecX[i] + img_bottle.width * 0.5 &&
      mouseY > RandomRecY &&
      mouseY < RandomRecY + img_bottle.height * 0.5
    ) {
      RandomRecX[i] = random(10, 460);
      score++;
    }
  }
}
