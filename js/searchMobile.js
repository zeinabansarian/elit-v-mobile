let header = document.querySelector('header')
header.classList.add('color')
let swiperNews = new Swiper(".swiper-news", {
    slidesPerView:1,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".news .swiper-button-next",
        prevEl: ".news .swiper-button-prev",
      },
  }); 
  
  let swiperblog = new Swiper(".swiper-blog", {
    slidesPerView:1,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".Blogs .swiper-button-next",
        prevEl: ".Blogs .swiper-button-prev",
      },
  }); 
  
  let swiperProject= new Swiper(".swiper-project", {
    slidesPerView:1.5,
    spaceBetween: 40

  }); 
    // Enable Scroll

    const lenis = new Lenis()


    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)