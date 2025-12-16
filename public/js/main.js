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
//  let swiper_Wrapper=document.querySelector(".back-Slider")
//    let hoverSwiper=document.querySelector(".hover-swiper")
//    let flashRt=document.querySelector(".swiper-button-prev, .swiper-rtl .swiper-button-next")
//    let flashLt=document.querySelector(".swiper-button-next, .swiper-rtl .swiper-button-prev")
//  swiper_Wrapper.addEventListener("mouseenter",()=>{
//   hoverSwiper.classList.add("opacity-swiper")
//   flashRt.classList.add("translateX")
//   flashLt.classList.add("translateXX")
//  })
//  swiper_Wrapper.addEventListener("mouseleave",()=>{
//     hoverSwiper.classList.remove("opacity-swiper")
//       flashRt.classList.remove("translateX")
//       flashLt.classList.remove("translateXX")
//  })


    

let navFooter=document.querySelectorAll(".nav-footer")
let mainDiv=document.querySelector(".main-foot-nav-div")
let subfoot=document.querySelector(".sub-footer")
let subfoot2=document.querySelector(".sub-footer2")
let subfoot3=document.querySelector(".sub-footer3")
let subfoot4=document.querySelector(".sub-footer4")
let subFooterDiv=document.querySelector(".sub-footer-div")
let subFooterDiv2=document.querySelector(".sub-footer-div2")
let subFooterDiv3=document.querySelector(".sub-footer-div3")
let subFooterDiv4=document.querySelector(".sub-footer-div4")
let green=document.querySelector(".green")
let green2=document.querySelector(".green2")
let green3=document.querySelector(".green3")
let green4=document.querySelector(".green4")
let ranslate=document.querySelector(".ranslate")
let ranslate2=document.querySelector(".ranslate2")
let ranslate3=document.querySelector(".ranslate3")
let ranslate4=document.querySelector(".ranslate4")
// navFooter.forEach((navFooters)=>{
// navFooters.addEventListener("click",()=>{

//   if(navFooters.dataset.link==="f1"){
//       mainDiv.classList.toggle("h-footer")
// subfoot.classList.toggle("h-footer1")
// subFooterDiv.classList.toggle("opacity-footer")
// green.classList.toggle("color-click")
// ranslate.classList.toggle("translate-click")
//   }
//   if(navFooters.dataset.link==="f2"){
//           mainDiv.classList.toggle("h-footer2")
// subfoot2.classList.toggle("h-footer11")
// subFooterDiv2.classList.toggle("opacity-footer")
// green2.classList.toggle("color-click")
// ranslate2.classList.toggle("translate-click")
//   }
//   if(navFooters.dataset.link==="f3"){
//           mainDiv.classList.toggle("h-footer3")
// subfoot3.classList.toggle("h-footer111")
// subFooterDiv3.classList.toggle("opacity-footer")
// green3.classList.toggle("color-click")
// ranslate3.classList.toggle("translate-click")
//   }
//   if(navFooters.dataset.link==="f4"){
//           mainDiv.classList.toggle("h-footer4")
// subfoot4.classList.toggle("h-footer1111")
// subFooterDiv4.classList.toggle("opacity-footer")
// green4.classList.toggle("color-click")
// ranslate4.classList.toggle("translate-click")
//   }
 

  
// })
// })
 
