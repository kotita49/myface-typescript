document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
changeBackgroundColour();
   
});
function changeBackgroundColour(){
   let itemPost = document.getElementsByClassName('item-post');
  for(let element of itemPost){
    element.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  }
  
   
  
      console.log('working test')
      //;
        
  }