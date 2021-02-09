// Your code goes here
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const destinations = document.querySelector('.content-pick');

const testLink = document.querySelector('nav a:nth-child(1)');

testLink.addEventListener('click', (e) => {
	// console.log(e.type);
});

Array.from(navLinks).forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(e.type);
	});
});

// Resize Header on scroll function
window.addEventListener('scroll', fixHeader);
function fixHeader() {
	if (window.scrollY > header.offsetHeight + 50) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
}
