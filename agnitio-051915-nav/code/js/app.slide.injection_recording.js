document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.injection_recording = {
		elements: {
			stage: '#democontainer',
			iPhone: '.iphonecontainer',
			page5: '.p5', page5a: '.p5a', page5b: '.p5b', page5c: '.p5c', page5d: '.p5d',
			copy5: '.c5', copy5a: '.c5a', copy5b: '.c5b', copy5c: '.c5c', copy5c2: '.c5c2',
			copy5d: '.c5d', copy5e: '.c5e',
			videoElement: '#bgvid2',
			rep5c: '.b5c',
			rep5d: '.b5d',
			placeholder: '.screenshot',
			confirmation: '.btnyes',
			powerBtn: '.btnPower',
			sync: '.sync',
			nextBtn: '.btnnext',
			nextBtn2: '.btnnext2',
			nextBtn3: '.btnnext3',
			nextBtn4: '.btnnext5'
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			app.addEvent('tap', slide.nextSlide, slide.element.nextBtn);
			app.addEvent('tap', slide.nextSlide2, slide.element.nextBtn2);
			app.addEvent('tap', slide.nextSlide3, slide.element.nextBtn3);
			app.addEvent('tap', slide.nextSlide4, slide.element.nextBtn4);
			app.addEvent('tap', slide.confirm, slide.element.confirmation);
			app.addEvent('tap', slide.beginVideo, slide.element.powerBtn);

			slide.startApp();
		},

		shownav: function(event) {
			if(util.hasClass(menubtn, 'pullup')) {
				util.removeClass(menubtn, 'pullupauto');
				util.removeClass(mainmenu, 'pullupauto');
				util.removeClass(menubtn, 'pullup');
				util.addClass(menubtn, 'pulldown');
				util.removeClass(mainmenu, 'pullup');
				util.addClass(mainmenu, 'pulldown');
			} else {
				util.removeClass(menubtn, 'pullupauto');
				util.removeClass(mainmenu, 'pullupauto');
				util.removeClass(menubtn, 'pulldown');
				util.addClass(menubtn, 'pullup');
				util.removeClass(mainmenu, 'pulldown');
				util.addClass(mainmenu, 'pullup');
			}
		},

		startApp: function(event) {
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.removeClass(slide.element.iPhone, 'slideRight');
			util.addClass(slide.element.iPhone, 'slideLeft');
			util.addClass(slide.element.page5, 'fadeIn');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.copy5, 'bounceInDown');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.nextBtn, 'bounceInRight');
				}, slide.element.copy5);
			}, slide.element.page5);
		},

		nextSlide: function(event) {
			util.removeClass(slide.element.nextBtn, 'bounceInRight');
			util.addClass(slide.element.nextBtn, 'bounceOutRight');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.nextBtn, 'hide');
				util.addClass(slide.element.copy5, 'bounceOutRight');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.page5a, 'scroll');
					util.addClass(slide.element.page5a, 'fadeOut');/*reverseScroll*/
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.page5b, 'fadeIn');
						util.addClass(slide.element.copy5b, 'bounceInRight');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.nextBtn2, 'bounceInRight');
						}, slide.element.copy5b);
					}, slide.element.page5a);
				}, slide.element.copy5);
			}, slide.element.nextBtn);
		},

		nextSlide2: function(event) {
			util.removeClass(slide.element.nextBtn2, 'bounceInRight');
			util.addClass(slide.element.nextBtn2, 'bounceOutRight');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.nextBtn2, 'hide');
				util.removeClass(slide.element.copy5b, 'bounceInRight');
				util.addClass(slide.element.copy5b, 'bounceOutRight');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.placeholder, 'fadeIn');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.removeClass(slide.element.iPhone, 'slideLeft');
						util.addClass(slide.element.iPhone, 'slideOutLeftCustom');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.rep5d, 'fadeInRight');
							var endtime = 1;
							slide.element.videoElement.play();
						}, slide.element.iPhone);
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.powerBtn, 'show');
						}, slide.element.rep5d);
					}, slide.element.placeholder);
				}, slide.element.copy5b);
			}, slide.element.nextBtn2);
		},

		beginVideo: function(event) {
			util.removeClass(slide.element.powerBtn, 'show');
			util.addClass(slide.element.powerBtn, 'hide');
			var endtime = 14;
			slide.element.videoElement.play();
			util.addClass(slide.element.videoElement, 'longerFadeIn');
			util.removeClass(slide.element.placeholder, 'fadeIn');
			util.addClass(slide.element.placeholder, 'longerFadeOut');
			util.removeClass(slide.element.rep5d, 'fadeInLeft');
			util.addClass(slide.element.rep5d, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.copy5c, 'bounceInRight paddLeftCustom');
				app.addEvent('timeupdate', function() {
					if (this.currentTime >= endtime) {
    				    util.addClass(slide.element.sync, 'slideDown');
    				    util.removeClass(slide.element.iPhone, 'slideOutLeftCustom');
						util.addClass(slide.element.iPhone, 'slideInLeftCustom');
						app.addEvent('webkitAnimationEnd', function(event) {
							slide.element.videoElement.pause();
							util.addClass(slide.element.copy5c2, 'bounceInRight');
						}, slide.element.iPhone);
    				}
    			}, slide.element.videoElement);
    			app.addEvent('webkitAnimationEnd', function(event) {
    				util.addClass(slide.element.nextBtn3, 'bounceInRight');
    			}, slide.element.copy5c2);
			}, slide.element.rep5d);
		},

		nextSlide3: function(event) {
			util.removeClass(slide.element.nextBtn3, 'bounceInRight');
			util.addClass(slide.element.nextBtn3, 'bounceOutRight');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.nextBtn3, 'bounceOutRight');
				util.addClass(slide.element.nextBtn3, 'hide');
				util.removeClass(slide.element.videoElement, 'fadeIn');
				util.addClass(slide.element.videoElement, 'fadeOut');
				util.removeClass(slide.element.copy5c, 'bounceInRight');
				util.addClass(slide.element.copy5c, 'bounceOutRight');
				util.removeClass(slide.element.copy5c2, 'bounceInRight');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.copy5c2, 'hide');
				}, slide.element.copy5c2);
				util.addClass(slide.element.copy5c2, 'bounceOutRight');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.copy5c, 'bounceOutRight');
					util.addClass(slide.element.copy5c, 'hide');
					util.addClass(slide.element.page5c, 'fadeIn');
					util.addClass(slide.element.confirmation, 'show');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.copy5d, 'bounceInRight');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.rep5c, 'fadeInLeft');
						}, slide.element.copy5d);
					}, slide.element.page5c);
				}, slide.element.copy5c);
			}, slide.element.nextBtn3);
		},

		confirm: function(event) {
			util.addClass(slide.element.confirmation, 'hide');
			util.addClass(slide.element.rep5c, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.copy5d, 'bounceInRight');
				util.addClass(slide.element.copy5d, 'bounceOutRight');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.page5d, 'fadeIn');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.copy5e, 'bounceInRight');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.nextBtn4, 'bounceInRight');
						}, slide.element.copy5e);
					}, slide.element.page5d);
				}, slide.element.copy5d);
			}, slide.element.rep5c);
		},

		nextSlide4: function(event) {
			util.removeClass(slide.element.nextBtn4, 'bounceInRight');
			util.addClass(slide.element.nextBtn4, 'bounceOutRight');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.nextBtn4, 'bounceOutRight');
				util.addClass(slide.element.nextBtn4, 'hide');
				util.removeClass(slide.element.copy5e, 'bounceInRight');
				util.addClass(slide.element.copy5e, 'bounceOutUp');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.iPhone, 'slideLeft');
					util.addClass(slide.element.iPhone, 'slideRight');
					util.removeClass(slide.element.page5, 'fadeIn');
					util.addClass(slide.element.page5, 'fadeOut');
					app.collection.next();
				}, slide.element.copy5e);
			}, slide.element.nextBtn4);
		},

		onExit: function(element) {
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.removeClass(slide.element.iPhone, 'slideLeft');
			util.removeClass(slide.element.page5, 'fadeIn');
			util.removeClass(slide.element.copy5, 'bounceInDown');
			util.removeClass(slide.element.nextBtn, 'bounceInRight');

			util.removeClass(slide.element.nextBtn, 'bounceOutRight');
			util.removeClass(slide.element.nextBtn, 'hide');
			util.removeClass(slide.element.copy5, 'bounceOutRight');
			util.removeClass(slide.element.page5a, 'fadeOut');
			util.removeClass(slide.element.page5b, 'fadeIn');
			util.removeClass(slide.element.copy5b, 'bounceInRight');
			util.removeClass(slide.element.nextBtn2, 'bounceInRight');

			util.removeClass(slide.element.nextBtn2, 'bounceOutRight');
			util.removeClass(slide.element.nextBtn2, 'hide');
			util.removeClass(slide.element.copy5b, 'bounceOutRight');
			util.removeClass(slide.element.placeholder, 'fadeIn');
			util.removeClass(slide.element.iPhone, 'slideOutLeftCustom');
			util.removeClass(slide.element.rep5d, 'fadeInRight');
			util.removeClass(slide.element.powerBtn, 'show');

			util.removeClass(slide.element.powerBtn, 'hide');
			util.removeClass(slide.element.videoElement, 'longerFadeIn');
			util.removeClass(slide.element.placeholder, 'longerFadeOut');
			util.removeClass(slide.element.rep5d, 'fadeOut');
			util.removeClass(slide.element.copy5c, 'bounceInRight paddLeftCustom');
			util.removeClass(slide.element.sync, 'slideDown');
			util.removeClass(slide.element.iPhone, 'slideInLeftCustom');
			util.removeClass(slide.element.copy5c2, 'bounceInRight');
			util.removeClass(slide.element.nextBtn3, 'bounceInRight');

			util.removeClass(slide.element.nextBtn3, 'bounceOutRight');
			util.removeClass(slide.element.nextBtn3, 'hide');
			util.removeClass(slide.element.videoElement, 'fadeOut');
			util.removeClass(slide.element.copy5c, 'bounceOutRight');
			util.removeClass(slide.element.copy5c2, 'hide');
			util.removeClass(slide.element.copy5c2, 'bounceOutRight');
			util.removeClass(slide.element.copy5c, 'hide');
			util.removeClass(slide.element.page5c, 'fadeIn');
			util.removeClass(slide.element.confirmation, 'show');
			util.removeClass(slide.element.copy5d, 'bounceInRight');
			util.removeClass(slide.element.rep5c, 'fadeInLeft');

			util.removeClass(slide.element.confirmation, 'hide');
			util.removeClass(slide.element.rep5c, 'fadeOut');
			util.removeClass(slide.element.copy5d, 'bounceOutRight');
			util.removeClass(slide.element.page5d, 'fadeIn');
			util.removeClass(slide.element.copy5e, 'bounceInRight');
			util.removeClass(slide.element.nextBtn4, 'bounceInRight');

			util.removeClass(slide.element.nextBtn4, 'bounceOutRight');
			util.removeClass(slide.element.nextBtn4, 'hide');
			util.removeClass(slide.element.copy5e, 'bounceOutUp');
			util.removeClass(slide.element.iPhone, 'slideRight');
			util.removeClass(slide.element.page5, 'fadeOut');
		}
	};
});