const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//setting the stroke to a colour and setting it so that when lines join and cap the line will be rounded at that point

ctx.strokeStyle = "BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";