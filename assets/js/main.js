const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const realMenu = document.getElementById('real-menu');
const cross = document.getElementById('cross');
const close = document.getElementById('close');
menu.addEventListener('click', () => {
    menu2.classList.remove('d-none');
    menu2.style.transition = '1s';
    menu2.classList.remove('trans');
    menu2.classList.add('trans2');
    setTimeout(() => {
        cross.classList.add('filter');
    }, 600);
    document.body.style.overflow = 'hidden';
});
close.addEventListener('click', () => {
    menu2.classList.add('trans');
    menu2.classList.remove('trans2');
    cross.classList.remove('filter');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        menu2.classList.add('d-none');
    }, 800);
});