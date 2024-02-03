const menu = document.querySelectorAll('.bi-list');
const realMenu = document.getElementById('real-menu');
const close = document.querySelectorAll('.bi-x-lg');
const links = document.querySelectorAll('.links');
const links2 = document.querySelectorAll('.links2');
const newMenu = document.querySelectorAll('.new2');
const webArrow = document.getElementById('web-arrow');
const emailArrow = document.getElementById('email-arrow');
const domainsArrow = document.getElementById('domains-arrow');
const commerceArrow = document.getElementById('commerce-arrow');
const back = document.querySelectorAll('.odd');
const btns = document.querySelectorAll('.btns');
const back2 = document.querySelectorAll('.even');
const steps = document.querySelectorAll('.steps');
const search = document.getElementById('search');
const closer = document.getElementById('closer');
const input = document.getElementById('input');
for (let i = 0; i < menu.length; i++) {
    menu[0].addEventListener('click', () => {
        const menus = document.querySelectorAll('.menu');
        const cross = document.getElementById('cross');
        for (let i = 0; i < menus.length; i++) {
            menus[0].classList.remove('d-none');
            menus[0].style.transition = '1s';
            menus[0].classList.remove('trans');
            menus[0].classList.add('trans2');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                cross.classList.add('filter');
            }, 600);
        }
    });
    menu[1].addEventListener('click', () => {
        const cross2 = document.getElementById('cross2');
        const menus = document.querySelectorAll('.menu');
        for (let i = 0; i < menus.length; i++) {
            menus[1].classList.remove('d-none');
            menus[1].style.transition = '1s';
            menus[1].classList.remove('trans');
            menus[1].classList.add('trans2');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                cross2.classList.add('filter');
            }, 600);
        }
    });
}
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', () => {
        const menus = document.querySelectorAll('.menu');
        const cross = document.getElementById('cross');
        const cross2 = document.getElementById('cross2');
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('trans');
            menus[i].classList.remove('trans2');
            setTimeout(() => {
                menus[i].classList.add('d-none');
            }, 800);
        }
        cross.classList.remove('filter');
        cross2.classList.remove('filter');
        document.body.style.overflow = 'auto';
    });
}
for (let i = 0; i < links.length; i++) {
    const ani = document.querySelectorAll('.scroll');
    const newMenu = document.querySelectorAll('.new');
    links[0].addEventListener('click', () => {
        const cross = document.getElementById('cross');
        newMenu[0].classList.remove('d-none');
        newMenu[1].classList.add('d-none');
        newMenu[2].classList.add('d-none');
        newMenu[3].classList.add('d-none');
        domainsArrow.classList.add('d-none');
        webArrow.classList.remove('d-none');
        commerceArrow.classList.remove('d-none');
        emailArrow.classList.remove('d-none');
        for (let i = 0; i < ani.length; i++) {
            ani[i].classList.add('ani');
        }
        cross.classList.remove('cross');
        cross.classList.add('cross2');
    });
    links[1].addEventListener('click', () => {
        const cross = document.getElementById('cross');
        newMenu[0].classList.add('d-none');
        newMenu[1].classList.remove('d-none');
        newMenu[2].classList.add('d-none');
        newMenu[3].classList.add('d-none');
        domainsArrow.classList.remove('d-none');
        webArrow.classList.add('d-none');
        commerceArrow.classList.remove('d-none');
        emailArrow.classList.remove('d-none');
        for (let i = 0; i < ani.length; i++) {
            ani[i].classList.add('ani');
        }
        cross.classList.remove('cross');
        cross.classList.add('cross2');
    });
    links[2].addEventListener('click', () => {
        const cross = document.getElementById('cross');
        newMenu[0].classList.add('d-none');
        newMenu[1].classList.add('d-none');
        newMenu[2].classList.remove('d-none');
        newMenu[3].classList.add('d-none');
        domainsArrow.classList.remove('d-none');
        webArrow.classList.remove('d-none');
        commerceArrow.classList.add('d-none');
        emailArrow.classList.remove('d-none');
        for (let i = 0; i < ani.length; i++) {
            ani[i].classList.add('ani');
        }
        cross.classList.remove('cross');
        cross.classList.add('cross2');
    });
    links[3].addEventListener('click', () => {
        const cross = document.getElementById('cross');
        newMenu[0].classList.add('d-none');
        newMenu[1].classList.add('d-none');
        newMenu[2].classList.add('d-none');
        newMenu[3].classList.remove('d-none');
        domainsArrow.classList.remove('d-none');
        webArrow.classList.remove('d-none');
        commerceArrow.classList.remove('d-none');
        emailArrow.classList.add('d-none');
        for (let i = 0; i < ani.length; i++) {
            ani[i].classList.add('ani');
        }
        cross.classList.remove('cross');
        cross.classList.add('cross2');
    });
}
links2[0].addEventListener('click', () => {
    const ani = document.querySelectorAll('.scroll2');
    const hide = document.getElementById('hide');
    hide.classList.add('d-none');
    newMenu[0].classList.remove('d-none');
    newMenu[1].classList.add('d-none');
    newMenu[2].classList.add('d-none');
    newMenu[3].classList.add('d-none');
    for (let i = 0; i < ani.length; i++) {
        ani[i].classList.add('ani');
    }
});
links2[1].addEventListener('click', () => {
    const ani = document.querySelectorAll('.scroll2');
    const hide = document.getElementById('hide');
    hide.classList.add('d-none');
    newMenu[0].classList.add('d-none');
    newMenu[1].classList.remove('d-none');
    newMenu[2].classList.add('d-none');
    newMenu[3].classList.add('d-none');
    for (let i = 0; i < ani.length; i++) {
        ani[i].classList.add('ani');
    }
});
links2[2].addEventListener('click', () => {
    const ani = document.querySelectorAll('.scroll2');
    const hide = document.getElementById('hide');
    hide.classList.add('d-none');
    newMenu[0].classList.add('d-none');
    newMenu[1].classList.add('d-none');
    newMenu[2].classList.remove('d-none');
    newMenu[3].classList.add('d-none');
    for (let i = 0; i < ani.length; i++) {
        ani[i].classList.add('ani');
    }
});
links2[3].addEventListener('click', () => {
    const ani = document.querySelectorAll('.scroll2');
    const hide = document.getElementById('hide');
    hide.classList.add('d-none');
    newMenu[0].classList.add('d-none');
    newMenu[1].classList.add('d-none');
    newMenu[2].classList.add('d-none');
    newMenu[3].classList.remove('d-none');
    for (let i = 0; i < ani.length; i++) {
        ani[i].classList.add('ani');
    }
});
for (let i = 0; i < back.length; i++) {
    back[i].addEventListener('click', () => {
        const cross = document.getElementById('cross');
        const ani = document.querySelectorAll('.scroll');
        const newMenu = document.querySelectorAll('.new');
        for (let i = 0; i < ani.length; i++) {
            ani[i].classList.remove('ani');
        }
        for (let i = 0; i < newMenu.length; i++) {
            newMenu[i].classList.add('d-none');
        }
        domainsArrow.classList.remove('d-none');
        webArrow.classList.remove('d-none');
        commerceArrow.classList.remove('d-none');
        emailArrow.classList.remove('d-none');
        cross.classList.add('cross');
        cross.classList.remove('cross2');
    });
}
for (let i = 0; i < back2.length; i++) {
    back2[i].addEventListener('click', () => {
        const hide = document.getElementById('hide');
        const ani = document.querySelectorAll('.scroll2');
        const newMenu = document.querySelectorAll('.new2');
        for (let i = 0; i < ani.length; i++) {
            ani[i].classList.remove('ani');
        }
        for (let i = 0; i < newMenu.length; i++) {
            newMenu[i].classList.add('d-none');
        }
        hide.classList.remove('d-none');
    });
}
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
btns[0].addEventListener('click', () => {
    const handle = document.getElementById('handle');
    handle.innerHTML = `<a href="#" class="coffee shadow-div text-decoration-none text-black d-flex align-items-end">
    <p class="fs-4 fw-bolder ms-2">Domains</p>
</a>
<div class="d-flex justify-content-between mt-1">
    <a href="#"
        class="down-to shadow-div text-black text-decoration-none d-flex flex-column align-items-start justify-content-end">
        <p class="bg-text mx-2">BUILT-IN AI & MARKETING TOOLS</p>
        <p class="fs-4 ms-2">Websites</p>
    </a>
    <a href="#" class="down-to shadow-div text-decoration-none text-black d-flex align-items-end">
        <p class="fs-4 ms-2">Email & Microsoft 365</p>
    </a>
</div>`;
    btns[0].classList.add('re-btn');
    btns[0].classList.remove('re-btn2');
    btns[1].classList.add('re-btn2');
    btns[2].classList.add('re-btn2');
    btns[3].classList.add('re-btn2');
});
btns[1].addEventListener('click', () => {
    const handle = document.getElementById('handle');
    handle.innerHTML = `<a href="#" class="web shadow-div text-decoration-none text-black d-flex flex-column align-items-start justify-content-end">
    <p class="bg-text mx-2">NO TECH SKILLS NEEDED</p>
    <p class="fs-4 fw-bolder ms-2">Websites</p>
</a>
<div class="d-flex justify-content-between mt-1">
    <a href="#"
        class="down-to shadow-div text-black text-decoration-none d-flex align-items-end">
        <p class="fs-4 ms-2">WordPress</p>
    </a>
    <a href="#" class="down-to shadow-div text-decoration-none text-black d-flex align-items-end">
        <p class="fs-4 ms-2">Web Design Services</p>
    </a>
</div>`;
    btns[0].classList.add('re-btn2');
    btns[1].classList.add('re-btn');
    btns[1].classList.remove('re-btn2');
    btns[2].classList.add('re-btn2');
    btns[3].classList.add('re-btn2');
});
btns[2].addEventListener('click', () => {
    const handle = document.getElementById('handle');
    handle.innerHTML = `<a href="#" class="security shadow-div text-decoration-none text-black d-flex flex-column align-items-start justify-content-end">
    <p class="bg-text mx-2">ALL-IN-ONE</p>
    <p class="fs-4 fw-bolder ms-2">SSL Security</p>
</a>
<div class="d-flex justify-content-between mt-1">
    <a href="#"
        class="down-to shadow-div text-black text-decoration-none d-flex align-items-end">
        <p class="fs-4 ms-2">Web Hosting</p>
    </a>
    <a href="#" class="down-to shadow-div text-decoration-none text-black d-flex align-items-end">
        <p class="fs-4 ms-2">WordPress</p>
    </a>
</div>`;
    btns[0].classList.add('re-btn2');
    btns[1].classList.add('re-btn2');
    btns[2].classList.add('re-btn');
    btns[2].classList.remove('re-btn2');
    btns[3].classList.add('re-btn2');
});
btns[3].addEventListener('click', () => {
    const handle = document.getElementById('handle');
    handle.innerHTML = `<a href="#" class="sell my-1 shadow-div text-decoration-none text-black d-flex flex-column align-items-start justify-content-end">
    <p class="bg-text mx-2">LOWEST FEES</p>
    <p class="fs-4 fw-bolder ms-2">Online Store</p>
</a>
<a href="#"
    class="wordpress my-1 shadow-div text-black text-decoration-none d-flex align-items-end">
    <p class="fs-4 fw-bolder ms-2">Managed WooCommerce Stores</p>
</a>`;
    btns[0].classList.add('re-btn2');
    btns[1].classList.add('re-btn2');
    btns[2].classList.add('re-btn2');
    btns[3].classList.add('re-btn');
    btns[3].classList.remove('re-btn2');
});
steps[0].addEventListener('mouseover', () => {
    const img = document.querySelectorAll('.img');
    img[0].classList.remove('d-none');
    img[0].classList.add('hello');
    img[1].classList.add('d-none');
    img[2].classList.add('d-none');
});
steps[1].addEventListener('mouseover', () => {
    const img = document.querySelectorAll('.img');
    img[0].classList.add('d-none');
    img[1].classList.remove('d-none');
    img[1].classList.add('hello');
    img[2].classList.add('d-none');
});
steps[2].addEventListener('mouseover', () => {
    const img = document.querySelectorAll('.img');
    img[0].classList.add('d-none');
    img[1].classList.add('d-none');
    img[2].classList.remove('d-none');
    img[2].classList.add('hello');
});