window.onload = function(){
  //text section start
  let text = document.querySelector('.textarea p');
  let btnU = document.querySelector('.buttons #U');
  let btnB = document.querySelector('.buttons #B');
  let btnI = document.querySelector('.buttons #I');

  btnU.onclick = function(){
    text.classList.toggle('U');
    DivThrill();
  }

  btnB.onclick = function(){
    if(text.style.fontWeight !== 'bold'){
      text.style.fontWeight = 'bold';}
    else {
      text.style.fontWeight = '';
    }
  }

  btnI.onclick = function(){
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

  function DivThrill(){
    console.log('thr start');
    let bx = document.querySelectorAll('.box');
    for(let i of bx){
      i.classList.toggle('box2');
    }
  }


}
