
const header = document.querySelector('.header');
const vid = document.querySelector('.navbar .video');


window.addEventListener('scroll', function(){
	var scroll = window.pageYOffset || document.documentElement.scrollTop,
    height = scroll < 800 ? 1500 - Math.floor(scroll / 4 * 3) : 650;
	if(height >= 1500){
		header.classList.remove('scroll');
		vid.style.display = "none";

	}
	if(height <1500){
		header.classList.add('scroll');
		vid.style.display = "";
	}
});
