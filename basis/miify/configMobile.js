let OpMenu=document.querySelector("header .toggleBox"),CloseMenu=document.querySelector("header .CloseInner"),MenuC=document.querySelector("header .MenuContainer");gsap.set(".MenuContainer .Menu-link",{y:100,opacity:0}),OpMenu.addEventListener("click",(()=>{MenuC.classList.add("open"),gsap.to(".MenuContainer .Menu-link",{className:"Menu-link fadeUP",duration:1,dulay:.5,stagger:.2})})),CloseMenu.addEventListener("click",(()=>{gsap.to(".MenuContainer .Menu-link",{className:"Menu-link",duration:.5,dulay:.5,stagger:.2}),setTimeout((()=>{MenuC.classList.remove("open")}),1200)}));let searchBTN=document.querySelector(".searchIcon"),closeSearch=document.querySelector(".CloseSerch"),search=document.querySelector(".searchContainer");searchBTN.addEventListener("click",(()=>{search.classList.add("show")})),closeSearch.addEventListener("click",(()=>{search.classList.remove("show")}));