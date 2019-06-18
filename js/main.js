var slide = document.querySelectorAll('div.about-slide h1');
var bg = document.querySelector('section.bg-type');




  let lastTranslateX = 0;



function makeBG(){
const title = 'Designer';
const makeMore = new Array(50).fill(title).join('&nbsp;');
const insert =  document.querySelector('.bg-type span');
insert.innerHTML = makeMore;

}
makeBG();


function addOnScroll() {
    for  ( var i = 0; i < slide.length; i++){
        if(slide[i].classList.contains('scroll', 'show')){

            continue;
        }else{
            slide[i].classList.add('scroll', 'show');




            break;
        }
    }
};

function removeOnScroll() {
  for (var i = slide.length - 1; i >= 0; i--) {
    if (!slide[i].classList.contains('scroll','show')) {
      continue;
    }

     else {
      slide[i].classList.remove('scroll', 'show');
      break;
    }
  }
};





function moveBackground() {




  lastTranslateX -= 400;
    bg.style.transform = "translateX(" + (lastTranslateX) + "px)";



};

function moveBackgroundBack() {
  if(lastTranslateX >= 0){

  }
  else{
  lastTranslateX += 400;
    bg.style.transform = "translateX(" + (lastTranslateX) + "px)";
}

};


function showButton(){

document.querySelector(".header-desktop nav .backtomain").style.transform = "translateX(0)";
document.querySelector(".slider").style.transform = "translateX(0)";


}
function hideButton(){

document.querySelector(".header-desktop nav .backtomain").style.transform = "translateX(-100vh)";
document.querySelector(".slider").style.transform = "translateX(-100vh)";

}

function openNav() {
    document.getElementById("galley").style.width = "100%";
};

function closeNav() {
    document.getElementById("galley").style.width = "0%";
};


window.addEventListener('load', (event) => {
  if (document.referrer.indexOf('work-8.html') > -1) {
    document.querySelector(".work").click()
}
});