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
                
// SEARCH
let searchIcon2 = document.querySelector('.SearchIcon2')
searchIcon2.addEventListener('click',()=>{
  console.log('clicked');
  let input = document.querySelector('input#search2')
  let Val = input.value
  console.log('val',Val);
  var url = `/load-mobile.bc?q=${Val}`;
  $(".loaded").load(url);
  setTimeout(() => {
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
  }, 1000);
}) 
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