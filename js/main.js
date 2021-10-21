// burger
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.body.style.overflow = 'hidden';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.body.style.overflow = '';
    }
});

// popup
const openPopup = document.querySelector(".open_popup");
const closePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

openPopup.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', function (event) {
    popup.classList.remove('active');
    document.body.style.overflow = '';
});

// accordion
document.addEventListener('DOMContentLoaded', () => {

    const closeAccordion = (accordion, contentSelector) => {
        const content = accordion.querySelector(contentSelector);
        accordion.dataset.open = false;
        content.style.maxHeight = '';
    }

    const smothHeight = (accordionSelector, titleSelector, contentSelector) => {
        const accordions = document.querySelectorAll(accordionSelector);

        if (!accordions.length) return;

        accordions.forEach(accordion => {
            const title = accordion.querySelector(titleSelector);
            const content = accordion.querySelector(contentSelector);

            title.addEventListener('click', (event) => {
                if (accordion.dataset.open !== 'true') {
                    accordions.forEach((accordionForClose) => closeAccordion(accordionForClose, contentSelector));
                    accordion.dataset.open = true;
                    content.style.maxHeight = `${content.scrollHeight}px`;
                } else {
                    closeAccordion(accordion, contentSelector);
                }
            });

            const onResize = () => {
                if (accordion.dataset.open === 'true') {
                    if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
                        content.style.maxHeight = `${content.scrollHeight}px`;
                    }
                }
            };

            window.addEventListener('resize', onResize);
        })
    };

    smothHeight('.accordion', '.accordion__title', '.accordion__content');
});


// inputMask
const telInput = document.querySelectorAll('input[type="tel"]');
const telInputMask = new Inputmask('+7 (999) 999-99-99');
telInputMask.mask(telInput);

function validateForms(selector, rules) {
    new window.JustValidate(selector, { rules: rules });
}

validateForms('.popup__form', {name: {required: true}, email : {required: true, email: true}, phone: {required: true}});
// validateForms('.info__form', {name: {required: true}, email : {required: true, email: true}, phone: {required: true}});



const tabsItem = document.querySelectorAll('.tabs__item'),
        contentItem = document.querySelectorAll('.content__item');
tabsItem.forEach(element => {
    element.addEventListener('click', function(){
        console.log(this.getAttribute('data-target'));
        let contentActive = this.getAttribute('data-target');
        
        tabsItem.forEach(elem => elem.classList.remove('tabs__item_active'));
        element.classList.remove('tabs__item_active');

        this.classList.add('tabs__item_active');
        contentItem.forEach(element => {
            element.classList.remove('content__item_active');

        });
        document.querySelector(contentActive).classList.toggle('content__item_active');
});
});


let x = 0;
let slideCount = document.querySelectorAll('.services-item').length;
let el = document.querySelector('.services__items');
el.style.transform = `translateX(${(x = 0)}px)`;

document.querySelector('.services__next').addEventListener('click', function() {
    let el = document.querySelector('.services__items');
    console.log(el.offsetWidth);
    console.log(`translateX(${-el.offsetWidth}px)`);
    if (el.style.transform != `translateX(${-el.offsetWidth/2}px)`) {
        el.style.transform = `translateX(${(x -= 300)}px)`;
    } else {
        el.style.transform = `translateX(${(x = 0)}px)`;
    }
    console.log(el.style.transform);
});

document.querySelector('.services__prev').addEventListener('click', function() {
    let el = document.querySelector('.services__items');
    if (el.style.transform != `translateX(${el.offsetWidth}px)` && el.style.transform != `translateX(0px)`) {
        el.style.transform = `translateX(${(x += 300)}px)`;
    } else {
        el.style.transform = `translateX(${(x = 0)}px)`;
    }
    console.log(el.style.transform);
});

console.log(document.querySelector('.services__items').offsetWidth);

document.querySelector('.header__search i').addEventListener('click', function() {
    document.querySelector('.header__search').classList.toggle('header__search_active');
});