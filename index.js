import { Bubble } from "./Bubble.js";

let cvs = document.createElement("canvas");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
document.body.append(cvs);

window.addEventListener("load", () => {
  const ctx = cvs.getContext("2d");

  let bubblesArray = [];
  const bubbles = 200;

  for (let i = 0; i < bubbles; i++) {
    let radius = Math.floor(Math.random() * 20);
    let x = Math.random() * (cvs.width - radius * 2) + radius;
    let y = Math.random() * (cvs.height - radius * 2) + radius;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    const color = `hsl(${Math.random() * 360},80%,40%)`;

    bubblesArray.push(new Bubble(ctx, x, y, radius, dx, dy, color));
  }

  function gameLoop() {
    // ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    bubblesArray.forEach((bubble) => {
      bubble.update();
    });

    requestAnimationFrame(gameLoop);
  }
  window.requestAnimationFrame(gameLoop);
});
