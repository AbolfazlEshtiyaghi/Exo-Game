let navDiv = document.querySelector(".navDiv");
let subMenu1 = document.querySelector(".subMenu1");
let divHeaderHeightDesktop=document.querySelector(".div-header-height-desktop")

navDiv.addEventListener("mouseenter", () => {
 if(navDiv.dataset.link==="navDiv-hover"){
   subMenu1.classList.add("opac");
    divHeaderHeightDesktop.classList.add("boxshadow-nav")
 }
});


navDiv.addEventListener("mouseleave", () => {
  if(navDiv.dataset.link==="navDiv-hover"){
   subMenu1.classList.remove("opac");
  divHeaderHeightDesktop.classList.remove("boxshadow-nav")
 }
});
let hamDiv = document.querySelector(".hamburger-div");
let subMenu = document.querySelector(".subMenu-background-hamburger");
hamDiv.addEventListener("click", () => {
  subMenu.classList.add("left");
 
});
let closeMenu = document.querySelector(".close-menu");
closeMenu.addEventListener("click", () => {
  subMenu.classList.remove("left");
});
  let headerDeskDivOpen = document.querySelector(".div-header-height-desktop");
  let headerDesktop=document.querySelector(".header-desktop")
  let divText=document.querySelector(".div-text")
// window.addEventListener("scroll", () => {

//   if (window.scrollY > 100) {
//     headerDeskDivOpen.classList.add("height");
//     headerDesktop.classList.add("min-height")


//   } else {
//     headerDeskDivOpen.classList.remove("height");
//     headerDesktop.classList.remove("min-height")

//   }
// });

let navDivSubMenu=document.querySelectorAll(".menu-div-desktop")
let p2=document.querySelector(".p2")
let p3=document.querySelector(".p3")
let p4=document.querySelector(".p4")
let p5=document.querySelector(".p5")
let p6=document.querySelector(".p6")
let p7=document.querySelector(".p7")
let p8=document.querySelector(".p8")
let p9=document.querySelector(".p9")
let p10=document.querySelector(".p10")
let p1111=document.querySelector(".p1111")





navDivSubMenu.forEach((navDivsDeskSubMenu)=>{
navDivsDeskSubMenu.addEventListener("mouseenter",()=>{
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop1"){
p2.classList.add("opacity")
  }else{
    p2.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop2"){
p3.classList.add("opacity")
  }else{
    p3.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop3"){
p4.classList.add("opacity")
  }else{
    p4.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop4"){
p5.classList.add("opacity")
  }else{
    p5.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop5"){
p6.classList.add("opacity")
  }else{
    p6.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop6"){
p7.classList.add("opacity")
  }else{
    p7.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop7"){
p8.classList.add("opacity")
  }else{
    p8.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop8"){
p9.classList.add("opacity")
  }else{
    p9.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop9"){
p10.classList.add("opacity")
  }else{
    p10.classList.remove("opacity")
  }
  if(navDivsDeskSubMenu.dataset.link==="menu-div-desktop10"){
p1111.classList.add("opacity")
  }else{
    p1111.classList.remove("opacity")
  }

})
})