
// burger 

const burgerButton = document.getElementById('burger-menu');
const burgerList = document.getElementById('header__list')

burgerButton.addEventListener('click', function(){
    burgerButton.classList.toggle('header__burger--open');
    burgerList.classList.toggle('header__list-burger--open');

});

const header__item = document.querySelectorAll('.header__item');
const header__linkIcon = document.querySelectorAll('.header__link-icon');

if (window.innerHeight < 992) {

    header__item.forEach(item => { 
        item.classList.remove('link--active');
    })

    


    }
    

    header__linkIcon.forEach(item => { 
        item.classList.add('.header__link-icon--active');
    })