
















              















// HOME SWIPER--------------???????????*/

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    loop: 'true' ,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   change backgiornd  header/////////////*

function scrollHeader (){
    const header= document.getElemnetById('header')
    // when the scroll is greater than 50 viewport height add the scroll -header class to the header tag
    if(this.scrollY >=50) header.classlist.add('scroll-header'); else header.classlist.remove('scroll-header')

}

window.addEventListener('scroll',scrollHeader)