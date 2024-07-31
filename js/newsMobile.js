let header1 = document.querySelector('header')
header1.classList.add('color')
let swiperNews = new Swiper(".swiper-news", {
    slidesPerView:1,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".Related-news .swiper-button-next",
        prevEl: ".Related-news .swiper-button-prev",
      },
  }); 
  
  let swiperProject= new Swiper(".swiper-project", {
    loop: true,
    speed: 1000,
    centeredSlides:true,
    slidesPerView:1.4,
    spaceBetween: 30,
    initialSlides:3,
     navigation: {
        nextEl: ".Related-projects .swiper-button-next",
        prevEl: ".Related-projects .swiper-button-prev",
      },
  });  
               
  const lenis = new Lenis()


  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
                                       