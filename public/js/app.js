document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
//changeBackgroundColour();
//openMenu();
//openNav();
//closeNav();
//closeMenu();

});
window.addEventListener("keydown", function (event) {
    var x = document.getElementById("menu");
    if(event.key==27||event.key=="Escape"||event.key=="esc") {
     x.style.display = "none";
    console.log("esc")
    }
}, true);

document.addEventListener('click', function(event){
  
  var x = document.getElementById("menu");
    if (x.style.display === "block") {
      var isClickInsideNav = document.getElementById("menu").contains(event.target);
      var isClickInsideButton = document.getElementById("menuButton").contains(event.target);// and button
      if (!isClickInsideNav && !isClickInsideButton) {
        //the click was outside the specifiedElement, do something
        document.getElementById("menu").style.display = "none"
    }
  }
});

function changeBackgroundColour(){
   let itemPost = document.getElementsByClassName('item-post');
  for(let element of itemPost){
    element.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  }
}
  function openMenu() {
     var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
      } else {
      x.style.display = "none";
    }
  }
 
   
function openNav() {
  document.getElementById("mySidenav").style.width = '75%';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 
document.addEventListener('click', function(event){
  console.log('click found')
  var y = document.getElementById("mySidenav");
    if (y.style.display === "block") {
      var isClickInsideNavBar = document.getElementById("mySidenav").contains(event.target);
      var isClickInsideNavMenu = document.getElementById("sideBarButton").contains(event.target);// and button
      if (!isClickInsideNavBar && !isClickInsideNavMenu){
        //the click was outside the specifiedElement, do something
        document.getElementById("menu").style.display = "none"
    }
  }
});
