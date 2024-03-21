// variabel global for using to get data function
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// creating menu hamburger
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// creating navbar fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > fixedNav) {
    // navbar fixed
    header.classList.add('navbar-fixed');
    // show and hide button to top
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    // navbar fixed
    header.classList.remove('navbar-fixed');
    // show and hide button to top
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
}

// close componen navbar menu of hamburger if on tap/click in other area
window.addEventListener('click', function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
})