function createCanvas(){
    var artDiv = document.getElementById("art");
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.style.height =  "100%";
    canvas.style.width = "100%";
    canvas.style.position = "relative";
    artDiv.appendChild(canvas);
}

$(document).ready(function() {
    createCanvas();
    var canvas = $("#canvas")[0];
    createRectangle(canvas, 500, 50);
});

function createRectangle(canvas, width,height){
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, width, height);
}

$(document).on('mouseover mouseout', '#1', function(){
    console.log("1213231");
});