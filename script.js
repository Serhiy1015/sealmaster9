

let dropMenu = document.getElementById('drop-menu-wrap');
let goods = document.getElementById('goods-header');
let triangle = document.getElementById('triangle');
goods.style.cursor = 'pointer';

let isMenuActive = false; // Додайте змінну для відстеження стану меню

function activateMenu() {
    dropMenu.classList.add('drop-active');
    triangle.classList.add('triangle-active');
    isMenuActive = true;
}

function deactivateMenu() {
    dropMenu.classList.remove('drop-active');
    triangle.classList.remove('triangle-active');
    isMenuActive = false;
}

goods.addEventListener('mouseenter', activateMenu);
goods.addEventListener('click', function (event) {
    // Якщо меню не активне, активуйте його, інакше деактивуйте
    if (!isMenuActive) {
        activateMenu();
    } else {
        deactivateMenu();
    }
});

dropMenu.addEventListener('mouseenter', activateMenu);
goods.addEventListener('mouseleave', deactivateMenu);
dropMenu.addEventListener('mouseleave', deactivateMenu);




let burgerMenuIcon = document.getElementById('menu-icon')
let burgerBack = document.getElementById('burger-back')
let closeMenu = document.getElementById('times')
let burgerMenuContent = document.getElementById('header-menu')
const body = document.querySelector('body');


burgerMenuIcon.addEventListener('click', function () {
    burgerBack.style.display = 'block'
    closeMenu.style.display = 'block'
    burgerMenuContent.style.display = 'flex'
    burgerMenuIcon.style.display = 'none'
    body.style.overflow = 'hidden';
})
closeMenu.addEventListener('click', function () {
    burgerBack.style.display = 'none'
    closeMenu.style.display = 'none'
    burgerMenuContent.style.display = 'none'
    burgerMenuIcon.style.display = 'flex'
    body.style.overflow = 'auto';
})


