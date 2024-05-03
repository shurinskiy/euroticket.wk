import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const header = document.querySelector('.header');
	if(!header) return;
	
	const navi = header.querySelector('.header__navi');
	const toggles = header.querySelectorAll('.header__toggle, .h-navi__close');
	
	const menu = menuToggle(navi, toggles, {
		omitToClose: '.modal',
		class: 'opened',
		open: function() {
			const maxw = parseInt(getComputedStyle(this).maxWidth);
			const scrollw = scrollLock.getPageScrollBarWidth();

			Object.assign(this.style, { maxWidth: maxw + scrollw + 'px' });
			scrollLock.disablePageScroll();
			document.body.classList.add('underlay');
		},
		close: function() {
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
			document.body.classList.add('underlay_closing');
			
			this.addEventListener('transitionend', e => {
				document.body.classList.remove('underlay', 'underlay_closing');
			}, { once: true });
		}
	});

	if (header.classList.contains('header_home')) {
		window.addEventListener('scroll', () => {
			header.classList[window.scrollY > 30 ? 'add': 'remove']('header_filled');
		});
	}

	// открытие и закрытие меню, свайпом на мобильных устройствах
	navi.addEventListener('swiped-left', (e) => menu.close(e));

})();