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

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



$('.gallery').imagesLoaded( function() {
    // images have loaded
    var imgbg = document.querySelector('.scaleContainer .imgS');
    var scrollbarGallery = document.querySelector('.scaleContainer .scrollbarGallery span');
    console.log(scrollbarGallery.style.width);
    imgbg.style.clipPath = `inset( 99px 99px)`;
    
    gsap.from(".scaleContainer img",{
        scrollTrigger:{
            trigger:".scaleContainer",
            start:"top top",
            end:"top -100%",
            pin:true,
            scrub:1,
       
            onUpdate: self => {
                imgbg.style.clipPath = `inset( ${(1 - self.progress)*100}px ${(1 - self.progress)*100}px)`;
                // scrollbarGallery.style.width=`${(self.progress)*100}$`
                scrollbarGallery.style.width=`${(self.progress)*100}%`;
            }
        },
         scale:0.8,
    })
  });
  



const servSlider = new Swiper('.servSlider', {
   freeMode:true,
   slidesPerView:4,
   speed:3000,
   grabCursor:true,
   spaceBetween:36,
  });