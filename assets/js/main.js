const menu = document.getElementById('menu');
const smMenu = document.getElementById('sm-menu');
const realMenu = document.getElementById('real-menu');
const cross = document.getElementById('cross');
const cross2 = document.getElementById('cross2');
const close = document.getElementById('close');
const close2 = document.getElementById('close2');
const domains = document.getElementById('domains');
const domains2 = document.getElementById('domains2');
const website = document.getElementById('website');
const website2 = document.getElementById('website2');
const commerce = document.getElementById('commerce');
const commerce2 = document.getElementById('commerce2');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const webArrow = document.getElementById('web-arrow');
const emailArrow = document.getElementById('email-arrow');
const hide = document.getElementById('hide');
const domainsArrow = document.getElementById('domains-arrow');
const commerceArrow = document.getElementById('commerce-arrow');
const newMenu = document.getElementById('new');
const newMenu2 = document.getElementById('new2');
const newMenu3 = document.getElementById('new3');
const newMenu4 = document.getElementById('new4');
const newMenu5 = document.getElementById('new5');
const newMenu6 = document.getElementById('new6');
const newMenu7 = document.getElementById('new7');
const newMenu8 = document.getElementById('new8');
const back = document.getElementById('return');
const back2 = document.getElementById('return2');
const back3 = document.getElementById('return3');
const back4 = document.getElementById('return4');
const back5 = document.getElementById('return5');
const back6 = document.getElementById('return6');
const back7 = document.getElementById('return7');
const back8 = document.getElementById('return8');
const ani = document.getElementById('ani');
const ani2 = document.getElementById('ani2');
const ani3 = document.getElementById('ani3');
const ani4 = document.getElementById('ani4');
const ani5 = document.getElementById('ani5');
const ani6 = document.getElementById('ani6');
const ani7 = document.getElementById('ani7');
const ani8 = document.getElementById('ani8');
const search = document.getElementById('search');
const closer = document.getElementById('closer');
const input = document.getElementById('input');
menu.addEventListener('click', () => {
    input
    const menu2 = document.getElementById('menu2');
    menu2.classList.remove('d-none');
    menu2.style.transition = '1s';
    menu2.classList.remove('trans');
    menu2.classList.add('trans2');
    setTimeout(() => {
        cross.classList.add('filter');
    }, 600);
    document.body.style.overflow = 'hidden';
});
smMenu.addEventListener('click', () => {
    const menu3 = document.getElementById('menu3');
    menu3.classList.remove('d-none');
    menu3.style.transition = '1s';
    menu3.classList.remove('trans');
    menu3.classList.add('trans2');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        cross2.classList.add('filter');
    }, 600);
});
close.addEventListener('click', () => {
    const menu2 = document.getElementById('menu2');
    menu2.classList.add('trans');
    menu2.classList.remove('trans2');
    cross.classList.remove('filter');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        menu2.classList.add('d-none');
    }, 800);
});
close2.addEventListener('click', () => {
    const menu3 = document.getElementById('menu3');
    menu3.classList.add('trans');
    menu3.classList.remove('trans2');
    cross2.classList.remove('filter');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        menu3.classList.add('d-none');
    }, 800);
});
domains.addEventListener('click', () => {
    const ani = document.getElementById('ani');
    domainsArrow.classList.add('d-none');
    cross.classList.remove('cross');
    cross.classList.add('cross2');
    newMenu3.classList.add('d-none');
    newMenu.classList.remove('d-none');
    newMenu5.classList.add('d-none');
    newMenu7.classList.add('d-none');
    ani.classList.add('ani');
    ani.classList.add('ani2');
    webArrow.classList.remove('d-none');
    commerceArrow.classList.remove('d-none');
    emailArrow.classList.remove('d-none');
});
domains2.addEventListener('click', () => {
    hide.classList.add('d-none');
    newMenu2.classList.remove('d-none');
    ani2.classList.add('ani');
    ani2.classList.add('ani2');
});
back.addEventListener('click', () => {
    const ani = document.getElementById('ani');
    domainsArrow.classList.remove('d-none');
    cross.classList.add('cross');
    cross.classList.remove('cross2');
    newMenu.classList.add('d-none');
    ani.classList.remove('ani');
});
back2.addEventListener('click', () => {
    hide.classList.remove('d-none');
    newMenu2.classList.add('d-none');
    ani2.classList.remove('ani');
});
website.addEventListener('click', () => {
    webArrow.classList.add('d-none');
    cross.classList.remove('cross');
    domainsArrow.classList.remove('d-none');
    commerceArrow.classList.remove('d-none');
    cross.classList.add('cross2');
    newMenu7.classList.add('d-none');
    newMenu3.classList.remove('d-none');
    newMenu5.classList.add('d-none');
    newMenu.classList.add('d-none');
    ani3.classList.add('ani');
    ani3.classList.add('ani2');
    emailArrow.classList.remove('d-none');
});
website2.addEventListener('click', () => {
    hide.classList.add('d-none');
    newMenu4.classList.remove('d-none');
    ani4.classList.add('ani');
    ani4.classList.add('ani2');
});
back4.addEventListener('click', () => {
    hide.classList.remove('d-none');
    newMenu4.classList.add('d-none');
    ani4.classList.remove('ani');
});
back3.addEventListener('click', () => {
    webArrow.classList.remove('d-none');
    cross.classList.add('cross');
    cross.classList.remove('cross2');
    newMenu3.classList.add('d-none');
    ani3.classList.remove('ani');
});
commerce.addEventListener('click', () => {
    commerceArrow.classList.add('d-none');
    cross.classList.remove('cross');
    domainsArrow.classList.remove('d-none');
    cross.classList.add('cross2');
    newMenu5.classList.remove('d-none');
    newMenu7.classList.add('d-none');
    newMenu.classList.add('d-none');
    newMenu3.classList.add('d-none');
    ani5.classList.add('ani');
    ani5.classList.add('ani2');
    webArrow.classList.remove('d-none');
    emailArrow.classList.remove('d-none');
});
back5.addEventListener('click', () => {
    commerceArrow.classList.remove('d-none');
    cross.classList.add('cross');
    cross.classList.remove('cross2');
    newMenu5.classList.add('d-none');
    ani5.classList.remove('ani');
});
commerce2.addEventListener('click', () => {
    hide.classList.add('d-none');
    newMenu6.classList.remove('d-none');
    ani6.classList.add('ani');
    ani6.classList.add('ani2');
});
back6.addEventListener('click', () => {
    hide.classList.remove('d-none');
    newMenu6.classList.add('d-none');
    ani6.classList.remove('ani');
});
email.addEventListener('click', () => {
    emailArrow.classList.add('d-none');
    commerceArrow.classList.remove('d-none');
    cross.classList.remove('cross');
    domainsArrow.classList.remove('d-none');
    cross.classList.add('cross2');
    newMenu7.classList.remove('d-none');
    newMenu.classList.add('d-none');
    newMenu3.classList.add('d-none');
    newMenu5.classList.add('d-none');
    ani7.classList.add('ani');
    ani7.classList.add('ani2');
    webArrow.classList.remove('d-none');
});
back7.addEventListener('click', () => {
    emailArrow.classList.remove('d-none');
    cross.classList.add('cross');
    cross.classList.remove('cross2');
    newMenu7.classList.add('d-none');
    ani7.classList.remove('ani');
});
email2.addEventListener('click', () => {
    hide.classList.add('d-none');
    newMenu8.classList.remove('d-none');
    ani8.classList.add('ani');
    ani8.classList.add('ani2');
});
back8.addEventListener('click', () => {
    hide.classList.remove('d-none');
    newMenu8.classList.add('d-none');
    ani8.classList.remove('ani');
});
search.addEventListener('click', () => {
    const upper = document.getElementById('upper');
    const down = document.getElementById('down');
    upper.classList.remove('d-none');
    upper.style.transition = '1s';
    upper.classList.remove('trans3');
    upper.classList.add('trans4');
    setTimeout(() => {
        down.classList.add('filter');
    }, 600);
    document.body.style.overflow = 'hidden';
})
closer.addEventListener('click', () => {
    const upper = document.getElementById('upper');
    const down = document.getElementById('down');
    upper.classList.add('trans3');
    upper.classList.remove('trans4');
    down.classList.remove('filter');
    input.value = '';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    setTimeout(() => {
        upper.classList.add('d-none');
    }, 800);
});
input.addEventListener('input', () => {
    const searchBtn = document.getElementById('search-btn');
    if (input.value === '') {
        searchBtn.classList.add('search-btn');
        searchBtn.classList.remove('search-btn2');
    } else {
        searchBtn.classList.remove('search-btn');
        searchBtn.classList.add('search-btn2');
    }

});