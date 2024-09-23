// show menu================*//
const navMenu = document.getElementById('nav-menu'),
              navToggle = document.getElementById('nav-toggle'),
              navClose8 = document.getElementById('nav-close')


// ==============MENU SHOW************-------/
// *validate if constante exists ==========/*

if(navToggle) {
    navToggle.addEventListener("click",() => {
        navMenu.classList.add ('show-menu')
    })
}




// =================show chat============//

const cart = document.getElementById('cart'),
              cartShop = document.getElementById('cart-shop'),
              cartClose = document.getElementById('cart-close');

        // Add event listener to open cart
        cartShop.addEventListener('click', () => {
            cart.classList.add('show-cart');
        });

        // Add event listener to close cart
        cartClose.addEventListener('click', () => {
            cart.classList.remove('show-cart');
        });

        // Home Swiper Initialization
        var homeSwiper = new Swiper(".home-swiper", {
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // Scroll change header background
        function scrollHeader() {
            const header = document.getElementById('header');
            if (window.scrollY >= 50) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }
        window.addEventListener('scroll', scrollHeader);

// ================login '''''''''==============/

const login = document.getElementById('login'),
              loginbutton = document.getElementById('login-button'),
              loginClose = document.getElementById('login-close');

        // Add event listener to open cart
        if(loginbutton)
        loginbutton.addEventListener('click', () => {
            login.classList.add('show-login');
        });

        // Add event listener to close cart
        if(loginClose) {
        loginClose.addEventListener('click', () => {
            login.classList.remove('show-login');
        });
    } 

        // Scroll change header background
        function scrollHeader() {
            const header = document.getElementById('header');
            if (window.scrollY >= 50) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }
        window.addEventListener('scroll', scrollHeader);



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


// NEW SWIPER????????//*

// var newSwiper = new Swiper(".ne w-swiper", {
//   spaceBetween:16,
//   centeredSlides:true,
//   slidesPerview:"auto",
//   loop: 'true' ,
// });



// ===============scroll up============
function scrollup() {
    const scrollup = document.getElementById('scroll-up');
    if (this.scrollY>= 350) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollup)