let categoryArea = document.getElementsByClassName('category-area-holder')[0],
    sloganBox = document.getElementsByClassName('slogan_box')[0],
    openBg = document.getElementsByClassName('open-bg')[0];

window.addEventListener('scroll', function(){
   var nowScrollTop = window.pageYOffset;
   if(nowScrollTop > 10) {
      categoryArea.style.transform = 'translateY(-100%)';
      sloganBox.style.transform = 'scale(0.7)';
      openBg.style.transform = 'translateY(-47%)';
   } else {
      if(nowScrollTop <= 10 ) {
         categoryArea.style.transform = 'translateY(0)';
         sloganBox.style.transform = 'scale(1)';
         openBg.style.transform = 'translateY(0)';
      }
   }
});

let langButton = document.getElementsByClassName('lang'),
   body = document.getElementsByTagName('body')[0],
   langOpenState = false;

langButton[0].addEventListener('click', function(ev){
   ev.preventDefault();
   if(!langOpenState){
      body.classList.add('onOpenLang');
      langOpenState = true;
   } else {
      body.classList.remove('onOpenLang');
      langOpenState = false;
   }
   
});

// btn_main_top

// 변수 지정하기
// 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 
// offset 값을 계산하기

//스크롤과 클릭 이벤트 작성하기
var btt = document.getElementsByClassName('btn_main_top'),
   docElem = document.documentElement,
   offset,
   scrollPos,
   docHeight;



// 문서 높이 계산하기 scrollHeight, offsetHeight (브라우저에 따라 다를 수 있음)
docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
if(docHeight != 'undefined') {
   offset = docHeight / 4;
}

// 스크롤 이벤트 추가
window.addEventListener('scroll', function(){
   scrollPos = docElem.scrollTop;
   if(scrollPos > offset) {
      btt[0].classList.add('visible');
   } else {
      btt[0].classList.remove('visible');
   }
});
// 클릭 이벤트 추가
btt[0].addEventListener('click', function(ev){
   ev.preventDefault(); // 링크의 본연의 기능을 막는다.
   scrollToTop();
});
function scrollToTop() {
   var scrollInterval = setInterval(function(){
      if(scrollPos != 0) window.scrollBy(0, -55);
      else clearInterval(scrollInterval);
   }, 15); // 0.0015s = 15
   
}

