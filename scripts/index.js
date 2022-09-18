import Swiper from '../lib/swiper-bundle.esm.browser.min.js';

new SimpleBar(document.querySelector('.country__list'), {
	classNames: {
		scrollbar: 'country__scrollbar',
		track: 'country__track'
	}
});

new Swiper('.goods__block', {
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		1440: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	},
	navigation: {
		prevEl: '.goods__arrow-prev',
		nextEl: '.goods__arrow-next'
	},
	preventClicks: true,
	a11y: false
});
const productMore = document.querySelectorAll('.product__more');
const modal = document.querySelector('.modal');

productMore.forEach((btn) => {
	btn.addEventListener('click', () => {
		modal.classList.add('modal-open');
	});
});

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.classList.remove('modal-open');
	}
});
const formPlaceholder = document.querySelectorAll('.form__placeholder');
const formInput = document.querySelectorAll('.form__input');

formInput.forEach((input, i) => {
	input.addEventListener('focus', () => {
		formPlaceholder[i].classList.add('form__placeholder-active')
	})
	input.addEventListener('blur', () => {
		if (input.value === '') {
			formPlaceholder[i].classList.remove('form__placeholder-active');
		}
	});
});
const countryBtn = document.querySelector('.country__btn');
const countryWrapper = document.querySelector('.country__wrapper');

countryBtn.addEventListener('click', () => {
	countryWrapper.classList.toggle('country__wrapper-open');
})
countryWrapper.addEventListener('click', ({ target }) => {
	if (target.classList.contains('country__choise')) {
		countryWrapper.classList.toggle('country__wrapper-open');
	}
});
const dataCurrency = {};

const formatCurrency = (value, currency) => {
	return new Intl.NumberFormat('EU', {
		style: 'currency',
		currency,
		maximumFractionDigits: 2,
	}).format(value)
}

const showPrice = (currency = 'USD') => {
	const priceElems = document.querySelectorAll('[data-price]');

	priceElems.forEach(elem => {
		elem.textContent = formatCurrency(elem.dataset.price, carrency);
	})

}
showPrice();

const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
const timer = (deadline) => {
	const unitDays = document.querySelector('.timer__unit-day');
	const unitHours = document.querySelector('.timer__unit-hour');
	const unitMinutes = document.querySelector('.timer__unit-min');

	const daysDes = document.querySelector('.timer__des-day');
	const hoursDes = document.querySelector('.timer__des-hour');
	const minutesDes = document.querySelector('.timer__des-min');

	const getTimeRemaining = () => {
		const dateStop = new Date(deadline).getTime();
		const dateNow = Date.now();
		const timeRemaining = dateStop - dateNow;

		const unitMinutes = Math.floor(timeRemaining / 1000 / 60 % 60);
		const unitHours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
		const unitDays = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

		return { timeRemaining, unitMinutes, unitHours, unitDays };
	};

	const start = () => {
		const timer = getTimeRemaining();

		unitDays.textContent = timer.unitDays;
		unitHours.textContent = timer.unitHours;
		unitMinutes.textContent = timer.unitMinutes;

		daysDes.textContent = declOfNum(unitDays, ['день', 'дня', 'дней']);
		hoursDes.textContent = declOfNum(unitHours, ['час', 'часа', 'часов']);
		minutesDes.textContent = declOfNum(unitMinutes, ['минута', 'минуты', 'минут']);

		const timerId = setTimeout(start, 60000);
	}
	start();
};
timer('2023/10/07 20:00');





