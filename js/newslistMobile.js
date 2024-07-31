let header = document.querySelector('header')
header.classList.add('color')
   // Enable Scroll

   const lenis = new Lenis()


   function raf(time) {
   lenis.raf(time)
   requestAnimationFrame(raf)
   }
   
   requestAnimationFrame(raf)
                         