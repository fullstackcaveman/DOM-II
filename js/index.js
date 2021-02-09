// Your code goes here
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const destinations = document.querySelector('.content-pick');
const images = document.querySelectorAll('img');
const paraText = document.querySelectorAll('p');

// const testLink = document.querySelector('nav a:nth-child(1)');

// testLink.addEventListener('click', (e) => {
// 	// console.log(e.type);
// });

// Add preventDefault to Header Links
Array.from(navLinks).forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
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

	// Double-click event changes border radius
	image.addEventListener('dblclick', () => {
		image.classList.add('img-dbl-click');
	});

	// Single-click resets border radius to original
	image.addEventListener('click', () => {
		image.classList.remove('img-dbl-click');
	});
});

// // Add mouseleave to images
Array.from(images).forEach((image) => {
	image.addEventListener('mouseleave', () => {
		image.classList.remove('img-shadow');
	});
});

// Console.log window size when resizing
window.addEventListener('resize', () => {
	console.log(`
    Window Height: ${window.innerHeight}
    Window Width: ${window.innerWidth}
  `);
});

// Console.log load status
window.addEventListener('load', (e) => {
	alert('Welcome to Fun Bus!');
	console.log('Page has fully loaded');
});
