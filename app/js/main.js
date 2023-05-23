const loader = document.querySelector(".page-loader");
const header = document.querySelector(".header");
const formGroup = document.querySelectorAll(".form__group");
const hamburgerBtn = document.querySelector(".burger__wrapper");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".header-wrapper--mobile");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay")
const video = document.querySelector(".video__video-tag");
const playBtn = document.querySelector(".video__play");
const pauseBtn = document.querySelector(".video__pause");
const counter = document.querySelector(".count-digit")

// Pre-loader
window.onload = () =>{
  loader.style.display = "none";
}


// Sticky header
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });


// Toggle Menu
let showMenu = false;
hamburgerBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
  mobileMenu.classList.add('is-open');
  overlay.classList.add('is-active');
}

closeBtn.addEventListener('click', closeMenu);
function closeMenu(){ 
  mobileMenu.classList.remove('is-open');
  overlay.classList.remove('is-active');
}

// Video play & pause action
playBtn.addEventListener('click', function(){
      video.play();
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'block';
})
pauseBtn.addEventListener('click', function(){
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    video.pause();
})


// Counter
let counterNum = 0;
function updateCounteringNum(){
  counterNum++;
  counter.textContent = counterNum;
}
function handleScroll(){
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    updateCounteringNum();
  }
}
window.addEventListener('scroll', handleScroll);




// Testimonial Swiper
var swiper = new Swiper(".mySwiper",{
  slidesPerView:1,

  loop:true,
  navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
  },
})


// Form group
formGroup.forEach((item)=>{
  item.addEventListener("focusin", ()=>{
    item.classList.add("isBorder");
  })
  item.addEventListener("focusout", ()=>{
    item.classList.remove("isBorder");
  })
})