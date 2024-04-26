// variabel global for using to get data function
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// creating menu hamburger
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// close componen navbar menu of hamburger if on tap/click in other area
window.addEventListener('click', function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
})

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

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    // menambahkan local storage
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    // menambahkan local storage
    localStorage.theme = 'light';
  } 
})
// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Submit a Form to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzKr___kPwHS-NPib5zogd3hYCrvrCF8H6JF1I-0NjVWAMQUM1Hb5EcCSaWJaHM4vub/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alertBox = document.querySelector('#alertBox');

form.addEventListener('submit', e => {
  e.preventDefault();
  // ketika tombol diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnKirim.classList.toggle('hidden');
  btnLoading.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // tampilkan tombol kirim, hilangkan tombol loading
      btnKirim.classList.toggle('hidden');
      btnLoading.classList.toggle('hidden');
      // tampilkan alert
      alertBox.classList.remove('hidden');
      alertBox.classList.add('flex');
      // reset form setelah kirim pesan
      form.reset();
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})

// Function to close the alert box
function closeAlert() {
  var alertBox = document.getElementById("alertBox");
  alertBox.style.display = "none";
}