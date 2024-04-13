const burgerOpen = document.querySelector('#burger__open');
const navMobile = document.querySelector('#nav__mobile');
const headerDesktop = document.querySelector('#header__desktop');
const headerMobile = document.querySelector('#header__mobile');
const overlayMobile = document.querySelector('#nav_mobile_overlay');
const html = document.querySelector('html')

let scrollPos = 0;

burgerOpen.addEventListener('click', (e) => {
	navMobile.classList.toggle('active');
	html.classList.toggle('noscroll')
});

window.addEventListener('scroll', () => {
	console.log(document.body.getBoundingClientRect().top);
	if (document.body.getBoundingClientRect().top >= -80) {
		headerDesktop.classList.remove('scroll__up');
		headerMobile.classList.remove('scroll__up');
	} else if (document.body.getBoundingClientRect().top >= scrollPos) {
		console.log('scrollup');
		headerDesktop.classList.add('scroll__up');
		headerMobile.classList.add('scroll__up');
	} else {
		headerDesktop.classList.remove('scroll__up');
		headerMobile.classList.remove('scroll__up');
	}
	scrollPos = document.body.getBoundingClientRect().top;
});

overlayMobile.addEventListener('click', () => {
	navMobile.classList.toggle('active');
});
