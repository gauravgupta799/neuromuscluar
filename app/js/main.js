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

//====== Pre-loader start ======
window.onload = () =>{
  loader.style.display = "none";
}
//====== Pre-loader end ======


//====== Sticky header start ======
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
//====== Sticky header end ======


//====== Toggle Menu start ======
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
//====== Toggle Menu end ======


//====== Video play & pause action start ======
if(playBtn != null && pauseBtn != null){
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
}
//====== Video play & pause action end ======


//====== Counter start ======
// let counterNum = 0;
// function updateCounteringNum(){
//   counterNum++;
//   counter.textContent = counterNum;
// }
// function handleScroll(){
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     updateCounteringNum();
//   }
// }
// window.addEventListener('scroll', handleScroll);
//====== Counter end ======


//====== Testimonial Swiper start ======
var swiper = new Swiper(".mySwiper",{
  slidesPerView:1,

  loop:true,
  navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
  },
})
//====== Testimonial Swiper end ======


//====== Form group start ======
formGroup.forEach((item)=>{
  item.addEventListener("focusin", ()=>{
    item.classList.add("isBorder");
  })
  item.addEventListener("focusout", ()=>{
    item.classList.remove("isBorder");
  })
})
//====== Form group end ======


//====== Tabs start ======
// const tab = document.querySelectorAll("sessions__tab");
function openTab(evt, tabNum){
  var i, tabContent, tablinks;

  tabContent = document.getElementsByClassName("sessions__contentWrapper");

  for(i=0; i< tabContent.length; i++){
    tabContent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("sessions__tab");
  for(i=0; i< tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabNum).style.display = "block";
  evt.currentTarget.className += " active";
}
const defaultOpt = document.getElementById("defaultOpen");
if(defaultOpt != null){
  defaultOpt.click();
}
//====== Tabs end ======


//====== Animation start ======
// animation fade in 
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0 },
    { duration: 1.2, opacity: 1, stagger: 0.5 }
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1.2,
    ease: Power4.easeOut,
  });
});

// animate fade in up
const textContainers = gsap.utils.toArray(".animate-fade-in-up");
textContainers.forEach((item, i) => {
  const anim = gsap.fromTo(
    item,
    { opacity: 0, y: "15%" },
    { duration: 1.2, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration:1.2,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});


// card-fade-in-up
const cardContainers = gsap.utils.toArray(".card-animate");
cardContainers.forEach((item, i) => {
  const anim = gsap.fromTo(
    item,
    { opacity: 0, y: "10%" },
    { duration: 2, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 2,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});

//====== Animation end ======