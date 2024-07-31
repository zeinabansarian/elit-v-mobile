  // Enable Scroll

  const lenis = new Lenis()


  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
let SwiperGalley = new Swiper('.swiper-gallery',{
    centeredSlides:true,
    slidesPerView:1.8,
    loop: true,
    loopedSlides: 3,
    spaceBetween: 30,
    grabCursor: true,
    speed:1000,
    effect:'slide' ,
    navigation: {
        nextEl: ".Gallery-Container .swiper-button-next",
        prevEl: ".Gallery-Container .swiper-button-prev",
      },

})
let swiperProject= new Swiper(".swiper-project", {
    slidesPerView:1.2,
    spaceBetween: 20
    ,  navigation: {
        nextEl: ".Related-projects .swiper-button-next",
        prevEl: ".Related-projects .swiper-button-prev",
      },
  });  

  // POPUP GALLERY
  let closePop = document.querySelector(".closePop")
  let popUpGalleryContainer = document.querySelector(".popUpGalleryContainer")
  let openGallery = document.querySelectorAll(".openGallery")
  let zoomIn = document.querySelector(".zoomIn")
  let rotateRight = document.querySelector(".rotateRight")
  let rotateLeft = document.querySelector(".rotateLeft")
  let zoomOut = document.querySelector(".zoomOut")
  let sGallery = document.querySelector(".sGallery")
  let closeSlider = document.querySelector(".closeSlider")
  let galleryFlag=true;
  let zoomMin =0.5;
  let zoomMax =1.7;
  let currZoom = 1;
  let curRotate = 0;
  let sGalleryFlag = true;
  let thumbBox = document.querySelectorAll(".Gallery-Container .swiper-gallery .swiper-slide")
  let thumbBox1 = document.querySelectorAll(".thumbBox")
  
  closePop.addEventListener("click",function (params) {
                      popUpGalleryContainer.classList.remove("popOpen")
                      galleryFlag=!galleryFlag
  })
  
  
  zoomIn.addEventListener("click" , function (params) {
      let currImg = document.querySelector(".innerIMG");
      console.log("zoomin");
      if (currZoom<zoomMax) {
          currZoom+=0.1
          currImg.style.scale = currZoom
      }
  })
  zoomOut.addEventListener("click" , function (params) {
      let currImg = document.querySelector(".innerIMG");
      console.log("zoomout");
      if (currZoom>zoomMin) {
          currZoom-=0.1;
          currImg.style.scale = currZoom
      }
  })
  rotateLeft.addEventListener("click" , function (params) {
      let currImg = document.querySelector(".innerIMG");
      curRotate+=90
      currImg.style.rotate = `${-curRotate}deg`
  })
  rotateRight.addEventListener("click" , function (params) {
      let currImg = document.querySelector(".innerIMG");
      curRotate+=90
      currImg.style.rotate = `${curRotate}deg`
  })
  for (let i = 0; i < thumbBox.length; i++) {
      const element = thumbBox[i];
      element.setAttribute('data-index',i)
      element.querySelector('.openGallery').addEventListener("click" ,function (args) {
              if (sGalleryFlag) {
                  let imgG = document.querySelector('.innerIMG')
                  let imgSRC =  args.currentTarget.parentElement.parentElement.querySelector('img').getAttribute('src')
                  let index = args.currentTarget.parentElement.parentElement.getAttribute('data-index')
                  console.log(index,imgSRC);
                  imgG.setAttribute('src',imgSRC)
                  popUpGalleryContainer.classList.add("popOpen")
                  sGallery.classList.add("popOpen")
                  sGalleryFlag=!sGalleryFlag
                  galleryFlag =!sGalleryFlag
                  popUpGalleryContainer.style.overflow="hidden"
              }
          } )
          
      }
      for (let j = 0; j < thumbBox1.length; j++) {
      const element = thumbBox1[j];
      element.setAttribute('data-index',j)
          element.addEventListener("click" ,function (args) {
              if (sGalleryFlag) {
                popUpGalleryContainer.scrollTo(0,0)
                  let imgG = document.querySelector('.innerIMG')
                  let imgSRC =  args.currentTarget.querySelector('img').getAttribute('src')
                  let index = args.currentTarget.getAttribute('data-index')
                  console.log(args.currentTarget);
                  imgG.setAttribute('src',imgSRC)
                  sGallery.classList.add("popOpen")
                  sGalleryFlag=!sGalleryFlag
  
                  console.log("j", j);
                  popUpGalleryContainer.style.overflow="hidden"
              }
          } )
          
      }
      closeSlider.addEventListener("click",function(params) {
          sGallery.classList.remove("popOpen")
          sGalleryFlag=!sGalleryFlag
          popUpGalleryContainer.style.overflow="auto"
      })