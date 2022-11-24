function seachbarClicked(elm){
  document.getElementById("navbar-searchbar").classList.contains
  if (elm.classList.contains("searchbar-focus")){
    console.log("already open")
  }
  else{
    elm.classList.add("searchbar-focus")
  }
}