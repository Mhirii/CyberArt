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