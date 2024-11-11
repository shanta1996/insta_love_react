const image = document.querySelector("#img");
const icon = document.querySelector("#icon");
const blankLove=document.querySelector('#blankLove')
const fillLove=document.querySelector('#fillLove')
let check = 0;
image.addEventListener("dblclick", () => {
    fillLove.style.opacity='1'
    fillLove.style.transform='scale(1)'
    icon.style.color = "red";
    icon.style.opacity = "75";
    icon.style.transform = "translate(-50%,-50%) scale(1.25)";
    setTimeout(() => {
      icon.style.transform='translate(-50%,-50%) scale(0)'
    }, 2000);
    setTimeout(() => {
      icon.style.opacity = "0";
    }, 1000);
  
});



blankLove.addEventListener('click',()=>{
    fillLove.style.opacity='1'
    fillLove.style.transform='scale(1)'
    blankLove.style.opacity='0'

    icon.style.color = "red";
    icon.style.opacity = "75";
    icon.style.transform = "translate(-50%,-50%) scale(1.25)";
    setTimeout(() => {
      icon.style.transform='translate(-50%,-50%) scale(0)'
    }, 2000);
    setTimeout(() => {
      icon.style.opacity = "0";
    }, 1000);
})
fillLove.addEventListener('click',()=>{
  if(check==0){
    fillLove.style.opacity='0'
    blankLove.style.opacity='1'
    blankLove.style.transform='scale(1)'
    check=1
  }
  else{
    fillLove.style.opacity='1'
    blankLove.style.opacity='0'
    fillLove.style.transform='scale(1)'
    
    check=0
  }
   
})