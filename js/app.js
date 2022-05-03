// Переменная для Бургера, блокировки скролла
let unlock = true;

// let menuBtn = document.querySelector('._menu-btn');
// let menu = document.querySelector('._menu');
// let body = document.querySelector('body');
// menuBtn.addEventListener('click', function () {
//     menuBtn.classList.toggle('_active');
//     menu.classList.toggle('_active');
//     body.classList.toggle('_active');
// })

// ФЛС
// Для блокировки сролла
/*
// Он указывается и в popup (body_lock)
ПОДКЛЮЧИТЬ bodyLock.js =======================================================================================
*/

let iconMenu = document.querySelector("._menu-btn");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector("._menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
	// Для закрывания меню по нажатию на пустом месте. В html дополнительно указать блок с класслм _close указать 
	// let bodyRead = document.querySelector("._close");
	// bodyRead.addEventListener("click", function (e) {
	// menu_close();
	// });
};
// Чтобы меню закрывалось при ссылках якорях 
function menu_close() {
	let iconMenu = document.querySelector("._menu-btn");
	let menuBody = document.querySelector("._menu");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
// ПОДКЛЮЧИТЬ ФАЙЛ =======================================================================================


// Для отсчета слайдов справа на лево в html указать в <div> главного контейнера для слайдера dir="rtl" 
// Если Swiper является флекс элементом, то указываем этому элементу min-width = 0;
// Дочерний слайд. В html слайд в слайде и в js делвем новую инициализацию + указать параметр в дочернем слайде nested: true, чтобы не влияло на родителя + отключить переключение по клику на слайд slideToClickedSlide: false,
// Инициализируем Swiper, дав ему имя главного контейнера

let commentMob = document.querySelectorAll('.comment-mob-swiper');
if (commentMob.length > 0) {
	commentMob.forEach(commentMobEl => {
		new Swiper(commentMobEl, {

			// navigation: {
				
			// 	nextEl: '.swiper-button-next-map',
			// 	prevEl: '.swiper-button-prev-map'

			// },

			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			//  pagination: {

			// 	// Имя класса буллетов
			// 	el: '.swiper-pagination',



			// 	// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

			// 	/*
			// 	// Булдеты
			// 	// Чтобы при нажатии на кружок срабатывал переход        
			// 	// type: 'bullets',
			// 	// clickable: true,
			// 	// Динамический буллет
			// 	dynamicBullets: true,
			// 	// Кастомные буллеты. Изменяем параметры вывода
			// 	// Параметры изменяются в классе .swiper-pagination-bullet
			// 	renderBullet: function (index, className) {
			// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
			// 	},
			// 	// Стилизация буллета (свой класс)
			// 	// bulletClass: "ИМЯ_КЛАССА",
			// 	// Стилизация активного буллета (свой класс)
			// 	// bulletActiveClass: "ИМЯ_КЛАССА",
			// 	*/

			// 	/*
			// 	// Фракция
			// 	type: 'fraction',
			// 	// Кастомный вывод фракции
			// 	renderFraction: function (currentClass, totalClass) {
			// 		return 'Фото <span class="' + currentClass + '"></span>' +
			// 			' из ' +
			// 			'<span class="' + totalClass + '"></span>';
			// 	},
			// 	*/

			// 	/*
			// 	// Прогрессбар
			// 	type: 'progressbar'
			// 	*/
			// },


			// Скролл
			// Добавить html
			// scrollbar: {
			// 	/*
			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	draggable: true
			// 	*/
			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// mousewheel: {
			// 	/*
			// 	// Чувствительность колеса мыши
			// 	sensitivity: 1,
			// 	// Класс объекта на котором
			// 	// будет срабатывать прокрутка мышью.
			// 	//eventsTarget: ".image-slider"
			// 	*/
			// },


			
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 1.5,

			// Отступ между слайдами
			spaceBetween: 20,

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	480: {
			// 		slidesPerView: 2,
			// 	},
			// 	992: {
			// 		slidesPerView: 2,
			// 	}
			// },
			
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}

let mapsSwiperTwo = document.querySelectorAll('.maps-slider-two');
if (mapsSwiperTwo.length > 0) {
	mapsSwiperTwo.forEach(swiperElTwoMap => {
		new Swiper(swiperElTwoMap, {

			// navigation: {
				
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev'

			// },

			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			 pagination: {

			// 	// Имя класса буллетов
				el: '.swiper-pagination',



			// 	// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

			// 	/*
			// 	// Булдеты
			// 	// Чтобы при нажатии на кружок срабатывал переход        
				type: 'bullets',
			// 	// clickable: true,
			// 	// Динамический буллет
			// 	dynamicBullets: true,
			// 	// Кастомные буллеты. Изменяем параметры вывода
			// 	// Параметры изменяются в классе .swiper-pagination-bullet
			// 	renderBullet: function (index, className) {
			// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
			// 	},
			// 	// Стилизация буллета (свой класс)
			// 	// bulletClass: "ИМЯ_КЛАССА",
			// 	// Стилизация активного буллета (свой класс)
			// 	// bulletActiveClass: "ИМЯ_КЛАССА",
			// 	*/

				
				// Фракция
				// type: 'fraction',
				// // Кастомный вывод фракции
				// renderFraction: function (currentClass, totalClass) {
				// 	return ' <span class="' + currentClass + '"></span>' +
				// 		' / ' +
				// 		'<span class="' + totalClass + '"></span>';
				// },
				

			// 	/*
			// 	// Прогрессбар
			// 	type: 'progressbar'
			// 	*/
			},


			// Скролл
			// Добавить html
			// scrollbar: {
			// 	/*
			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	draggable: true
			// 	*/
			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// mousewheel: {
			// 	/*
			// 	// Чувствительность колеса мыши
			// 	sensitivity: 1,
			// 	// Класс объекта на котором
			// 	// будет срабатывать прокрутка мышью.
			// 	//eventsTarget: ".image-slider"
			// 	*/
			// },


			
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 1,

			// Отступ между слайдами
			spaceBetween: 20,

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			// breakpoints: {
			// 	320: {
			// 		// slidesPerView: 1,
			// 	},
			// 	480: {
			// 		// slidesPerView: 2,
			// 	},
			// 	992: {
			// 		// pagination:{
			// 		// 	el: '.swiper-pagination',
			// 		// 	type: 'bullets',
			// 		// }
			// 	}
			// },
			
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}
let mapsSwiper = document.querySelectorAll('.maps-slider');
if (mapsSwiper.length > 0) {
	mapsSwiper.forEach(swiperElTwo => {
		new Swiper(swiperElTwo, {

			navigation: {
				
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'

			},

			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			 pagination: {

			// 	// Имя класса буллетов
				el: '.swiper-pagination',



			// 	// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

			// 	/*
			// 	// Булдеты
			// 	// Чтобы при нажатии на кружок срабатывал переход        
			// 	// type: 'bullets',
			// 	// clickable: true,
			// 	// Динамический буллет
			// 	dynamicBullets: true,
			// 	// Кастомные буллеты. Изменяем параметры вывода
			// 	// Параметры изменяются в классе .swiper-pagination-bullet
			// 	renderBullet: function (index, className) {
			// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
			// 	},
			// 	// Стилизация буллета (свой класс)
			// 	// bulletClass: "ИМЯ_КЛАССА",
			// 	// Стилизация активного буллета (свой класс)
			// 	// bulletActiveClass: "ИМЯ_КЛАССА",
			// 	*/

				
				// Фракция
				type: 'fraction',
				// Кастомный вывод фракции
				renderFraction: function (currentClass, totalClass) {
					return ' <span class="' + currentClass + '"></span>' +
						' / ' +
						'<span class="' + totalClass + '"></span>';
				},
				

			// 	/*
			// 	// Прогрессбар
			// 	type: 'progressbar'
			// 	*/
			},


			// Скролл
			// Добавить html
			// scrollbar: {
			// 	/*
			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	draggable: true
			// 	*/
			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// mousewheel: {
			// 	/*
			// 	// Чувствительность колеса мыши
			// 	sensitivity: 1,
			// 	// Класс объекта на котором
			// 	// будет срабатывать прокрутка мышью.
			// 	//eventsTarget: ".image-slider"
			// 	*/
			// },


			
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 1,

			// Отступ между слайдами
			spaceBetween: 20,

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					// slidesPerView: 1,
				},
				480: {
					// slidesPerView: 2,
				},
				992: {
					// pagination:{
					// 	el: '.swiper-pagination',
					// 	type: 'bullets',
					// }
				}
			},
			
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}



let kichenSwiperTwo = document.querySelectorAll('.for-kichen-swiper-two');
if (kichenSwiperTwo.length > 0) {
	kichenSwiperTwo.forEach(swiperElTwo => {
		new Swiper(swiperElTwo, {

			// navigation: {
			// 	disabledClass: "for-kichen-swiper-disable",
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev'

			// },
			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			//  pagination: {

			// 	// Имя класса буллетов
			// 	el: '.swiper-pagination',



			// 	// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

			// 	/*
			// 	// Булдеты
			// 	// Чтобы при нажатии на кружок срабатывал переход        
			// 	// type: 'bullets',
			// 	// clickable: true,
			// 	// Динамический буллет
			// 	dynamicBullets: true,
			// 	// Кастомные буллеты. Изменяем параметры вывода
			// 	// Параметры изменяются в классе .swiper-pagination-bullet
			// 	renderBullet: function (index, className) {
			// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
			// 	},
			// 	// Стилизация буллета (свой класс)
			// 	// bulletClass: "ИМЯ_КЛАССА",
			// 	// Стилизация активного буллета (свой класс)
			// 	// bulletActiveClass: "ИМЯ_КЛАССА",
			// 	*/

			// 	/*
			// 	// Фракция
			// 	type: 'fraction',
			// 	// Кастомный вывод фракции
			// 	renderFraction: function (currentClass, totalClass) {
			// 		return 'Фото <span class="' + currentClass + '"></span>' +
			// 			' из ' +
			// 			'<span class="' + totalClass + '"></span>';
			// 	},
			// 	*/

			// 	/*
			// 	// Прогрессбар
			// 	type: 'progressbar'
			// 	*/
			// },


			// Скролл
			// Добавить html
			// scrollbar: {
			// 	/*
			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	draggable: true
			// 	*/
			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// mousewheel: {
			// 	/*
			// 	// Чувствительность колеса мыши
			// 	sensitivity: 1,
			// 	// Класс объекта на котором
			// 	// будет срабатывать прокрутка мышью.
			// 	//eventsTarget: ".image-slider"
			// 	*/
			// },


			
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 2,

			// Отступ между слайдами
			spaceBetween: 20,

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				}
			},
			
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}





let kichenSwiper = document.querySelectorAll('.for-kichen-swiper');
if (kichenSwiper.length > 0) {
	kichenSwiper.forEach(swiperEl => {
		new Swiper(swiperEl, {

			navigation: {
				disabledClass: "for-kichen-swiper-disable",
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'

			},
			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			//  pagination: {

			// 	// Имя класса буллетов
			// 	el: '.swiper-pagination',



			// 	// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

			// 	/*
			// 	// Булдеты
			// 	// Чтобы при нажатии на кружок срабатывал переход        
			// 	// type: 'bullets',
			// 	// clickable: true,
			// 	// Динамический буллет
			// 	dynamicBullets: true,
			// 	// Кастомные буллеты. Изменяем параметры вывода
			// 	// Параметры изменяются в классе .swiper-pagination-bullet
			// 	renderBullet: function (index, className) {
			// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
			// 	},
			// 	// Стилизация буллета (свой класс)
			// 	// bulletClass: "ИМЯ_КЛАССА",
			// 	// Стилизация активного буллета (свой класс)
			// 	// bulletActiveClass: "ИМЯ_КЛАССА",
			// 	*/

			// 	/*
			// 	// Фракция
			// 	type: 'fraction',
			// 	// Кастомный вывод фракции
			// 	renderFraction: function (currentClass, totalClass) {
			// 		return 'Фото <span class="' + currentClass + '"></span>' +
			// 			' из ' +
			// 			'<span class="' + totalClass + '"></span>';
			// 	},
			// 	*/

			// 	/*
			// 	// Прогрессбар
			// 	type: 'progressbar'
			// 	*/
			// },


			// Скролл
			// Добавить html
			// scrollbar: {
			// 	/*
			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	draggable: true
			// 	*/
			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// mousewheel: {
			// 	/*
			// 	// Чувствительность колеса мыши
			// 	sensitivity: 1,
			// 	// Класс объекта на котором
			// 	// будет срабатывать прокрутка мышью.
			// 	//eventsTarget: ".image-slider"
			// 	*/
			// },


			/*
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			*/

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 3,

			// Отступ между слайдами
			spaceBetween: 20,

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			},
			
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}

let selectSwiper = document.querySelectorAll(".select-swiper")
if (selectSwiper.length > 0) {
	selectSwiper.forEach(swiperEl1 => {
		new Swiper(swiperEl1, {

			// navigation: {

			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev'

			// },
			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			pagination: {

				// Имя класса буллетов
				el: '.swiper-pagination',



				// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

				/*
				// Булдеты
				// Чтобы при нажатии на кружок срабатывал переход        
				// type: 'bullets',
				// clickable: true,
				// Динамический буллет
				dynamicBullets: true,
				// Кастомные буллеты. Изменяем параметры вывода
				// Параметры изменяются в классе .swiper-pagination-bullet
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
				// Стилизация буллета (свой класс)
				// bulletClass: "ИМЯ_КЛАССА",
				// Стилизация активного буллета (свой класс)
				// bulletActiveClass: "ИМЯ_КЛАССА",
				*/

				/*
				// Фракция
				type: 'fraction',
				// Кастомный вывод фракции
				renderFraction: function (currentClass, totalClass) {
					return 'Фото <span class="' + currentClass + '"></span>' +
						' из ' +
						'<span class="' + totalClass + '"></span>';
				},
				*/


				// Прогрессбар
				type: 'progressbar'

			},


			// Скролл
			// Добавить html
			// scrollbar: {

			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	hide: true

			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// ц


			/*
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			*/

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 3,

			// Отступ между слайдами
			//  spaceBetween: 10, 

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			/*
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			},
			*/
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}

let selectColorMob = document.querySelectorAll(".selection-mob-color")
if (selectColorMob.length > 0) {
	selectColorMob.forEach(swiperEl2 => {
		new Swiper(swiperEl2, {

			// navigation: {

			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev'

			// },
			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			pagination: {

				// Имя класса буллетов
				el: '.swiper-pagination',



				// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

				/*
				// Булдеты
				// Чтобы при нажатии на кружок срабатывал переход        
				// type: 'bullets',
				// clickable: true,
				// Динамический буллет
				dynamicBullets: true,
				// Кастомные буллеты. Изменяем параметры вывода
				// Параметры изменяются в классе .swiper-pagination-bullet
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
				// Стилизация буллета (свой класс)
				// bulletClass: "ИМЯ_КЛАССА",
				// Стилизация активного буллета (свой класс)
				// bulletActiveClass: "ИМЯ_КЛАССА",
				*/

				/*
				// Фракция
				type: 'fraction',
				// Кастомный вывод фракции
				renderFraction: function (currentClass, totalClass) {
					return 'Фото <span class="' + currentClass + '"></span>' +
						' из ' +
						'<span class="' + totalClass + '"></span>';
				},
				*/


				// Прогрессбар
				type: 'progressbar'

			},


			// Скролл
			// Добавить html
			// scrollbar: {

			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	hide: true

			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// ц


			/*
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			*/

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 7,

			// Отступ между слайдами
			//  spaceBetween: 10, 

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			/*
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			},
			*/
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}

let selectColor = document.querySelectorAll(".selection-color")
if (selectColor.length > 0) {
	selectColor.forEach(swiperEl3 => {
		new Swiper(swiperEl3, {

			navigation: {
				disabledClass: 'selection-color-disable',
				nextEl: '.swiper-button-next-color',
				prevEl: '.swiper-button-prev-color'

			},
			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			// pagination: {
			/*
			// Имя класса буллетов
			el: '.swiper-pagination',
		    
			*/

			// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

			/*
			// Булдеты
			// Чтобы при нажатии на кружок срабатывал переход        
			// type: 'bullets',
			// clickable: true,
			// Динамический буллет
			dynamicBullets: true,
			// Кастомные буллеты. Изменяем параметры вывода
			// Параметры изменяются в классе .swiper-pagination-bullet
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
			// Стилизация буллета (свой класс)
			// bulletClass: "ИМЯ_КЛАССА",
			// Стилизация активного буллета (свой класс)
			// bulletActiveClass: "ИМЯ_КЛАССА",
			*/

			/*
			// Фракция
			type: 'fraction',
			// Кастомный вывод фракции
			renderFraction: function (currentClass, totalClass) {
				return 'Фото <span class="' + currentClass + '"></span>' +
					' из ' +
					'<span class="' + totalClass + '"></span>';
			},
			*/

			/*
			// Прогрессбар
			type: 'progressbar'
			*/
			// },


			// Скролл
			// Добавить html
			// scrollbar: {
			// 	/*
			// 	el: '.swiper-scrollbar',
			// 	// Возможность перетаскивать скролл
			// 	draggable: true
			// 	*/
			// },

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			// hashNavigation: {
			// 	/*
			// 	// Отслеживать состояние
			// 	watchState: true,
			// 	*/
			// },

			// Управление клавиатурой
			// keyboard: {
			// 	/*
			// 	// Включить\выключить
			// 	enabled: true,
			// 	// Включить\выключить
			// 	// только когда слайдер
			// 	// в пределах вьюпорта
			// 	onlyInViewport: true,
			// 	// Включить\выключить
			// 	// управление клавишами
			// 	// pageUp, pageDown
			// 	pageUpDown: true,
			// 	*/
			// },

			// Управление колесом мыши
			// ц


			/*
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			*/

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 7,

			// Отступ между слайдами
			//  spaceBetween: 10, 

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			/*
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			},
			*/
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}

let mobMenu = document.querySelectorAll(".mob-menu")
if (mobMenu.length > 0) {
	mobMenu.forEach(swiperEl4 => {
		new Swiper(swiperEl4, {

			navigation: {

				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'

			},
			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			// pagination: {
			/*
			// Имя класса буллетов
			el: '.swiper-pagination',
		    
			*/

			// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

			/*
			// Булдеты
			// Чтобы при нажатии на кружок срабатывал переход        
			// type: 'bullets',
			// clickable: true,
			// Динамический буллет
			dynamicBullets: true,
			// Кастомные буллеты. Изменяем параметры вывода
			// Параметры изменяются в классе .swiper-pagination-bullet
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
			// Стилизация буллета (свой класс)
			// bulletClass: "ИМЯ_КЛАССА",
			// Стилизация активного буллета (свой класс)
			// bulletActiveClass: "ИМЯ_КЛАССА",
			*/

			/*
			// Фракция
			type: 'fraction',
			// Кастомный вывод фракции
			renderFraction: function (currentClass, totalClass) {
				return 'Фото <span class="' + currentClass + '"></span>' +
					' из ' +
					'<span class="' + totalClass + '"></span>';
			},
			*/

			/*
			// Прогрессбар
			type: 'progressbar'
			*/
			// },


			// Скролл
			// Добавить html
			scrollbar: {
				/*
				el: '.swiper-scrollbar',
				// Возможность перетаскивать скролл
				draggable: true
				*/
			},

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			hashNavigation: {
				/*
				// Отслеживать состояние
				watchState: true,
				*/
			},

			// Управление клавиатурой
			keyboard: {
				/*
				// Включить\выключить
				enabled: true,
				// Включить\выключить
				// только когда слайдер
				// в пределах вьюпорта
				onlyInViewport: true,
				// Включить\выключить
				// управление клавишами
				// pageUp, pageDown
				pageUpDown: true,
				*/
			},

			// Управление колесом мыши
			// ц


			/*
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			*/

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 4.2,

			// Отступ между слайдами
			spaceBetween: 20,

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			/*
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			},
			*/
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}

let selectKichenMob = document.querySelectorAll(".selection-kichen-mob-swiper")
if (selectKichenMob.length > 0) {
	selectKichenMob.forEach(swiperEl5 => {
		new Swiper(swiperEl5, {

			navigation: {

				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'

			},
			// Навигация 
			// Буллеты, текущее положение, прогресс
			// Добавить html
			pagination: {

				// Имя класса буллетов
				el: '.swiper-pagination',



				// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

				/*
				// Булдеты
				// Чтобы при нажатии на кружок срабатывал переход        
				// type: 'bullets',
				// clickable: true,
				// Динамический буллет
				dynamicBullets: true,
				// Кастомные буллеты. Изменяем параметры вывода
				// Параметры изменяются в классе .swiper-pagination-bullet
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
				// Стилизация буллета (свой класс)
				// bulletClass: "ИМЯ_КЛАССА",
				// Стилизация активного буллета (свой класс)
				// bulletActiveClass: "ИМЯ_КЛАССА",
				*/

				/*
				// Фракция
				type: 'fraction',
				// Кастомный вывод фракции
				renderFraction: function (currentClass, totalClass) {
					return 'Фото <span class="' + currentClass + '"></span>' +
						' из ' +
						'<span class="' + totalClass + '"></span>';
				},
				*/

				/*
				// Прогрессбар
				type: 'progressbar'
				*/
			},


			// Скролл
			// Добавить html
			scrollbar: {
				/*
				el: '.swiper-scrollbar',
				// Возможность перетаскивать скролл
				draggable: true
				*/
			},

			// Навигация по хешу
			// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
			hashNavigation: {
				/*
				// Отслеживать состояние
				watchState: true,
				*/
			},

			// Управление клавиатурой
			keyboard: {
				/*
				// Включить\выключить
				enabled: true,
				// Включить\выключить
				// только когда слайдер
				// в пределах вьюпорта
				onlyInViewport: true,
				// Включить\выключить
				// управление клавишами
				// pageUp, pageDown
				pageUpDown: true,
				*/
			},

			// Управление колесом мыши
			// mousewheel: {
			// 	/*
			// 	// Чувствительность колеса мыши
			// 	sensitivity: 1,
			// 	// Класс объекта на котором
			// 	// будет срабатывать прокрутка мышью.
			// 	//eventsTarget: ".image-slider"
			// 	*/
			// },


			/*
			// Включение/отключение
			// перетаскивания слайдов на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRatio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,
			// Переключение при клике на слайд
			// Работает тогда, когда слайдов не один (slidesPerView: ;)
			slideToClickedSlide: false,
			// Автовысота
			autoHeight: false,
			// Отключение функционала 
			// если слайдов меньше чем нужно 
			// (Уберуться кнопки, кролл ...)
			watchOverflow: true,
			// Активный слайд по центру
			centeredSlides: false,
		   
			*/

			// При работе, например, с табами, когда слайдер изначально не виден
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,

			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,

			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,

			// Количество слайдов для показа
			slidesPerView: 1,

			// Отступ между слайдами
			spaceBetween: 20,

			// Количество пролистываемых слайдов
			/* slidesPerGroup: 1, */

			// Стартовый слайд.
			/* initialSlide: 0, */

			// Мультирядность
			// Отключить автовысоту
			// Изменить стили :
			// 1)для всего слайдера указать высоту
			//  либо поместить его в блок
			//  у которого есть определенная высота 
			// 2)изменить высоту для самих слайдов 
			// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
			/* slidesPerColumn: 2, */

			// Бесконечный слайдер
			// скролл отключить
			// мультирядность не больше 1
			/* loop: true, */

			// ??
			// Кол-во дублирующих слайдов
			// Если используем slidesPerView: 'auto';, то стоит
			// указать этот параметр
			// ??
			/* loopedSlides: 2, */

			// Свободный режим
			// при скролле блоки не фиксируются на каком-то конкретном
			/* freeMode: true, */

			// Автопрокрутка
			/*
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				stopOnLastSlide: true,
				// Отключить после ручного переключения
				disableOnInteraction: false
			},
			*/

			// Скорость переключения слайдов
			/* speed: 300, */

			// Вертикальный слайдер 
			// vertical  horizontal
			/* direction: 'horizontal', */


			// Эффекты переключения слайдов.
			// effect: 'slide',
			// {=============================
			// Листание slide
			// Cмена прозрачности fade
			// Дополнение к fade
			/*   fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
			},     */
			// Переворот flip
			// Дополнение к flip
			/*    flipEffect: {
				// Тень
				slideShadows: true,
				// Показ только активного слайда
				limitRotation: true
			},    */
			// Куб cube
			// Дополнение к cube
			/*     cubeEffect: {
				// Настройки тени
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			},    */
			// Эффект потока coverflow
			// Дополнение к coverflow
			/*    coverflowEffect: {
				// Угол
				rotate: 20,
				// Наложение
				stretch: 50,
				// Тень
				slideShadows: true,
			},*/
			// =============================}    

			/*
			// Брейк поинты (адаптив). 
			// Срабатывают на ширинах больше указанных
			// Ширина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			},
			*/
			/*
			 // Брейк поинты (адаптив)
			 // Соотношение сторон
			 breakpoints: {
				 '@0.75': {
					 slidesPerView: 1,
				 },
				 '@1.00': {
					 slidesPerView: 2,
				 },
				 '@1.50': {
					 slidesPerView: 3,
				 }
			 },
			 */

			// Отключить предзагрузка картинок
			// Для картинки в html указать class="swiper-lazy"
			// Путь к изображению прописать в <img > как data-src="..."
			// а для самого изображения маленькое 1х1 изображение
			// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
			// Желательно включать, когда slidesPerView = 'auto' или больше 1
			/* preloadImages: false,
			 // Lazy Loading
			 // (подгрузка картинок)
			 lazy: {
				 // Подгружать на старте
				 // переключения слайда
				 loadOnTransitionStart: false,
				 // Подгрузить предыдущую
				 // и следующую картинки
				 loadPrevNext: false,
			 },
			 // Слежка за видимыми слайдами
			 watchSlidesProgress: true,
			 // Добавление класса видимым слайдам
			 watchSlidesVisibility: true,
			 */

			// Миниатюры (превью)
			// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
			// с миниатюрами. Количество миниатюр = количеству слайдов
			/*
			thumbs: {
				// Свайпер с мениатюрами
				// и его настройки
				swiper: {
					el: '.image-mini-slider',
					slidesPerView: 5,
				}
			},
			*/



			/*
				// События
			on: {
				// Событие инициализации
				init: function () {
					console.log('Слайдер запущен!');
				},
				// Событие смены слайда
				slideChange: function () {
					console.log('Слайд переключен');
				}
			},
			*/

		});
	});
}


// let swiper;
// let swiper2;
// let mySwiper = document.querySelectorAll(".mySwiper")
// if (mySwiper > 0){
// 	mySwiper.forEach(myswiper => {
// 		swiper = new Swiper(myswiper, {

// 			spaceBetween: 10,
// 			slidesPerView: 4,
// 			freeMode: true,
// 			watchSlidesVisibility: true,
// 			watchSlidesProgress: true,

// 		});
// 	});
// }


// let mySwiper2 = document.querySelectorAll(".mySwiper2")
// if (mySwiper2 > 0) {
// 	mySwiper2.forEach(myswiper2 => {
// 		swiper2 = new Swiper(myswiper2, {

// 			  spaceBetween: 10,
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         thumbs: {
//           swiper: swiper,
//         },

// 		});
// 	});
// }
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	
	thumbs: {
		swiper: swiper,
	},
});
// Для работы webP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

let btns = document.querySelectorAll(".dignity-video");

if (btns.length > 0) {
	btns.forEach(btn => {
		btn.addEventListener("click", function () {
			let plays = document.querySelectorAll(".dignity-mob__discription-video");
			plays.forEach(play => {
				play.style.display = "none";
			});

		});
	});
}

let likes = document.querySelectorAll(".kichen-item__like");
let likeNumber = document.querySelector(".like-number");
if (likes.length > 0) {
	likes.forEach(like => {
		like.addEventListener("click", function () {
			if (like.classList.contains("_active")) {
				like.classList.remove("_active")
				likeNumber.textContent--
			}
			else {
				likeNumber.textContent++
				like.classList.add("_active")
			}
				
		

	})
});
}

let btnBlack = document.querySelector(".btn-black")
let message = document.querySelector(".card-kichen__message")
if (btnBlack) {
	btnBlack.addEventListener("click", function () {
		message.classList.toggle("_active")
	})
}




let circles = document.querySelectorAll(".circle");
if (circles.length > 0) {
	circles.forEach(circle => {
		circle.addEventListener("click", function () {
			circle.classList.toggle("_active")
		});
	});

}

let select_items = document.querySelectorAll(".select__item");
if (select_items.length > 0) {
	select_items.forEach(select_item => {
		select_item.addEventListener("click", function () {
			select_item.classList.toggle("_active")
		});
	});

}

let filter_head = document.querySelector(".filter-mob__header");
let filter_body = document.querySelector(".filter-mob__body");
let filter_title_1 = document.querySelector(".filter-mob__title-1");
let filter_title_2 = document.querySelector(".filter-mob__title-2");
if (filter_head) {
	filter_head.addEventListener("click", function () {
		filter_body.classList.toggle("_active")
		filter_title_1.classList.toggle("_active")
		filter_title_2.classList.toggle("_active")
	})


}

const numbers = document.querySelectorAll(".pagination-number__item");
if (numbers.length > 0) {
	numbers.forEach(number => {
		number.addEventListener("click", function () {
			numbers.forEach(number => {
				number.classList.remove("_active")
			});
			number.classList.add("_active")
		});
	});
}

// let map;

// function initMap() {
// 	map = new google.maps.Map(document.getElementById("map"), {
// 		center: { lat: 55.86055799973026, lng: 37.39566901564687 }, 
// 		zoom: 15,
// 	});
// 	var marker = new google.maps.Marker({
// 		map: map,
// 		position: { lat: 55.86055799973026, lng: 37.39566901564687 }
// 	})
// }

// let left = document.querySelector(".left")
// let right = document.querySelector(".right")
// let number = document.querySelector(".number-koordinat")

// if (left && right){
// 	left.addEventListener("click",function (){
// 		if (number.innerHTML > 1)
// 		number.innerHTML--
// 	})
// 	right.addEventListener("click",function(){
// 		if (number.innerHTML < 4){
// 			number.innerHTML++
// 		}
// 	})
// }
/*TAB==================================================
nav__items  =  кнопки  
content-body__items  =  поле, в котром меняются табы 
*/
// document.querySelectorAll('.nav__items').forEach((item) =>
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = e.target.getAttribute('href').replace('#', '');


//         document.querySelectorAll('.nav__items').forEach(
//             (child) => child.classList.remove('nav__items--active')
//         );
//         document.querySelectorAll('.content-body__items').forEach(
//             (child) => child.classList.remove('content-body__items--active')
//         );

//         item.classList.add('nav__items--active');
//         document.getElementById(id).classList.add('content-body__items--active');
//     })
// );
// document.querySelector('.nav__items').click();

//=========================================================================
//  ФЛС
// Всей оболочке _tabs
// Куда ТЫЦАЕМ _tabs-item
// Блок, который появляется _tabs-block
// Чтобы сделать какой-то блок изначально открытым добавить _active куда тыцаем и на блок, который должен появиться 

let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabs_items = tab.querySelectorAll("._tabs-item");
    let tabs_blocks = tab.querySelectorAll("._tabs-block");
    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener("click", function (e) {
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_active');
                tabs_blocks[index].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_blocks[index].classList.add('_active');
            e.preventDefault();
        });
    }
}

// ПОДКЛЮЧИТЬ ФАЙЛ slideToggle.js =======================================================================================
// Также используется в ФОРМАХ СЕЛЕКТ!

// Родитель, в котром находятся спойлеры _spollers.
// чтобы рабоал как аккордеорн добавить родителю  _one
// Секция с "вопросом", куда нажимаем _spoller
// Секция с "ответом" (то, что появляется) 
// должно находиться сразу после "вопроса". Дополнительный класс не нужен
// Атрибут data-max="" в секцию с "вопросом". Указывает ширину экрана, при которой начинает работать
// 
// ОПИСАТЬ CSS

//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {

	function spollerCLick(e) {
		const spoller = e.target;
		if (spollersGo) {
			spollersGo = false;

			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);

			setTimeout(function () {
				spollersGo = true;
			}, 500);
		}
	}
	function spollersInit() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			let spollerMax = spoller.getAttribute('data-max');

			if (spollerMax && window.innerWidth > spollerMax) {
				if (spoller.classList.contains('_init')) {
					spoller.classList.remove('_active');
					spoller.classList.remove('_init');
					spoller.nextElementSibling.style.cssText = '';
					spoller.removeEventListener("click", spollerCLick);
				}
			} else if (!spoller.classList.contains('_init')) {
				spoller.classList.add('_init');
				spoller.addEventListener("click", spollerCLick);
			}
		}
	}
	function spollersShowActive() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			if (spoller.classList.contains('_active')) {
				_slideToggle(spoller.nextElementSibling);
			}
		}
	}
	window.addEventListener("resize", spollersInit);

	setTimeout(function () {
		spollersShowActive();
		spollersInit();
	}, 0);
}
// include('script/gallery.js', {})

/*
Адаптивные изображения
Чтобы использовать эту функцию, просто поместите data-at-{width}атрибуты в a теги 
со значением, являющимся путем к желаемому изображению. {width}должна быть максимальной 
шириной экрана, на которой может отображаться изображение. Сценарий выбирает первое изображение, 
{width}ширина которого больше или равна текущей ширине экрана для лучшего взаимодействия с пользователем. 
Это последнее data-at-Xизображение также используется в случае экрана больше X.

Вот пример того, как может выглядеть HTML-код:

< a  href = " img / 2-1.jpg "
   data-at-450 = " img / thumbs / 2-1.jpg "
   data-at-800 = " img / small / 2-1.jpg "
   data-at -1366 = " img / medium / 2-1.jpg "
   data-at-1920 = " img / big / 2-1.jpg " >
    < img  src = " img / thumbs / 2-1.jpg " >
</ а >
*/

// HTML структура

/* <div class="gallery">
   <a href="путь к картинке" data-caption="Image caption">
      <img src="путь к картинке" alt="First image">
    </a>
      <a href="путь к картинке">
         <img src="путь к картинке" alt="Second image">
    </a>
    ...
</div> */


// Инициализация галереи  
baguetteBox.run('.gallery', {
// Custom options

//  Подписи для картинок через атрибут к тегу a " data-caption="Image caption" "
//  значения true(по умолчанию) и false
   // captions:false,

   // Включение и отключение кнопок галлереи,значения 'auto'(по умолчанию,скрывает кнопки в сенсорных экранах),true,false
   buttons:'auto',

   // Галлерея на весь экран(true) или только в окне браузера(false)(по умолчанию)
   // fullScreen:true,

   // Скрыть полосы прокрутки при отображении галереи true и false(по умолчанию)
   noScrollbars:true,

   // Имя класса, которое будет добавлено к body световому окну, когда он будет виден (работает в IE 10+)
   // bodyClass: 'baguetteBox-open',

   // Он будет игнорировать изображения с заданным классом, помещенным в a тег
   // ignoreClass:null,

   // Используйте значение заголовка также в img.title атрибуте галереи
   // titleTag:false,

   // Загружать файлы асинхронно
   // async:true,

   // Сколько файлов должно быть предварительно загружено
   // preload:1,

   //  Тип анимации ,картинки перелистыываются как слайды 'slideIn'(по умолчанию) или исчезновение и появление 'fadeIn',false(без анимации)
   // animation:'fadeIn',

   // Цвет заднего фона 
   // overlayBackgroundColor: 'rgba(0, 0, 0, 0.8)',

   // Обратный вызов будет запущен после показа наложения
   // afterShow:null,

   // Обратный вызов для запуска после скрытия оверлея
   // afterHide:null,

   // Обратный вызов для запуска при изменении изображения
   // onChange:null,

  
});