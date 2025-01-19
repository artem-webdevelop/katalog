const swiper = new Swiper('.swiper', {
	effect: 'slider',// cards, coverflow, flip, fade, cube
	direction: 'horizontal', // 'vertical', 'horizontal'
	grabCursor: true,
	slidesPerView: 2,// кол-во активных слайдов
	spaceBetween: 1,// расстояние между слайдами
	speed: 400,// скорость переключения слайдов
	 // centeredSlides: true, // центрирование слайдов
	 // initialSlide: 2, // Начинаем со 2 слайдера
    freeMode: true, // можно перетаскивать как ленту
	// slidesPerGroup: 3, // кол-во пролистываемых слайдов

	  //! Автоматическое перелистывание
    autoplay: {
        delay: 5000, //Задержка перед перелистыванием 1с = 1000мл/с
    },


	

	loop: true,// true - круговой слайдер, false - слайдер с конечными положениями

	keyboard: {
		enabled: true,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,// true - Пагинация становится кликабельной
	},

	// // если внутри стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// классы для стрелок назначить при надобности новые вне контейнера или абсолютно 
	// спозиционированные
	// navigation: {
	// 	nextEl: '.next',
	// 	prevEl: '.prev',
	// },


    breakpoints: {
		// when window width is >= 320px
		250: {
			slidesPerView: 1,
			spaceBetween: 6
			
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 6
			
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 1,
			spaceBetween: 6
		},
		
		// when window width is >= 768px
		768: {
			slidesPerView: 1,
			spaceBetween: 6
		},
		// when window width is >= 992px
		992: {
			slidesPerView: 2,
			spaceBetween: 6
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 6
		},
	}





});


