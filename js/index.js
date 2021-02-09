// Your code goes here
const nav = document.querySelectorAll('nav a');
const destinations = document.querySelector('.content-pick');

const testLink = document.querySelector('nav a:nth-child(1)');

testLink.addEventListener('click', (e) => {
	// console.log(e.type);
});

Array.from(nav).forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(e.type);
	});
});
