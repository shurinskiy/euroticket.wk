import { Fancybox } from "@fancyapps/ui";

(() => {
	Fancybox.bind('[data-fancybox]', {
		Thumbs: {
			type: 'classic'
		},
		Toolbar: {
			display: {
				left: ["infobar"],
				middle: [],
				right: ["iterateZoom", "close"],
			},
		},
	});

	document.querySelectorAll('.gallery').forEach(gallery => {
		gallery.querySelector('.gallery__more').addEventListener('click', e => {
			e.preventDefault();
			gallery.querySelector('.gallery .gallery__hidden').classList.add('showed');
			e.target.remove();
		});
	});

})();