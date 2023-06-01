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
const count = document.querySelectorAll(".count")

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
const nums = document.querySelectorAll(".count");
const statsSection = document.querySelector(".rolfing");
let started = false;
if(nums != null && statsSection != null){
  window.addEventListener("scroll", () => {
    if(window.scrollY >= statsSection.offsetTop){
      if(!started){
        nums.forEach((num) =>startCounter(num));
      }
      started = true;
    }
  })
  
  function startCounter(el){
    let goal = el.dataset.val;
    let count = setInterval(() =>{
    let elem = el.textContent++;
      if(elem == goal) {
        clearInterval(count);
      }
    },2000/goal);
  }
}

// Louie Counter
// const counter = document.querySelectorAll(".louie-counter__heading");
// const counterSection = document.querySelector(".louie-counter");

// if( counter != null && counterSection != null){
//   window.addEventListener("scroll", () => {
//     if(window.scrollY >= counterSection.offsetTop){
//       if(!started){
//         counter.forEach((num) =>startCount(num));
//       }
//       started = true;
//     }
//   })
  
//   function startCount(el){
//     let max = el.dataset.max;
//     let count = setInterval(() =>{
//     let elem = el.textContent++;
//       if(elem == max) {
//         clearInterval(count);
//       }
//     },2000/goal);
//   }
// }
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
    { duration: 0.8, opacity: 1, stagger: 0.5 }
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 0.8,
    ease: Power4.easeOut,
  });
});

// animate fade in up
const textContainers = gsap.utils.toArray(".animate-fade-in-up");
textContainers.forEach((item, i) => {
  const anim = gsap.fromTo(item,
    { opacity: 0, y: "15%" },
    { duration: 0.8, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration:0.8,
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
    { duration: 1, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});

//====== Animation end ======


//====== Gallery start ======
const popup = document.querySelector(".popup");
if(popup != null) {
  window.addEventListener("load", ()=>{
    setTimeout(()=>{
      // popup.style.display= "block"
      // popup.style.transform = "translateY(0)";
      popup.style.transform = "scale(1)";
      document.querySelector(".img-mask").classList.add("is-open");
    }, 2000);
  })

  const cancelBtn = document.querySelector(".popup__cancel");
  cancelBtn.addEventListener("click", () => {
    // popup.style.transform = "translateY(-150%)";
    popup.style.transform = "scale(0)";
    document.querySelector(".img-mask").classList.remove("is-open");
  })
}




$(document).ready(function () {
$(".img-wrapper").hover(
  function(){
    $(this).find(".img-overlay").animate({ opacity: 0.5}, 600);
  }, 
  function(){
    $(this).find(".img-overlay").animate({ opacity:0}, 600);
  }
);

// Lightbox
var $overlay = $('<div id = "overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id = "prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id = "nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id = "exitButton"><i class="fa fa-times"></i></div>');

// Add Overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$(".gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(e) {
  // prevents default behaviour
  e.preventDefault();
  // Add href attribute to variable
  var imageLocation = $(this).prev().attr("src");
  // Add the image src to $image
  $image.attr('src', imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function(e) {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('.gallery--img img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = $(".gallery--img img");
  // If there is a next image
  if ($nextImg.length > 0) { 
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('.gallery--img img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
  // Fade out the overlay
  $("#overlay").fadeOut("slow");
});
});
//====== Gallery end ======