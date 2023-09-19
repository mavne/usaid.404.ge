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

/* Mobile */
var mobile = new Mobile;
mobile.run();