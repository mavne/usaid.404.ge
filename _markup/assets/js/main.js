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

/* Mobile */
var mobile = new Mobile;
mobile.run();