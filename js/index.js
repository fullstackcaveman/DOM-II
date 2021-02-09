// Your code goes here
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const destinations = document.querySelector('.content-pick');
const images = document.querySelectorAll('img');

// const testLink = document.querySelector('nav a:nth-child(1)');

// testLink.addEventListener('click', (e) => {
// 	// console.log(e.type);
// });

// Add preventDefault to Header Links
Array.from(navLinks).forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(e.type);
	});
});

// Add mouseover to Header Links
Array.from(navLinks).forEach((link) => {
	link.addEventListener('mouseover', () => {
		link.style.color = '#f34546';
	});
});

// Add mouseleave to Header Links
Array.from(navLinks).forEach((link) => {
	link.addEventListener('mouseleave', () => {
		link.style.color = '#212529';
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

// Image manipulation
// Add mouseover to images
Array.from(images).forEach((image) => {
	image.addEventListener('mouseover', () => {
		image.classList.add('img-shadow');
	});
});

// // Add mouseleave to images
Array.from(images).forEach((image) => {
	image.addEventListener('mouseleave', () => {
		image.classList.remove('img-shadow');
	});
});
