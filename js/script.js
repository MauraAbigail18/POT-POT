//Toggle Class Active
const navbarnav = document.querySelector('.navbar-nav')
//When the hamburger-menu is clicked

document.querySelector('#hamburger-menu').onclick = () => {
navbarnav.classList.toggle('active')
};

// Klik di luar sidebar u/menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e) {
	if (!hamburger.contains(e.target) && !navbarnav.contains(e.targer)) {
		navbarnav.classList.remove('active')
	}
});
