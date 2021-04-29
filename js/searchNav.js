var searchText, projectItem, projectTitle, projectNum, searchTextPattern;
function searchProject(){
   // searchText = document.getElementById('project-search').value.toLowerCase();
   searchText = document.getElementById('project-search').value;
   projectItem = document.querySelectorAll('.content_list li');
   projectTitle = document.querySelectorAll('.content_list li dl dt.title');
   projectNum = projectItem.length;
   searchTextPattern = new RegExp(searchText, "i");
   
   // document.querySelector('.hero').style.display = 'none';
   for(var i = 0; i < projectNum; i++) {
      
      // if(projectTitle[i].innerHTML.toLowerCase().search(searchText) >= 0) {
      if(projectTitle[i].innerHTML.search(searchTextPattern) >= 0) {
         
         projectItem[i].style.display = 'inline-block';
      } 
      else {
         projectItem[i].style.display = 'none';
      }
   }
}
var btnSearch = document.querySelector('.search'),
   gnbSearch = document.querySelector('.gnb-search'),
   openState = false;

btnSearch.addEventListener('click', function(){
   if(openState) {
      gnbSearch.style.display = 'none';
      openState = false;
   } else {
      gnbSearch.style.display = 'inline-block';
      openState = true;
   }
});

