function seachbarClicked(elm){
  document.getElementById("navbar-searchbar").classList.contains
  if (elm.classList.contains("searchbar-focus")){
    console.log("already open")
  }
  else{
    elm.classList.add("searchbar-focus")
  }
}





// scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    // console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
      }else{
        entry.target.classList.remove('show');
        entry.target.classList.add('hidden');

      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    // console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden2');
      }else{
        entry.target.classList.remove('show');
        entry.target.classList.add('hidden2');

      }
  });
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));


window.addEventListener('scroll', function(e) {
  const target = document.querySelector('.scroll-text1');
  console.log(target)
  var scrolled = window.pageYOffset;
  console.log(scrolled)
  var rate = (scrolled - 360 ) * 0.5 / 10 - 15;
  console.log("rate = "+rate)
  target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
});


// sidebar logo
const menu = document.getElementById("menu")
Array.from(document.getElementsByClassName("sidebar-item"))
  .forEach((item, index) => {
    item.onmouseover = () =>{
      menu.dataset.activeIndex = index;
      console.log(menu)
    }
  })


  // toggleFullscreenMenu
  function toggleFullscreenMenu(){
    let fsMenu = document.getElementById("fullscreen-menu")
    if (fsMenu.style.display == "initial"){

      fsMenu.style.display = "none"
    }
    else{
      fsMenu.style.display = "initial"
    }
  }

  //toggleSideTopbar
  function  toggleSideTopbar(){
    let sideTopBar = document.getElementById("sidetopbar-btn")

    if (sideTopBar.classList.contains("sidebar-element-wrapper"))
    {
      sideTopBar.classList.remove("sidebar-element-wrapper")
      sideTopBar.classList.add("sidebar-topbar-wrapper")
    }
    else{
      sideTopBar.classList.add("sidebar-element-wrapper")
      sideTopBar.classList.remove("sidebar-topbar-wrapper")
    }
  }

  function leaveSideTopbar(){
    let sideTopBar = document.getElementById("sidetopbar-btn")

    if (sideTopBar.classList.contains("sidebar-topbar-wrapper"))
    {
      sideTopBar.classList.add("sidebar-element-wrapper")
      sideTopBar.classList.remove("sidebar-topbar-wrapper")
    }
  }

  function toggleAuth(){
    let auth = document.getElementById("auth")
    if (auth.style.display == "none"){
      auth.style.display = "flex"
    }
    else{
      auth.style.display = "none"
    }
  }



  document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
      leaveSideTopbar()
      document.getElementById("fullscreen-menu").style.display = "none"
      document.getElementById("auth").style.display = "none"
    }
};