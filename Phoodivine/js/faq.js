let questionButton = document.querySelectorAll('.question button');


questionButton.forEach((elem)=>{
  elem.addEventListener("click",()=>{
    elem.classList.toggle("show");
  })
})