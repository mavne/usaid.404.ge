class VisiableTracker{
	constructor(){
		this.trackElement = "section, footer";
		this.addRemoveClass = "g-visible";
	}

	track(){
		const elements = document.querySelectorAll(this.trackElement);

		const observer = new IntersectionObserver(entries => {
		  entries.forEach(entry => {
		    if (entry.isIntersecting) {
		      entry.target.classList.add(this.addRemoveClass);
		    } else {
		      // entry.target.classList.remove(this.addRemoveClass);
		    }
		  });
		});

		elements.forEach(element => {
		  observer.observe(element);
		});
	}

	run(){
		this.track();
	}
}

class LanguageBox{
	hoverAnimationInit(){
		$(document).on('mouseenter', 'header .top .center .right .wrapper .languages-box a', function(){
			var className = $(this).attr('class');
			$('header .top .center .right .wrapper .languages-box').removeClass('ka-hover').removeClass('az-hover').addClass(className+'-hover');
		});

		$(document).on('mouseleave', 'header .top .center .right .wrapper .languages-box a', function(){
			$('header .top .center .right .wrapper .languages-box').removeClass('ka-hover').removeClass('az-hover')
		});
	}

	run(){
		this.hoverAnimationInit();
	}
}

class Navigation{
	openCloseInit(){
		$(document).on('click', 'header .top .center .right .wrapper .burger', function(){
			var status = $(this).attr('data-nav');

			if(status=="closed"){
				$(this).attr('data-nav', 'open');
				$('header .top .center .navigation-box').slideDown();
			}else{
				$(this).attr('data-nav', 'closed');
				$('header .top .center .navigation-box').slideUp();
			}
		});

		var $myDiv = $('#myNav');
		var $myBurger = $('#myBurger');

		$(document).on('click', function(event) {
	        if (!$myDiv.is(event.target) && !$myDiv.has(event.target).length && !$myBurger.is(event.target) && !$myBurger.has(event.target).length) {
	            $('header .top .center .right .wrapper .burger').attr('data-nav', 'closed');
				$('header .top .center .navigation-box').slideUp();
	        }
	    });
	}

	run(){
		this.openCloseInit();
	}
}

class MainSlider{
	constructor(){
		this.owl;
	}

	setBoxHeight(){
		var total = parseInt($(window).height());
		var minusHeader = total - 110;

		$('main .main-slider-box').css('height', minusHeader+'px');
		$('main .main-slider-box #main-slider').css('height', minusHeader+'px');

		this.owl = $('main .main-slider-box #main-slider').owlCarousel({
			autoplay: true,
        	smartSpeed:1500,
		    loop:true,
		    margin:0,
		    nav:false,
		    dots: true,
        	dotsContainer: '.dots-box',
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
	}

	changeTextAfterSlide(){
		this.owl.on('changed.owl.carousel', function(event){
	        var activeSlide = event.item.index + 1; 
	        var title = $('.owl-carousel .owl-item').eq(event.item.index).find('.item').data('title'); 
	        var text = $('.owl-carousel .owl-item').eq(event.item.index).find('.item').data('text'); 
	        var href = $('.owl-carousel .owl-item').eq(event.item.index).find('.item').data('href'); 
	        
	        $('main .main-slider-box .overlay .center .middle .wrapper .text h1').text(title);
	        $('main .main-slider-box .overlay .center .middle .wrapper .text p').text(text);
	        $('main .main-slider-box .overlay .center .middle .wrapper .text .readmore').attr('href', href);
	    });
	}

	run(){
		this.setBoxHeight();
		this.changeTextAfterSlide();
	}
}

class Mobile{
	constructor(){
		this.opening = false;
	}

	languageMove(){
		
	}

	run(){
		if($(window).width() <= 960){
			this.languageMove();
		}
	}
}

/* VisiableTracker */
var visiableTracker = new VisiableTracker;
visiableTracker.run();

/* LanguageBox */
var languageBox = new LanguageBox;
languageBox.run();

/* Navigation */
var navigation = new Navigation;
navigation.run();

/* MainSlider */
var mainSlider = new MainSlider;
mainSlider.run();

/* Mobile */
var mobile = new Mobile;
mobile.run();