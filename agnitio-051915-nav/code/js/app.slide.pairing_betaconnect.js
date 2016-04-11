document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.pairing_betaconnect = {
		elements: {
			stage: '#democontainer',
			iPhone: '.iphonecontainer',
			page4: '.p4',
			page4a: '.p4a',
			page4b: '.p4b',
			page4c: '.p4c',
			unpair: '.btnunpair',
			copy4: '.c4',
			copy4b: '.c4b',
			placeholder: '.deviceshot',
			videoElement: '#bgvid',
			bluetooth: '.gif',
			rep5: '.b5',
			rep5b: '.b5b',
			playBtn: '#btnplay',
			nextBtn: '.btnnextleft'
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			app.addEvent('tap', slide.powerDevice, slide.element.playBtn);
			app.addEvent('tap', slide.unpairDevice, slide.element.unpair);
			app.addEvent('tap', slide.nextSlide, slide.element.nextBtn);
			var endtime = 8;
    		app.addEvent('ended', function(event) {
    			util.addClass(slide.element.bluetooth, 'fadeIn');
    			util.addClass(slide.element.rep5b, 'fadeInRight');
    			util.addClass(slide.element.playBtn, 'hide');
    		}, slide.element.videoElement);
			slide.startScene();
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

		startScene: function(event) {
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.addClass(slide.element.page4, 'fadeIn');
			util.addClass(slide.element.iPhone, 'slideRight');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.placeholder, 'fadeIn');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.copy4, 'bounceInDown');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.rep5, 'fadeInLeft');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.playBtn, 'bounceInDown');
							app.addEvent('webkitAnimationEnd', function(event) {
								util.addClass(slide.element.copy4, 'bounceInDown');
							}, slide.element.playBtn);
						}, slide.element.rep5);
					}, slide.element.copy4);
				}, slide.element.placeholder);
			}, slide.element.iPhone);
		},
		
		powerDevice: function(event) {
			slide.element.videoElement.play();
			util.addClass(slide.element.videoElement, 'longFadeIn');
			util.removeClass(slide.element.placeholder, 'fadeIn');
			util.addClass(slide.element.placeholder, 'longFadeOut');
			util.addClass(this, 'hide');
			util.addClass(slide.element.rep5, 'fadeOut');			
			util.removeClass(slide.element.copy4, 'bounceInDown');
			util.addClass(slide.element.copy4, 'bounceOutLeft');
			util.addClass(slide.element.page4a, 'hide');
			util.addClass(slide.element.page4b, 'show');
			util.addClass(slide.element.playBtn, 'bounceOutUp');
		},

		unpairDevice: function(event) {
			util.addClass(this, 'hide');
			slide.element.videoElement.currentTime = 8;
			util.addClass(slide.element.rep5b, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.page4c, 'show');
				util.addClass(slide.element.copy4b, 'bounceInLeft');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.nextBtn, 'bounceInLeft');
				}, slide.element.copy4b);
			}, slide.element.rep5b);
		},

		nextSlide: function(event) {
			util.removeClass(this, 'bounceInLeft');
			util.addClass(this, 'bounceOutLeft');
			util.addClass(slide.element.bluetooth, 'fadeOut');
			util.addClass(slide.element.videoElement, 'fadeOut');
			slide.element.videoElement.pause();
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.copy4b, 'bounceInLeft');
				util.addClass(slide.element.copy4b, 'bounceOutUp');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.page4, 'fadeOut');
					util.addClass(slide.element.iPhone, 'slideLeft');
					app.addEvent('webkitAnimationEnd', function(event) {
						app.collection.next();
					}, slide.element.iPhone);
				}, slide.element.copy4b);
			}, slide.element.videoElement);
		},
 
		onExit: function(element) {
			util.removeClass(slide.element.bluetooth, 'fadeIn');
    		util.removeClass(slide.element.rep5b, 'fadeInRight');

			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.removeClass(slide.element.page4, 'fadeIn');
			util.removeClass(slide.element.iPhone, 'slideRight');
			util.removeClass(slide.element.placeholder, 'fadeIn');
			util.removeClass(slide.element.copy4, 'bounceInDown');
			util.removeClass(slide.element.rep5, 'fadeInLeft');
			util.removeClass(slide.element.playBtn, 'bounceInDown'); //duplicate **
			util.removeClass(slide.element.copy4, 'bounceInDown');

			util.removeClass(slide.element.videoElement, 'longFadeIn');
			util.removeClass(slide.element.placeholder, 'fadeIn');
			util.removeClass(slide.element.placeholder, 'longFadeOut');
			util.removeClass(slide.element.playBtn, 'hide'); //duplicate **
			util.removeClass(slide.element.rep5, 'fadeOut');
			util.removeClass(slide.element.copy4, 'bounceOutLeft');
			util.removeClass(slide.element.page4a, 'hide');
			util.removeClass(slide.element.page4b, 'show');
			util.removeClass(slide.element.playBtn, 'bounceOutUp'); //duplicate **

			util.removeClass(slide.element.unpair, 'hide');
			util.removeClass(slide.element.rep5b, 'fadeOut');
			util.removeClass(slide.element.page4c, 'show');
			util.removeClass(slide.element.copy4b, 'bounceInLeft');
			util.removeClass(slide.element.nextBtn, 'bounceInLeft');

			util.removeClass(slide.element.nextBtn, 'bounceOutLeft');
			util.removeClass(slide.element.bluetooth, 'fadeOut');
			util.removeClass(slide.element.videoElement, 'fadeOut');
			util.removeClass(slide.element.copy4b, 'bounceOutUp');
			util.removeClass(slide.element.iPhone, 'slideLeft');
			util.removeClass(slide.element.page4, 'fadeOut');
		}
	};
});

