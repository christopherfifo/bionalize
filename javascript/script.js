const btn_menu = document.querySelectorAll('.recolhe');
const menu = document.querySelector('.menu');

btn_menu.forEach(button => {
    button.addEventListener('click', function(){
        menu.classList.toggle('menu-active');
    });
});