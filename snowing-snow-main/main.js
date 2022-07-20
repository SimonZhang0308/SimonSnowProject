let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let Bubbles = [];
for (let i = 0; i < 100; i++){
    Bubbles.push(newBubble(randomInt(0,801),randomInt(0,601),randomInt(1,5),"white"));
}
function randomInt(low,high){
    return Math.floor(Math.random() * (high - low) + low);
}

requestAnimationFrame(draw);
function draw(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
    for (let i = 0; i < Bubbles.length; i++){
        moveBubble(Bubbles[i]);
        drawBubble(Bubbles[i]);
        if (Bubbles[i].y >= 600){
            Bubbles[i].y = 0;
            Bubbles[i].x = randomInt(0,801);
        }
    }
    requestAnimationFrame(draw);
}

function newBubble(initX, initY, initR, initColor){
    return{
        x:initX,
        y:initY,
        r:initR,
        color: initColor
    };

}
function drawBubble(aBubble){
    fill(aBubble.color);
    circle(aBubble.x,aBubble.y,aBubble.r,"fill");
}

function moveBubble(aBubble){
    aBubble.y += randomInt(0,3);
}