let youtube=document.querySelectorAll(".youtube")
let youtubeText=document.querySelectorAll(".text-youtube")
let youtubeText2=document.querySelectorAll(".text-youtube2")
let youtubeText3=document.querySelectorAll(".text-youtube3")
let youtubeText4=document.querySelectorAll(".text-youtube4")
let youtubeText5=document.querySelectorAll(".text-youtube5")
youtube.forEach((youtubes)=>{
// youtubes.addEventListener("mouseenter",()=>{
// if(youtubes.dataset.link==="icon1"){
//   youtubeText.forEach(( youtubeText1)=>{
//      youtubeText1.classList.add("opac-text-yo")
//   })
// }
// if(youtubes.dataset.link==="icon2"){
//   youtubeText2.forEach((youtubeText22)=>{
//     youtubeText22.classList.add("opac-text-yo")
//   })
// }
// if(youtubes.dataset.link==="icon3"){
//   youtubeText3.forEach((youtubeText33)=>{
//     youtubeText33.classList.add("opac-text-yo")
//   })
// }
// if(youtubes.dataset.link==="icon4"){
//   youtubeText4.forEach((youtubeText44)=>{
//     youtubeText44.classList.add("opac-text-yo")
//   })
// }
// if(youtubes.dataset.link==="icon5"){
//   youtubeText5.forEach((youtubeText55)=>{
//     youtubeText55.classList.add("opac-text-yo")
//   })
// }
// })
// youtubes.addEventListener("mouseleave",()=>{


//   youtubeText.forEach(( youtubeText1)=>{
//      youtubeText1.classList.remove("opac-text-yo")
//   })
//   youtubeText2.forEach((youtubeText22)=>{
//     youtubeText22.classList.remove("opac-text-yo")
//   })
// youtubeText3.forEach((youtubeText33)=>{
//     youtubeText33.classList.remove("opac-text-yo")
//   })
//   youtubeText4.forEach((youtubeText44)=>{
//     youtubeText44.classList.remove("opac-text-yo")
//   })
//   youtubeText5.forEach((youtubeText55)=>{
//     youtubeText55.classList.remove("opac-text-yo")
//   })

// })

})
 


   let divClick=document.querySelectorAll(".div-click")
    let openDiv=document.querySelectorAll(".open-div")
    let openDiv1=document.querySelectorAll(".open-div1")
    let openDivDiv=document.querySelectorAll(".open-div-div")
    let openDivDivmo=document.querySelectorAll(".open-div-div-mo")
    let backOpen=document.querySelector(".back-open")
    let backOpen1=document.querySelector(".back-open1")
    let plusOpac=document.querySelectorAll(".plus-opac")
    let plusOpac1=document.querySelectorAll(".plus-opac1")
     let mainRemove=document.querySelectorAll(".main-remove")
     let mainRemoveMo=document.querySelectorAll(".main-remove-mo")
     let h1111=document.querySelectorAll(".h1111")
     let span1111=document.querySelectorAll(".span1111")
      let zeroNumber=document.querySelectorAll(".zero-number")
 let addNumber=document.querySelectorAll(".add-number")

//   divClick.forEach((divClicks)=>{
//     divClicks.addEventListener("click",()=>{
//       backOpen1.classList.toggle("add1")
// mainRemove.forEach((mainRemoves)=>{
// mainRemoves.classList.toggle("remove")
// })
// mainRemoveMo.forEach((mainRemovesMo)=>{
// mainRemovesMo.classList.toggle("remove")
// })
//     openDiv.forEach((openDivs)=>{
//           openDivs.classList.toggle("add")
//     })
//     openDiv1.forEach((openDivs1)=>{
//           openDivs1.classList.toggle("add111")
//     })
// plusOpac.forEach((plusOpacs)=>{
//     plusOpacs.classList.toggle("radd")
// })
// plusOpac1.forEach((plusOpacs1)=>{
//     plusOpacs1.classList.toggle("radd")
// })
// h1111.forEach((hs1111)=>[
//   hs1111.classList.toggle("color-click")
// ])
// span1111.forEach((spans1111)=>[
//   spans1111.classList.toggle("translate-click")
// ])
//   })
//   })
//   let backForm=document.querySelector(".back-form")
//   let form=document.querySelector(".form")
//   plusOpac.forEach((plusOpacs)=>{
//     plusOpacs.addEventListener("click",()=>{
//       openDivDiv.forEach((openDivDivs)=>{
// openDivDivs.classList.toggle("add-to-sub")
//       })
//       openDivDivmo.forEach((openDivDivsmo)=>{
// openDivDivsmo.classList.toggle("add-to-sub-mo")
//       })
//       backForm.classList.toggle("add2")
//       form.classList.toggle("add3")
//       zeroNumber.forEach((zeroNumbers)=>{
// zeroNumbers.classList.toggle("block-remove")
// })
// addNumber.forEach((addNumbers)=>{
// addNumbers.classList.toggle("block-add")
// })
// mainRemoveMo.forEach((mainRemovesMo)=>{
// mainRemovesMo.classList.toggle("add-to-main-remove-mo")
// })
//     })
// })

// let pass=document.querySelectorAll("pass")
// pass.forEach((pass1)=>{
//   pass1.addEventListener("click",()=>{

//   })
// })


