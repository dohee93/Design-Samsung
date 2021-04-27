var searchText, projectItem, projectTitle, projectNum;

function searchProject(){
   searchText = document.getElementById('project-search').value;
   projectItem = document.querySelectorAll('.content_list li');
   projectTitle = document.querySelectorAll('.content_list li dl dt.title');
   projectNum = projectItem.length;

   for(var i = 0; i < projectNum; i++) {
      if(projectTitle[i].innerHTML.search(searchText) >= 0) {
         projectItem[i].style.display = 'inline-block';
      } 
      else {
         projectItem[i].style.display = 'none';
      }
   }
}