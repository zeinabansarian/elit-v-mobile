  // Enable Scroll
  let header1 = document.querySelector('header')
  header1.classList.add('color')
  const lenis = new Lenis()


  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
// HERO SLIDER
let HeroSwiper = new Swiper ('.swiper-banner', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed:5000,
    effect:'fade' ,
    navigation: {
        nextEl: ".BannerSlider .swiper-button-next",
        prevEl: ".BannerSlider .swiper-button-prev",
      },
  })
  gsap.registerPlugin(ScrollTrigger)
let projects = document.querySelectorAll('.Project')
projects.forEach(p=>{
    gsap.to(p,{
     opacity:1,
     y:0,
     scrollTrigger:{
        trigger:p,
        start:"top 80%",
        end:"bottom bottom"
     }
    })
})
