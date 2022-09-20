const hamburguer = document.querySelector('.hamb');
const fecha = document.querySelector('.fecha');
const navContainer = document.querySelector('.header__navegacao__container');
const navLogo = document.querySelector('.header__logo');
const navLista = document.querySelector('.header__navegacao__lista');

hamburguer.addEventListener('click', function() {
    // alert('Opa!')
    navContainer.classList.toggle('invisivel');
    fecha.classList.toggle('invisivel');
    hamburguer.classList.toggle('invisivel');
    navLogo.classList.toggle('active');
    navLista.classList.toggle('active');
})