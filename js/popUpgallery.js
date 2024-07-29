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
let thumbBox = document.querySelectorAll(".thumbBox")
const popSlider = new Swiper('.popSlider', {
    // Optional parameters

    loop: true,
  
 
  });


  popSlider.on('slideChange', function () {
    let imgs = document.querySelectorAll(".popSlider img")
    imgs.forEach(element => {
        element.style.scale="1";
        element.style.rotate="0";
         zoomMin =0.5;
         zoomMax =1.7;
         currZoom = 1;
         curRotate = 0;
    });
  });
openGallery.forEach(element => {
    element.addEventListener("click" , function (params) {
        if (galleryFlag) {
            
            popUpGalleryContainer.classList.add("popOpen")
            galleryFlag=!galleryFlag
        }
        
    })
});

closePop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
    }
})


zoomIn.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".swiper-slide-active img");
    console.log("zoomin");
    if (currZoom<zoomMax) {
        currZoom+=0.1
        currImg.style.scale = currZoom
    }
})
zoomOut.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".swiper-slide-active img");
    console.log("zoomout");
    if (currZoom>zoomMin) {
        currZoom-=0.1;
        currImg.style.scale = currZoom
    }
})
rotateLeft.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".swiper-slide-active img");
    curRotate+=90
    currImg.style.rotate = `${-curRotate}deg`
})
rotateRight.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".swiper-slide-active img");
    curRotate+=90
    currImg.style.rotate = `${curRotate}deg`
})

for (let i = 0; i < thumbBox.length; i++) {
    const element = thumbBox[i];
  
        element.addEventListener("click" ,function (params) {
            if (sGalleryFlag) {
                popSlider.slideTo(i+1,0)
                sGallery.classList.add("popOpen")
                sGalleryFlag=!sGalleryFlag

                console.log("i", i);
                console.log("popactive",popSlider.activeIndex);

                popUpGalleryContainer.scrollTo(0,0)
                popUpGalleryContainer.style.overflow="hidden"
            }
        } )
        
    }
    closeSlider.addEventListener("click",function(params) {
        sGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpGalleryContainer.style.overflow="auto"
    })