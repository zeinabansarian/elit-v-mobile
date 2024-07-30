let OpMenu = document.querySelector('header .toggleBox')
let CloseMenu = document.querySelector('header .CloseInner')
let MenuC = document.querySelector('header .MenuContainer')
gsap.set('.MenuContainer .Menu-link',{
    y:100,
    opacity:0
})
OpMenu.addEventListener('click',()=>{
    MenuC.classList.add('open')
    gsap.to('.MenuContainer .Menu-link',{
      className:'Menu-link fadeUP',
      duration:1,
      dulay:.5,
      stagger:.2
    })
})
CloseMenu.addEventListener('click',()=>{
    gsap.to('.MenuContainer .Menu-link',{
        className:'Menu-link',
        duration:.5,
        dulay:.5,
        stagger:.2
      })
   setTimeout(()=>{
    MenuC.classList.remove('open')
   },1200)


})
// Images on hover
let MenuItems = document.querySelectorAll('.BG_MenuC .Menu .Menu-link')
let Banner = document.querySelector('.BG img')
MenuItems.forEach(item=>{
    item.addEventListener('mouseenter',(event)=>{
        for(let i =0 ; i< MenuItems.length ; i++){
            MenuItems[i].classList.remove('show')
          let img = item.getAttribute('data-bg')
          Banner.setAttribute('src',img)
            Banner.parentElement.classList.add('showIMG')   
         
        }
        event.currentTarget.classList.toggle('show')
        })
        item.addEventListener('mouseleave',(event)=>{
            for(let i =0 ; i< MenuItems.length ; i++){
                MenuItems[i].classList.remove('show')
              let img = item.getAttribute('data-bg')
              Banner.parentElement.classList.remove('showIMG')
            }
            event.currentTarget.classList.toggle('show')
     })

})


// SEARCH
let searchBTN = document.querySelector('.searchIcon')
let closeSearch = document.querySelector('.CloseSerch')
let search = document.querySelector('.searchContainer')
searchBTN.addEventListener('click',()=>{
  search.classList.add('show')
})
closeSearch.addEventListener('click',()=>{
  search.classList.remove('show')
})
// SEARCH
let searchIcon = document.querySelector('.SearchIcon')
searchIcon.addEventListener('click',()=>{
  console.log('clicked');
  let input = document.querySelector('.inputBox #search')
  let Val = input.value
  console.log('val',Val);
//   var url = `/load.bc?q=${Val}&type=1`;
//   $( ".resultSearch").load( url, function( response, status, xhr ) {
//     // var responseAsObject = $.parseJSON(response);
//     console.log(response);
//     // }
// })
})