// 🎉 Confetti Effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

for (let i = 0; i < 300; i++) {
  confettiPieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    speedX: Math.random() * 3 - 1.5,
    speedY: Math.random() * 3 + 2,
    rotation: Math.random() * 360
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(piece => {
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate((piece.rotation * Math.PI) / 180);
    ctx.fillStyle = piece.color;
    ctx.beginPath();
    ctx.arc(0, 0, piece.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    piece.y += piece.speedY;
    piece.x += piece.speedX;
    piece.rotation += piece.speedY;

    if (piece.y > canvas.height) {
      piece.y = -10;
      piece.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
