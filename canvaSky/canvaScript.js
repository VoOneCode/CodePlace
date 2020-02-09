
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

/*function SmallBear(){
  ctx.save();
  //ctx.rotate(-20*degree)
  let sX = 530,
      sY = 350;
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(sX, sY);
  ctx.lineTo(sX-35, sY+30);
  ctx.lineTo(sX, sY+90);
  ctx.lineTo(sX+50, sY+80);
  ctx.lineTo(sX, sY);
  //изонуть ручку
  ctx.lineTo(sX-10, sY-120);
  ctx.closePath();
  ctx.stroke();

  BigStars(sX, sY);
  BigStars(sX-35, sY+30);
  BigStars(sX, sY+90);
  BigStars(sX+50, sY+80);
  BigStars(sX-10, sY-120);
  //ctx.restore();
};*/

function SmallBear(){
  ctx.save();
  //ctx.rotate(-20*degree)
  let sX = 530,
      sY = 350;
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(sX, sY);
  ctx.lineTo(sX-45, sY-20);
  ctx.lineTo(sX-60, sY+85);
  ctx.lineTo(sX-10, sY+80);
  ctx.lineTo(sX, sY);
  //изонуть ручку
  ctx.lineTo(sX+20, sY-70);
  ctx.lineTo(sX+45, sY-100);
  ctx.lineTo(sX+70, sY-110);
  ctx.stroke();
  ctx.closePath();

  BigStars(sX, sY);
  BigStars(sX-45, sY-20);
  BigStars(sX-60, sY+85);
  BigStars(sX-10, sY+80);
  BigStars(sX+20, sY-70);
  BigStars(sX+45, sY-100);
  BigStars(sX+70, sY-110);
  //ctx.restore();
};

function Dragon(){
  let sX = 650,
      sY = 550;
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(sX, sY);
  ctx.lineTo(sX-50, sY-10);
  ctx.lineTo(sX-160, sY+10);
  ctx.lineTo(sX-230, sY-45);
  ctx.lineTo(sX-250, sY-80);
  ctx.lineTo(sX-240, sY-110);
  ctx.lineTo(sX-230, sY-230);
  ctx.lineTo(sX-200, sY-310);
  ctx.lineTo(sX-180, sY-340);
  ctx.lineTo(sX-200, sY-366);
  ctx.lineTo(sX-220, sY-350);
  ctx.lineTo(sX-270, sY-345);
  ctx.lineTo(sX-300, sY-260);
  ctx.lineTo(sX-330, sY-265);
  ctx.lineTo(sX-325, sY-245);
  ctx.lineTo(sX-310, sY-247);
  ctx.lineTo(sX-300, sY-260);
  ctx.stroke();
  ctx.closePath();

  BigStars(sX, sY);
  BigStars(sX-50, sY-10);
  BigStars(sX-160, sY+10);
  BigStars(sX-230, sY-45);
  BigStars(sX-250, sY-80);
  BigStars(sX-240, sY-110);
  BigStars(sX-230, sY-230);
  BigStars(sX-200, sY-310);
  BigStars(sX-180, sY-340);
  BigStars(sX-200, sY-366);
  BigStars(sX-220, sY-350);
  BigStars(sX-270, sY-345);
  BigStars(sX-300, sY-260);
  BigStars(sX-330, sY-265);
  BigStars(sX-325, sY-245);
  BigStars(sX-310, sY-247);
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
Dragon();
