/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
let r = 150;
let angle = 1;
let num = 600;
let speed = 0;
let scale = 0;
let historyX = 0;
let historyY = 0;

const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");

slider1.addEventListener("change", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  e.target.value;
});

slider2.addEventListener("change", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  e.target.value;
});

function draw(angle) {
  for (let i = 0; i < num; i++) {
    angle = ((Math.PI * 2) / num) * i;
    let x =
      canvas.width / 2 +
      r * Math.cos(angle * slider1.value) * Math.cos((angle += scale));
    let y =
      canvas.height / 2 +
      r * Math.cos(angle * -slider2.value) * Math.sin((angle += scale));

    ctx.fillStyle = "white";
    ctx.beginPath();
    // ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.moveTo(x, y);
    ctx.lineTo(historyX, historyY);
    ctx.stroke();

    historyX = x;
    historyY = y;
  }
}
console.log(angle);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();
  requestAnimationFrame(animate);
  if (scale < 10) {
    scale += 0.001;
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scale = 0;
  }

}
animate();

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});
