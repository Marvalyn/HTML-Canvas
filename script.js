const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//setting the stroke to a colour and setting it so that when lines join and cap the line will be rounded at that point

ctx.strokeStyle = "BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

// setting isdrawing to false will only draw a line when the mouse is clicked
let isDrawing = false;
//start and end point set to zero
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing)
        return;

    console.log(e);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);