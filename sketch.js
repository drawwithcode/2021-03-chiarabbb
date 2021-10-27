const images = [
  "../assets/joy_0.jpeg",
  "../assets/joy_2.jpeg",
  "../assets/joy_3.jpeg",
  "../assets/joy_4.jpeg",
  "../assets/joy_5.jpeg",
  "../assets/joy_6.jpeg",
  "../assets/joy_7.jpeg",
  "../assets/joy_8.jpeg",
  "../assets/joy_9.jpeg",
  "../assets/joy_10.jpeg",
]

function preload() {
  song = loadSound("../assets/joy_division.mp3");
}

let button;
let bg;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('click me');
  button.position(windowWidth / 2, windowHeight / 2);
  button.mousePressed(startSong);
}

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")

  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

  document.body.appendChild(img)

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

document.addEventListener("click", function(event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function(event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})


function draw() {
  background(20);
  resizeCanvas(img.width, img.height);

  noStroke();

  for (let i = 0; i < 8000; i++) {
    rect(random(width), random(height), 4, 4);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function startSong() {
  if (song.isPlaying()) {
    song.pause()
  } else {
    song.play()
  }
}