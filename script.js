
// Анімація появи тексту при скролі
function revealOnScroll() {
	const reveals = document.querySelectorAll('.reveal');
	for (const el of reveals) {
		const windowHeight = window.innerHeight;
		const elementTop = el.getBoundingClientRect().top;
		const elementVisible = 80;
		if (elementTop < windowHeight - elementVisible) {
			el.classList.add('visible');
		} else {
			el.classList.remove('visible');
		}
	}
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
