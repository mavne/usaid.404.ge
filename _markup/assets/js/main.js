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

		if($(window).width() <= 960){
			var minusHeader = total - 160;
		}else{
			var minusHeader = total - 110;
		}		

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

class News{
	constructor(){
		if($('main .news-box .cards .card').length == 5){
			$('main .news-box .cards').addClass('mouseHoverChangeScale');
		}else{
			$('main .news-box .cards').html('Please add 5 news...');
		}
	}

	forEachCards(scales, zIndexMaxId){
		$('main .news-box .mouseHoverChangeScale .card').each(function(){
			var cardI = $(this).attr('data-i');

			if(cardI==1){
				if(zIndexMaxId==1){
					var zIndex = 5;
				}else if(zIndexMaxId == 2){
					var zIndex = 4;
				}else if(zIndexMaxId == 3){
					var zIndex = 3;
				}else if(zIndexMaxId == 4){
					var zIndex = 2;
				}else if(zIndexMaxId == 5){
					var zIndex = 1;
				}

				$(this).css({'transform':'scale('+scales[0]+')', 'z-index': zIndex});
			}else if(cardI==2){
				if(zIndexMaxId==1){
					var zIndex = 4;
				}else if(zIndexMaxId == 2){
					var zIndex = 5;
				}else if(zIndexMaxId == 3){
					var zIndex = 4;
				}else if(zIndexMaxId == 4){
					var zIndex = 3;
				}else if(zIndexMaxId == 5){
					var zIndex = 2;
				}

				$(this).css({'transform':'scale('+scales[1]+')', 'z-index': zIndex});
			}else if(cardI==3){
				if(zIndexMaxId==1){
					var zIndex = 3;
				}else if(zIndexMaxId == 2){
					var zIndex = 4;
				}else if(zIndexMaxId == 3){
					var zIndex = 5;
				}else if(zIndexMaxId == 4){
					var zIndex = 4;
				}else if(zIndexMaxId == 5){
					var zIndex = 3;
				}

				$(this).css({'transform':'scale('+scales[2]+')', 'z-index': zIndex});
			}else if(cardI==4){
				if(zIndexMaxId==1){
					var zIndex = 2;
				}else if(zIndexMaxId == 2){
					var zIndex = 3;
				}else if(zIndexMaxId == 3){
					var zIndex = 4;
				}else if(zIndexMaxId == 4){
					var zIndex = 5;
				}else if(zIndexMaxId == 5){
					var zIndex = 4;
				}

				$(this).css({'transform':'scale('+scales[3]+')', 'z-index': zIndex});
			}else if(cardI==5){
				if(zIndexMaxId==1){
					var zIndex = 1;
				}else if(zIndexMaxId == 2){
					var zIndex = 2;
				}else if(zIndexMaxId == 3){
					var zIndex = 3;
				}else if(zIndexMaxId == 4){
					var zIndex = 4;
				}else if(zIndexMaxId == 5){
					var zIndex = 5;
				}

				$(this).css({'transform':'scale('+scales[4]+')', 'z-index': zIndex});
			}
		});
	}

	changeScalesInit(){
		var that = this;
		$(document).on('mouseenter', 'main .news-box .mouseHoverChangeScale .card', function(){
			$('main .news-box .mouseHoverChangeScale .card').removeClass('active');
			$(this).addClass('active');
			var i = $(this).attr('data-i');

			if(i==1){
				var scales = ['1.2', '1.15', '1.1', '1.05', '1.0'];
				that.forEachCards(scales, 1);
			}else if(i==2){
				var scales = ['1.15', '1.2', '1.15', '1.1', '1.05'];
				that.forEachCards(scales, 2);
			}else if(i==3){
				var scales = ['1.1', '1.15', '1.2', '1.15', '1.1'];
				that.forEachCards(scales, 3);
			}else if(i==4){
				var scales = ['1.0', '1.1', '1.15', '1.2', '1.15'];
				that.forEachCards(scales, 4);
			}else if(i==5){
				var scales = ['1.0', '1.05', '1.1', '1.15', '1.2'];
				that.forEachCards(scales, 5);
			}
		});
	}

	newsInsideSlider(){
		$('#news-slider').owlCarousel({
			autoplay: true,
        	smartSpeed:1500,
		    loop:true,
		    margin:0,
		    nav:false,
		    dots: true,
        	// dotsContainer: '.dots-box',
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

	run(){
		this.changeScalesInit();
		this.newsInsideSlider();
	}
}

class Mobile{
	constructor(){

	}

	searchOpenCloseInit(){
		$(document).on('click', '.mobile-search', function(){
			var opened = $(this).attr('data-opened');

			if(opened == "false"){
				$(this).attr('data-opened', 'true');
				$('header .top .center .right .wrapper form').slideDown();
			}else{
				$(this).attr('data-opened', 'false');
				$('header .top .center .right .wrapper form').slideUp();
			}
		}).stop();

		var $myDiv = $('header .top .center .right .wrapper form');
		var $myBurger = $('.mobile-search');

		$(document).on('click', function(event) {
	        if (!$myDiv.is(event.target) && !$myDiv.has(event.target).length && !$myBurger.is(event.target) && !$myBurger.has(event.target).length) {
	            $('.mobile-search').attr('data-opened', 'false');
				$('header .top .center .right .wrapper form').slideUp();
	        }
	    });
	}

	homeNewsInit(){
		$('main .news-box .mouseHoverChangeScale a').removeClass('card').addClass('item');
		$('main .news-box .mouseHoverChangeScale .clearer').remove();
		var html = $('main .news-box .mouseHoverChangeScale').html();
		$('main .news-box .mouseHoverChangeScale').remove();
		var newDiv = $("<div>").addClass('owl-carousel owl-theme').attr('id', 'mobileNewsSlider');

		newDiv.html(html);

		$('main .news-box .allnews').before(newDiv);	
		
		$('#mobileNewsSlider').owlCarousel({
			autoplay: true,
        	smartSpeed:1500,
		    loop:false,
		    margin:0,
		    nav:true,
		    dots: false,
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

	insideNewsMoreSliderInit(){
		var newDiv = $("<div>").addClass('owl-carousel owl-theme').attr('id', 'mobileNewsSlider');
		var html = '';
		$('.news-inside-page main .last-news .center .box .row .col-md-4').each(function(){
			html += $('a', this).prop('outerHTML');
		});

		newDiv.html(html);

		$('.news-inside-page main .last-news .center .box').after(newDiv);

		$('#mobileNewsSlider').owlCarousel({
			autoplay: true,
        	smartSpeed:1500,
		    loop:false,
		    nav:true,
		    dots: false,
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

	run(){
		if($(window).width() <= 960){
			this.searchOpenCloseInit();
			this.homeNewsInit();
			this.insideNewsMoreSliderInit();
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

/* News */
var news = new News;
news.run();

/* Mobile */
var mobile = new Mobile;
mobile.run();