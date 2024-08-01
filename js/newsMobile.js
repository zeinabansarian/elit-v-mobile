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
    slidesPerView:1.2,
    spaceBetween: 10,
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
   
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("header").addClass("activeHeader");
      } else {
         $("header").removeClass("activeHeader");
      }
  });
});
let headerr = document.querySelector('header')

var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
 var st = window.pageYOffset || document.documentElement.scrollTop; 
 if (st > lastScrollTop) {
  console.log("over");
  headerr.classList.remove('color')
  $("header").addClass("goDown");
  $("header").removeClass("goTop");
  
} else if (st < lastScrollTop) {
  // upscroll code

  headerr.classList.add('color')
  $("header").addClass("goTop");
  $("header").removeClass("goDown");
      console.log("less");
 } 
 lastScrollTop = st <= 0 ? 0 : st;
}, false);

// DESKTOP
function switchScroll() {
  if (flag != true){
    enable_scroll();
  } else {
    disable_scroll();
  }
}
  function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
}
function keydown(e) {
  var keys = [32,33,34,35,36,37,38,39,40];
  for (var i = keys.length; i--;) {
    if (e.keyCode === keys[i]) {
      preventDefault(e);
      return;
    }
  }
}
function wheel(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}
function disable_scroll() {
  if (document.addEventListener) {
    document.addEventListener('wheel', wheel, false);
    document.addEventListener('mousewheel', wheel, false);
    document.addEventListener('DOMMouseScroll', wheel, false);
  }
  else {
    document.attachEvent('onmousewheel', wheel);
  }
  document.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
  
  x = window.pageXOffset || document.documentElement.scrollLeft,
  y = window.pageYOffset || document.documentElement.scrollTop,
  window.onscroll = function() {
    window.scrollTo(x, y);
  };
  // document.body.style.overflow = 'hidden'; // CSS
  disable_scroll_mobile();
}
function enable_scroll() {
  if (document.removeEventListener) {
    document.removeEventListener('wheel', wheel, false);
    document.removeEventListener('mousewheel', wheel, false);
    document.removeEventListener('DOMMouseScroll', wheel, false);
  }
  document.onmousewheel = document.onmousewheel = document.onkeydown = null;
  window.onscroll = function() {};
  // document.body.style.overflow = 'auto'; // CSS
  enable_scroll_mobile();
}

// MOBILE
function disable_scroll_mobile(){
  document.addEventListener('touchmove', preventDefault, false);
}
function enable_scroll_mobile(){
  document.removeEventListener('touchmove', preventDefault, false);
}                                                     