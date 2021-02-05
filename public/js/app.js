document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
//changeBackgroundColour();
//openMenu();
//openNav();
//closeNav();
//closeMenu();

});
document.addEventListener("keypress", function(e){
    var x = document.getElementById("menu");
    if (x.style.display === "block" && (e.key=='Escape'||e.key=='Esc'||e.keyCode==27)) {
        x.style.display === "none"
    }
});

document.addEventListener('click', function(event){
  console.log('click found')
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
    console.log('open menu')
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
      

    } else {
      x.style.display = "none";
    }
  }
 function closeMenu(){
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      var isClickInside = document.getElementById("menu").contains(event.target);
      if (!isClickInside) {
        //the click was outside the specifiedElement, do something
        document.getElementById("menu").style.display = "none"
    }
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
