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
	reset: false
})

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'top'});
sr.reveal('.reveal',{delay:200, origin:'bottom'});

const form = document.getElementById('form');
const username = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const country = document.getElementById('country');

if(form){
	form.addEventListener('submit', e => {
		e.preventDefault();
	
		validateInputs();
	});
}

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

const setSuccess = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
}

function checkEmailAddress(emailToTest) {
	var atSymbol = emailToTest.indexOf("@");
	if(atSymbol < 1) return false;

	var dot = emailToTest.indexOf(".");
	if(dot <= atSymbol + 2) return false;

	if (dot === emailToTest.length - 1) return false;

	return true;
}

const validateInputs = () => {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const countryValue = country.value.trim();
	const termsValue = terms.value.trim();

	if(usernameValue == ''){
		setError(username, 'Username is required');
	} else {
		setSuccess(username, '');
	}

	if(emailValue == ''){
		setError(email, 'Email is required');
	} else if (checkEmailAddress(emailValue)) {
		setSuccess(email, '');
	}

	if(phoneValue == ''){
		setError(phone, 'Phonenumber is required');
	} else if (phoneValue.length < 8){
		setError(phone, 'Phonenumber length is not valid');
	} else {
		setSuccess(phone, '');
	}

	if(countryValue == ''){
		setError(country, 'Country is required');
	} else {
		setSuccess(country, '');
	}

	if(termsValue == true){
		setSuccess(terms, '');
	} else {
		setError(terms, 'You need to agree with terms and condition.')
	}
}

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

if(menuBtn){
	menuBtn.addEventListener("click", () =>{
	menuBtn.classList.toggle("active");
	navigation.classList.toggle("active")
});}

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderNav = function(manual){
	btns.forEach((btn) => {
		btn.classList.remove("active");
	});

	slides.forEach((slides) => {
		slides.classList.remove("active")
	})

	btns[manual].classList.add("active");
	slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		sliderNav(i);
	})
})