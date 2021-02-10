// Your code goes here
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const images = document.querySelectorAll('img');
const subscribeBtn = document.querySelector('button');
const subscribeInput = document.querySelector('input');

// const testLink = document.querySelector('nav a:nth-child(1)');

// testLink.addEventListener('click', (e) => {
// 	// console.log(e.type);
// });

// Add preventDefault to Header Links
Array.from(navLinks).forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
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
window.addEventListener('load', () => {
	// alert('Welcome to Fun Bus!');
	console.log('Page has fully loaded');
});

subscribeBtn.addEventListener('click', (e) => {
	e.preventDefault();
	subscribeBtn.style.outline = 'none';
	subscribeBtn.style.background = 'rgba(243, 69, 70, 0.7)';
	subscribeBtn.style.fontSize = '.8rem';
	subscribeBtn.style.background = 'rgba(243, 69, 70)';
	subscribeBtn.style.fontSize = '1.3rem';
	subscribeInput.value = '';
	alert('Thanks for subscribing!');
	e.stopPropagation();
});

subscribeInput.addEventListener('focus', () => {
	subscribeInput.classList.add('focus');
});

subscribeInput.addEventListener('keydown', () => {
	subscribeInput.style.backgroundColor = '#f34546';
	subscribeInput.style.color = '#fff';
});

subscribeInput.addEventListener('blur', () => {
	subscribeInput.classList.remove('focus');
	subscribeInput.style.backgroundColor = '#fff';
	subscribeInput.style.color = 'black';
});
