/*Nav*/
var menu = document.querySelector('#menu-bar');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
window.onscroll = () => {
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
}

/*Order*/

function order(){
	alert("your order is successful");
}

/*RESERVATION*/

function reservation(){
	alert("your reservation is successful");
}