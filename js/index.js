let categoryArea = document.getElementsByClassName('category-area-holder')[0],
    sloganBox = document.getElementsByClassName('slogan_box')[0],
    openBg = document.getElementsByClassName('open-bg')[0];

window.addEventListener('scroll', function(){
   var nowScrollTop = window.pageYOffset;
   if(nowScrollTop > 10) {
      categoryArea.style.transform = 'translateY(-100%)';
      sloganBox.style.transform = 'scaleX(0)';
      openBg.style.transform = 'translateY(-47%)';
   } else {
      if(nowScrollTop <= 10 ) {
         categoryArea.style.transform = 'translateY(0)';
         sloganBox.style.transform = 'scaleX(1)';
         openBg.style.transform = 'translateY(0)';
      }
   }
});