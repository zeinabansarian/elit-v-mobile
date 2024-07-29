const slider1 = new Swiper('.slider1', {
    disableOnInteraction:false,
    loop: true,
    pauseOnMouseEnter:false,
    effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed : 1000,
  autoplay: {
    delay: 3000,
  },
  });
  
  $('.Home').imagesLoaded( function() {
    $(".slider1 img").css("scale" , "1")
  });
  
  gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.topS' , {
    x : "30vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".scrollContainer",
    start:"top 50%",
    end:"bottom -200vw",
    scrub : 1,

})
let parallaxRight = gsap.timeline();
parallaxRight.to('.btmS' , {
    x : "-30vw"
})
ScrollTrigger.create({
    animation:parallaxRight , 
    trigger : ".scrollContainer",
    start:"top 50%",
    end:"bottom -200vw",
    scrub : 1,

})
