// const loader = document.getElementsByClassName("pre-loader");
const header = document.querySelector(".header");
const formGroup = document.querySelectorAll(".form__group");
const hamburgerBtn = document.querySelector(".hamburger-wrapper");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".header-wrapper--mobile");
const overlay = document.querySelector(".overlay")


// window.addEventListener("load",()=>{
//   loader.style.display = "none";
// })

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
  if(!showMenu) {
    hamburger.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    overlay.classList.add('is-active');
    showMenu = true;
  }else{
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('is-active');
    showMenu = false;
  }
}

// Form group
formGroup.forEach((item)=>{
  item.addEventListener("focusin", ()=>{
    item.classList.add("isBorder");
  })
  item.addEventListener("focusout", ()=>{
    item.classList.remove("isBorder");
  })
})