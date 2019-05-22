const headerLogo = document.querySelector('#header_logo');
const classCards = document.querySelectorAll('.class-cards__card > a > h4');

const carouselPrev = document.querySelector('.carousel-control-prev');
const carouselNext = document.querySelector('.carousel-control-next');





$(document).ready(function(){
 
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Navbar Scene
	var navScene = new ScrollMagic.Scene({
		triggerElement: '#slideshow',
		offset: 100,

		
	})
	.setTween(".navbar", 0.02, { 
		className: "navbar navbar-expand-lg navbar-light navbar--white"
	 })
	// .setTween(TweenMax.set($('.navbar'), {
 //    	className: "navbar navbar-expand-lg navbar-light navbar--white fadeIn animated"
	// }))
	.on('enter leave', (e) => {
		if (e.type == 'enter'){
			headerLogo.src = 'assets/images/dark_logo.png'
		} else {
			headerLogo.src = 'assets/images/logo.png'
		}
	})

	.addIndicators({
		name: 'Navbar scene',
		colorTrigger: 'yellow',
		// indent: 100,
		colorStart: 'white',

	}) // this requires a plugin
	.addTo(controller);



	// build a  about scene
	var aboutScene = new ScrollMagic.Scene({
		triggerElement: '.about-section',
		reverse: false
	})
	.setClassToggle('.about-section', 'fadeIn') 
	.addIndicators({
		name: 'about scene',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75C695'
	}) // this requires a plugin
	.addTo(controller);


	// build a  Stages scene
	var StageScene = new ScrollMagic.Scene({
		triggerElement: '.class-cards',
		reverse: false
	})
	.setClassToggle('.class-cards', 'fadeIn')
	.addIndicators({
		name: 'stage scene',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75C695',

	}) // this requires a plugin
	.addTo(controller);






});



function animateCSS(element, animationName, callback) {
    const node = document.querySelectorAll(element)
    if(node.length > 1){
    	for(let i =0; i<= node.length -1; i++){
    		node[i].classList.add('animated', animationName)
    	}
    } else {
    	node.classList.add('animated', animationName)
    }

    function handleAnimationEnd() {
	    if(node.length > 1){
    		for(let i =0; i<= node.length - 1; i++){
    			node[i].classList.remove('animated', animationName)
    			node[i].removeEventListener('animationend', handleAnimationEnd)
	    	}
	    } else {
        	node.classList.remove('animated', animationName)
        	node.removeEventListener('animationend', handleAnimationEnd)
	    }


        if (typeof callback === 'function') callback()
    }
	
	    if(node.length > 1){
    		for(let i =0; i<= node.length - 1; i++){
    			 node[i].addEventListener('animationend', handleAnimationEnd)
	    	}
	    } else {
 			node.addEventListener('animationend', handleAnimationEnd)
	    }
   
}



// animateCSS('.class-cards__card > a > h4' , 'fadeInUp')

for(let i=0;i<=i.length;i++){
	classCards[i].addEventListener('mouseenter',() => {
		console.log('Colod')
		animateCSS('.class-cards__card > a > h4' , 'fadeInUp')
	})
}

