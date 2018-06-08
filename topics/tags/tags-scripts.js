var prevX, prevY;
var canvas, context;

function createCanvas1() {
    canvas = document.getElementById("canvas1");
    context = canvas.getContext("2d");
    
    canvas.addEventListener("mousemove", draw, false);
}

function draw(e) {
    var pos = getMousePos(canvas, e);
    context.fillStyle = "red";
    context.fillRect(pos.x-1, pos.y-1, 2, 2);
}

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect(), 
        scaleX = canvas.width / rect.width, 
        scaleY = canvas.height / rect.height;

    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    }
}

function clearCanvas1() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

////////////////////////////////////////////////////////////////////////

function createCanvas2() {
    var canvas = document.getElementById("canvas2");
    var ctx = canvas.getContext("2d");

    //rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 20, 20);

    //triangle
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(35, 70);
    ctx.lineTo(60, 95);
    ctx.lineTo(60, 45);
    ctx.fill();
    ctx.closePath();

    //smiley face
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(145, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(180, 75);
    ctx.arc(145, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(135, 65);
    ctx.arc(130, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(165, 65);
    ctx.arc(160, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    ctx.closePath();
}

////////////////////////////////////////////////////////////////////////

function createCanvas3() {
    drawPacman();
}

function drawPacman() {
    var canvas = document.getElementById('canvas3');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      roundedRect(ctx, 12, 12, 150, 150, 15);
      roundedRect(ctx, 19, 19, 150, 150, 9);
      roundedRect(ctx, 53, 53, 49, 33, 10);
      roundedRect(ctx, 53, 119, 49, 16, 6);
      roundedRect(ctx, 135, 53, 49, 33, 10);
      roundedRect(ctx, 135, 119, 25, 49, 10);
  
      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(31, 37);
      ctx.fill();
  
      for (var i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }
  
      for (i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }
  
      for (i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }
  
      ctx.beginPath();
      ctx.moveTo(83, 116);
      ctx.lineTo(83, 102);
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      ctx.lineTo(111, 116);
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill();
  
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();
  
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
    }
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}