gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.topS' , {
    x : "60vw"
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
    x : "-60vw"
})
ScrollTrigger.create({
    animation:parallaxRight , 
    trigger : ".scrollContainer",
    start:"top 50%",
    end:"bottom -200vw",
    scrub : 1,

})

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



$('.gallery').imagesLoaded( function() {
    // images have loaded
    var imgbg = document.querySelector('.scaleContainer .imgS');

    imgbg.style.clipPath = `inset( 50px 50px)`;
    
    gsap.from(".scaleContainer img",{
        scrollTrigger:{
            trigger:".scaleContainer",
            start:"top 20%",
            end:"top -38%",
            pin:true,
            scrub:1,
            onUpdate: self => {
                console.log(0.5 - self.progress/2);
                imgbg.style.clipPath = `inset( ${(0.5 - self.progress/2)*100}px ${(0.5 - self.progress/2)*100}px)`;

            }
        },
         scale:0.8,
    })
  });
  



const servSlider = new Swiper('.servSlider', {
   freeMode:true,
   slidesPerView:1.2,
   speed:1000,
   grabCursor:true,
   spaceBetween:36,
  });