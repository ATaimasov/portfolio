
// burger 

export const burger = () => {
    
const burgerButton = document.getElementById('burger-menu');
const burgerList = document.getElementById('header__list');
const socialLinks = document.getElementById('social-links');

burgerButton.addEventListener('click', function(){
    burgerButton.classList.toggle('header__burger--open');
    burgerList.classList.toggle('header__list-burger--open');
    // 'if' for the contacts page
    if (socialLinks) {
        socialLinks.classList.toggle('social-links--visible'); // fpoter adaptive script
    }

    if (burgerButton.classList.contains('header__burger--open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
});


const header = document.getElementById('header');
header.dispatchEvent (new Event('click'));


}

