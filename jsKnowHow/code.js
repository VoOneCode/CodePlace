window.onload = function(){
  //text section start
  let text = document.querySelector('.textarea p');
  let btnU = document.querySelector('.buttons #U');
  let btnB = document.querySelector('.buttons #B');
  let btnI = document.querySelector('.buttons #I');

  btnU.onclick = function(){
    DivThrill();
    text.classList.toggle('U');
  }

  btnB.onclick = function(){
    BoxRandFlash();
    if(text.style.fontWeight !== 'bold'){
      text.style.fontWeight = 'bold';}
    else {
      text.style.fontWeight = '';
    }
  }

  btnI.onclick = function(){
    BoxLineFlash();
    let em = document.querySelector('.textarea em');
    let v = 'текст ТЕКСТ';
    if(em !== null){
      em.remove();
      text.innerHTML = v;
    }else {
      text.innerHTML = `<em>${v}</em>`;
    }
  }
  //text section end
  //box section started
  let bx = document.querySelectorAll('.box');
  function DivThrill(){
    for(let i of bx){
      i.classList.toggle('box2');
    }
  }


  function BoxRandFlash(){
      for(let i=0; i< bx.length; i++){
        let rnum = Math.floor(Math.random() * (bx.length));
        bx[rnum].classList.toggle('box2');
        setTimeout(function(){
          bx[rnum].classList.toggle('box2');
        }, 500);
      }
  }


  /*function BoxLineFlash(){
    for(let i of bx){
        i.classList.toggle('box2');
        setTimeout(function(){
          i.classList.toggle('box2');
        }, 1000);
      }
  }*/
  const DEF_DELAY = 1000;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
  }

  async function BoxLineFlash(){
    for(let i of bx){
        i.classList.toggle('box2');
        await sleep(350);
        i.classList.toggle('box2');

      }
  }


}
