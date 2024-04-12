const burgerOpen = document.querySelector('#burger__open');
const navMobile = document.querySelector('#nav__mobile');
const headerDesktop = document.querySelector('#header__desktop');
const headerMobile = document.querySelector('#header__mobile');
const header = document.querySelector('#header');
let scrollPos = 0;
console.log('hello');

burgerOpen.addEventListener('click', (e) => {
	navMobile.classList.toggle('active');
});

window.addEventListener('scroll', () => {
	console.log(document.body.getBoundingClientRect().top);
	if (document.body.getBoundingClientRect().top >= -80) {
		header.classList.remove('scroll__up');
		// headerDesktop.classList.remove('scroll__up');
		// headerMobile.classList.remove('scroll__up');
	} else if (document.body.getBoundingClientRect().top > scrollPos) {
		console.log('scrollup');
		header.classList.add('scroll__up');
		// headerDesktop.classList.add('scroll__up');
		// headerMobile.classList.add('scroll__up');
	} else {
		headerDesktop.classList.remove('scroll__up');
		headerMobile.classList.remove('scroll__up');
	}
	scrollPos = document.body.getBoundingClientRect().top;
});
