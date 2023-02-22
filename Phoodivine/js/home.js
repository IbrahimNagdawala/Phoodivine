const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("open");
  navbar.classList.toggle('active');
})

window.onscroll = () =>{

  hamburger.classList.remove('open');
  navbar.classList.remove('active');

  // if(window.scrollY > 60){
  //   document.querySelector('#scroll-top').classList.add('active');
  // }else{
  //   document.querySelector('#scroll-top').classList.remove('active');
  // }

}

