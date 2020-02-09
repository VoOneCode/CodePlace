
let
  canv = document.querySelector('#canvas'),
  ctx = canv.getContext('2d');



  degree = Math.PI / 180;

canv.height = window.innerHeight;
canv.width = window.innerWidth;

ctx.fillStyle = 'wheat';
ctx.strokeStyle= 'white';

ctx.save();

//moon. add correct to positioning it
function Moon(r, st_ecl, end_ecl){
  let radius = r || 22,
      start_eclipse = st_ecl || 0.01;
      end_eclipse = end_ecl || 0.1;
      //moving moon throw sky
  //ctx.rotate(57 * degree);
  ctx.beginPath();
  ctx.arc(185, 95, radius, start_eclipse*degree, end_eclipse*degree, true);
  ctx.closePath();
  ctx.fill();
  //ctx.restore();
};

function Stars(rowX, rowY, stepX, stepY){
  let x = rowX || 50;
  let cur = 1;
  while (x < canv.width) {
    let y = rowY || 50;
    for(y; y<canv.height; y+=stepY){
      if( cur % 2 == 0){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(++x, ++y);
        ctx.closePath();
        ctx.stroke();
        x -= 1;
        y += 16;
    }
      else{
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(++x, ++y);
        ctx.closePath();
        ctx.stroke();
        x -= 1;
        y += 14;
    };
    }
    x += stepX;
    cur +=1;
};
};

function SmallBear(){
  ctx.save();
  ctx.rotate(-20*degree)
  let sX = 130,
      sY = 500;
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(sX, sY);
  ctx.lineTo(sX-35, sY+30);
  ctx.lineTo(sX, sY+90);
  ctx.lineTo(sX+50, sY+80);
  ctx.lineTo(sX, sY);
  ctx.lineTo(sX-10, sY-120);
  ctx.closePath();
  ctx.stroke();

  BigStars(sX, sY);
  BigStars(sX-35, sY+30);
  BigStars(sX, sY+90);
  BigStars(sX+50, sY+80);
  BigStars(sX-10, sY-120);
  ctx.restore();
};

function BigStars(sX, sY){
  ctx.beginPath();
  ctx.arc(sX, sY, 4, 0, 1, true);
  ctx.closePath();
  ctx.fill();
}

Moon(29, 290, 90);
Stars(-2, -165, 35, 35);
SmallBear();
