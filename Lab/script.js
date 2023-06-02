function menuClick() {
	let menu = document.getElementById('menu-icon');
	let navlist = document.getElementById('navlist');
	
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}

const sr = ScrollReveal({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
})

sr.reveal('.home-text',{delay:200, origin:'top'});
sr.reveal('.home-img',{delay:200, origin:'top'});