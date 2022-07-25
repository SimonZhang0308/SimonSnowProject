function stroke(color){
    ctx.strokeStyle = color;
}
function fill(color){
    ctx.fillStyle = color;
}

function circle(x,y,r,mode){
    ctx.beginPath();
    ctx.arc(x,y,r,0, 2 * Math.PI, false);
    if (mode == "fill"){
        ctx.fill();
    }
    else if (mode == "stroke"){
        ctx.stroke();
    }
}