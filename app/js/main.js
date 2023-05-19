const header = document.querySelector(".header");
const formGroup = document.querySelectorAll(".form__group");
// const loader = document.getElementsByClassName("pre-loader");


// window.addEventListener("load",()=>{
//   loader.style.display = "none";
// })

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

formGroup.forEach((item)=>{
  item.addEventListener("focusin", ()=>{
    item.classList.add("isBorder");
  })
  item.addEventListener("focusout", ()=>{
    item.classList.remove("isBorder");
  })
})