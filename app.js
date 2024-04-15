const burgerOpen = document.querySelector('#burger__open');
const navMobile = document.querySelector('#nav__mobile');
const headerDesktop = document.querySelector('#header__desktop');
const headerMobile = document.querySelector('#header__mobile');
const overlayMobile = document.querySelector('#nav_mobile_overlay');
const burgerClose = document.querySelector('#burger__close');
const html = document.querySelector('html');

let scrollPos = 0;

burgerOpen.addEventListener('click', (e) => {
	navMobile.classList.toggle('active');
	html.classList.toggle('noscroll');
	burgerClose.classList.toggle('burger__close--active');
	burgerOpen.classList.toggle('burger__open');
});

burgerClose.addEventListener('click', (e) => {
	navMobile.classList.toggle('active');
	html.classList.toggle('noscroll');
	burgerClose.classList.toggle('burger__close--active');
	burgerOpen.classList.toggle('burger__open');
});

window.addEventListener('scroll', () => {
	if (document.body.getBoundingClientRect().top >= 0) {
		headerDesktop.classList.remove('scroll__up', 'container');
		headerMobile.classList.remove('scroll__up', 'container');
	} else if (document.body.getBoundingClientRect().top >= scrollPos) {
		headerDesktop.classList.add('scroll__up', 'container');
		headerMobile.classList.add('scroll__up', 'container');
	} else {
		headerDesktop.classList.remove('scroll__up', 'container');
		headerMobile.classList.remove('scroll__up', 'container');
	}
	scrollPos = document.body.getBoundingClientRect().top;
});

overlayMobile.addEventListener('click', () => {
	navMobile.classList.toggle('active');
	burgerClose.classList.toggle('burger__close--active');
	burgerOpen.classList.toggle('burger__open');
	html.classList.toggle('noscroll');
});
