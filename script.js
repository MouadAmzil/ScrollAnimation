window.addEventListener('scroll',_=>{
  let Content=document.querySelector('.items');
  let ContentPostion=Content.getBoundingClientRect().top;
  let windowPostion=innerHeight;
  if(windowPostion>ContentPostion){
    Content.classList.add('itemsscroll');
  }else{
    Content.classList.remove('itemsscroll');
  }

})


