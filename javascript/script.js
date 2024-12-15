const btn_menu = document.querySelectorAll('.recolhe');
const menu = document.querySelector('.menu');

btn_menu.forEach(button => {
    button.addEventListener('click', function(){
        menu.classList.toggle('menu-active');
    });
});


const btn_caixa = document.querySelector('.caixinha');
const password = document.querySelector('.senha');

btn_caixa.addEventListener('change', function() {
    if (btn_caixa.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});

const btn_login = document.querySelector('.btn_login');

btn_login.addEventListener('click', function() {
    window.location.href = 'pages/home.html';
});


