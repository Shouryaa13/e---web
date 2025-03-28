// Show Menu =======================//
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// ==============MENU SHOW ==========//
// *Validate if constant exists*

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    });
}

// ==============MENU CLOSE ==========//
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
    });
}

// =================== Show Cart ================//
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close');

// Add event listener to open cart
if (cartShop) {
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart');
    });
}

// Add event listener to close cart
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart');
    });
}

// =================== Login Show/Close ================//
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const loginModal = document.getElementById('login');
    const loginClose = document.getElementById('login-close');
    
    // Toggle login modal on click
    loginButton.addEventListener('click', () => {
        loginModal.classList.add('active');
    });

    // Close login modal
    loginClose.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });
});

// =================== Scroll Change Header Background ================//
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// =================== Home Swiper Initialization ================//
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// =================== New Swiper Initialization ================//
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
});

// =================== Scroll Up ================//
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// =================== Fixing typos and formatting issues ================//
// Corrected typo in 'scrollHeader' function call
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);



const accordionItem = document.querySelectorAll('.question__item')


accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.question__header')

    accordionHeader.addEventListener ('click',() =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add ('accordion-open')
}