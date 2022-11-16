const burgerBtn = document.querySelector('.nav-mobile__burger');
const burgerBtnElements = document.querySelectorAll('.nav-mobile__burger-item');
const navMobileMenu = document.querySelector('.nav-mobile__menu');
const navMobileMenuLinks = document.querySelectorAll('.nav-mobile__menu-item');
// nie jestem dumny z tego kodu jak cos
const propositionsCardTextOne = document.querySelector(
	'.propositions__card__text--one'
);
const propositionsCardTextTwo = document.querySelector(
	'.propositions__card__text--two'
);
const propositionsCardTextThree = document.querySelector(
	'.propositions__card__text--three'
);
const propositionsCardBtnOne = document.querySelector(
	'.propositions__card-btn--one'
);
const propositionsCardBtnTwo = document.querySelector(
	'.propositions__card-btn--two'
);
const propositionsCardBtnThree = document.querySelector(
	'.propositions__card-btn--three'
);

const navMobileElementsClassesToggle = () => {
	burgerBtn.classList.toggle('nav-mobile__burger--animation');
	navMobileMenu.classList.toggle('nav-mobile__menu--show');
};

burgerBtn.addEventListener('click', function () {
	navMobileElementsClassesToggle();

	burgerBtnElements.forEach((el) =>
		el.classList.toggle('nav-mobile__burger-item--bgc')
	);
});

navMobileMenuLinks.forEach((el) =>
	el.addEventListener('click', function () {
		navMobileElementsClassesToggle();

		burgerBtnElements.forEach((el) =>
			el.classList.toggle('nav-mobile__burger-item--bgc')
		);
	})
);
// nie jestem dumny z tego kodu jak cos
propositionsCardBtnOne.addEventListener('click', () => {
	propositionsCardTextOne.classList.toggle('propositions__card__text--show');
});
propositionsCardBtnTwo.addEventListener('click', () => {
	propositionsCardTextTwo.classList.toggle('propositions__card__text--show');
});
propositionsCardBtnThree.addEventListener('click', () => {
	propositionsCardTextThree.classList.toggle('propositions__card__text--show');
});
