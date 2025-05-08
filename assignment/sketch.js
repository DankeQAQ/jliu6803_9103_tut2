let numSegments = 50;
let segments = [];
let img;
let imgDrwPrps = { aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0 };
let canvasAspectRatio = 0;

function preload() {
  img = loadImage('assets/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imgDrwPrps.aspect = img.width / img.height;
  calculateImageDrawProps();
}

function draw() {
  background(0);
  image(
    img,
    imgDrwPrps.xOffset,
    imgDrwPrps.yOffset,
    imgDrwPrps.width,
    imgDrwPrps.height
  );
}

function calculateImageDrawProps() {
  canvasAspectRatio = width / height;

  if (imgDrwPrps.aspect > canvasAspectRatio) {
    imgDrwPrps.width = width;
    imgDrwPrps.height = width / imgDrwPrps.aspect;
    imgDrwPrps.xOffset = 0;
    imgDrwPrps.yOffset = (height - imgDrwPrps.height) / 2;
  } else {
    imgDrwPrps.height = height;
    imgDrwPrps.width = height * imgDrwPrps.aspect;
    imgDrwPrps.yOffset = 0;
    imgDrwPrps.xOffset = (width - imgDrwPrps.width) / 2;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateImageDrawProps();
}