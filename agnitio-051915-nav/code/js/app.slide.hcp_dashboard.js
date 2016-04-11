document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.hcp_dashboard = {
		elements: {
			stage: '#democontainer',
			nav: '.p10-1a',
			nav2: '.p10-1b',
			nav3: '.p10-1c',
			decoy: '.decoy',
			mac: '.iphonecontainer',
			macbook: '.macbook',
			iPhone: '.iphone',
			page: '.p10',
			pageA: '.p10a',
			page2: '.p10b',
			page3: '.p11',
			copy: '.c10a',
			copy2: '.c10',
			copy3: '.c11',
			rep: '.b9',
			rep2: '.b10',
			activityBtn: '.btnactivity',
			sendBtn: '.btnsend',
			nextBtn: '.btnnext10',
			nextBtn2: '.btnnext11',
			videoElement: '#bgvid3'
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			app.addEvent('tap', slide.activityApp, slide.element.activityBtn);
			app.addEvent('tap', slide.nextSlide, slide.element.nextBtn);
			app.addEvent('tap', slide.sendSlide, slide.element.sendBtn);
			app.addEvent('tap', slide.lastSlide, slide.element.nextBtn2);

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
			util.addClass(slide.element.iPhone, 'hide');
			util.addClass(slide.element.nav, 'longFadeIn');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.nav2, 'fadeIn longdelay');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.nav3, 'fadeIn');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.removeClass(slide.element.nav, 'longFadeIn');
						util.removeClass(slide.element.nav2, 'fadeIn longdelay');
						util.addClass(slide.element.nav, 'hide');
						util.addClass(slide.element.nav2, 'hide');
						util.removeClass(slide.element.nav3, 'fadeIn');
						util.addClass(slide.element.nav3, 'fadeOut');
						util.addClass(slide.element.page, 'fadeInVisible');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.mac, 'slideExit');
							util.addClass(slide.element.decoy, 'longerdelay');
							app.addEvent('webkitAnimationEnd', function(event) {
								util.addClass(slide.element.copy, 'bounceInDown');
								app.addEvent('webkitAnimationEnd', function(event) {
									util.addClass(slide.element.rep, 'fadeInRight');
									util.addClass(slide.element.activityBtn, 'show');
								}, slide.element.copy);
							}, slide.element.decoy);
						}, slide.element.page);
					}, slide.element.nav3);
				}, slide.element.nav2);
			}, slide.element.nav);
		},

		activityApp: function(event) {
			util.removeClass(slide.element.activityBtn, 'show');
			util.addClass(slide.element.activityBtn, 'hide');
			util.addClass(slide.element.activityBtn, 'bounceOutLeft')
			util.removeClass(slide.element.rep, 'fadeInRight');
			util.addClass(slide.element.rep, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.copy, 'bounceInDown');
				util.addClass(slide.element.copy, 'bounceOutLeft');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.pageA, 'fadeOut');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.pageA, 'hide');
						util.addClass(slide.element.page2, 'fadeIn');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.copy2, 'bounceInLeft');
							app.addEvent('webkitAnimationEnd', function(event) {
								util.removeClass(slide.element.page2, 'fadeIn');
								util.addClass(slide.element.page2, 'scrollhistory');
								app.addEvent('webkitAnimationEnd', function(event) {
									util.addClass(slide.element.nextBtn, 'bounceInLeft');
								}, slide.element.page2);
							}, slide.element.copy2);
						}, slide.element.page2);
					}, slide.element.pageA);
				}, slide.element.copy);
			}, slide.element.rep);
		},

		nextSlide: function(event) {
			util.removeClass(slide.element.nextBtn, 'bounceInLeft');
			util.addClass(slide.element.nextBtn, 'bounceOutLeft');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.copy2, 'bounceInLeft');
				util.addClass(slide.element.copy2, 'bounceOutLeft');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.copy2, 'hide');
					util.removeClass(slide.element.page2, 'scrollhistory');
					util.addClass(slide.element.page2, 'scrollhistoryFadeOut');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.nextBtn, 'hide');
						util.addClass(slide.element.page3, 'fadeIn');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.copy3, 'bounceInLeft');
							app.addEvent('webkitAnimationEnd', function(event) {
								util.addClass(slide.element.rep2, 'fadeInRight');
								util.addClass(slide.element.sendBtn, 'show');
							}, slide.element.copy3);
						}, slide.element.page3);
					}, slide.element.page2);
				}, slide.element.copy2);
			}, slide.element.nextBtn);
		},
		
		sendSlide: function(event) {
			util.removeClass(slide.element.sendBtn, 'show');
			util.addClass(slide.element.sendBtn, 'hide');
			util.removeClass(slide.element.rep2, 'fadeInRight');
			util.addClass(slide.element.rep2, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.iPhone, 'hide');
				util.addClass(slide.element.iPhone, 'show');
				util.removeClass(slide.element.mac, 'slideExit');
				util.addClass(slide.element.mac, 'slideExitRight');
				util.addClass(slide.element.iPhone, 'slideInRight');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.nextBtn2, 'bounceInLeft');
				}, slide.element.mac);
			}, slide.element.rep2);
		},
		
		lastSlide: function(event) {
			util.removeClass(slide.element.nextBtn2, 'bounceInLeft');
			util.addClass(slide.element.nextBtn2, 'bounceOutLeft');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.nextBtn2, 'hide');
				util.removeClass(slide.element.copy3, 'bounceInLeft');
				util.addClass(slide.element.copy3, 'bounceOutUp');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.macbook, 'slideOutLeft');
					util.removeClass(slide.element.iPhone, 'slideInRight');
					util.addClass(slide.element.iPhone, 'slideInRightOut');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.removeClass(slide.element.videoElement, 'hide');
						//slide.element.videoElement.play();
						app.goTo('default', 'conclusion');
					}, slide.element.macbook);
				}, slide.element.copy3);
			}, slide.element.nextBtn2);
		},
		
		onExit: function(element) {
			slide.element.videoElement.pause();
			slide.element.videoElement.currentTime = 0;
			util.addClass(slide.element.videoElement, 'hide');

			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.removeClass(slide.element.iPhone, 'hide');
			util.removeClass(slide.element.nav, 'longFadeIn');
			util.removeClass(slide.element.nav2, 'fadeIn longdelay');
			util.removeClass(slide.element.nav3, 'fadeIn');
			util.removeClass(slide.element.nav, 'hide');
			util.removeClass(slide.element.nav2, 'hide');
			util.removeClass(slide.element.nav3, 'fadeOut');
			util.removeClass(slide.element.page, 'fadeInVisible');
			util.removeClass(slide.element.mac, 'slideExit');
			util.removeClass(slide.element.decoy, 'longerdelay');
			util.removeClass(slide.element.copy, 'bounceInDown');
			util.removeClass(slide.element.rep, 'fadeInRight');
			util.removeClass(slide.element.activityBtn, 'show');

			util.removeClass(slide.element.activityBtn, 'hide');
			util.removeClass(slide.element.activityBtn, 'bounceOutLeft')
			util.removeClass(slide.element.rep, 'fadeOut');
			util.removeClass(slide.element.copy, 'bounceOutLeft');
			util.removeClass(slide.element.pageA, 'fadeOut');
			util.removeClass(slide.element.pageA, 'hide');
			util.removeClass(slide.element.page2, 'fadeIn');
			util.removeClass(slide.element.copy2, 'bounceInLeft');
			util.removeClass(slide.element.page2, 'scrollhistory');
			util.removeClass(slide.element.nextBtn, 'bounceInLeft');

			util.removeClass(slide.element.nextBtn, 'bounceOutLeft');
			util.removeClass(slide.element.copy2, 'bounceOutLeft');
			util.removeClass(slide.element.copy2, 'hide');
			util.removeClass(slide.element.page2, 'scrollhistoryFadeOut');
			util.removeClass(slide.element.nextBtn, 'hide');
			util.removeClass(slide.element.page3, 'fadeIn');
			util.removeClass(slide.element.copy3, 'bounceInLeft');
			util.removeClass(slide.element.rep2, 'fadeInRight');
			util.removeClass(slide.element.sendBtn, 'show');

			util.removeClass(slide.element.sendBtn, 'hide');
			util.removeClass(slide.element.rep2, 'fadeOut');
			util.removeClass(slide.element.iPhone, 'show');
			util.removeClass(slide.element.mac, 'slideExitRight');
			util.removeClass(slide.element.iPhone, 'slideInRight');
			util.removeClass(slide.element.nextBtn2, 'bounceInLeft');

			util.removeClass(slide.element.nextBtn2, 'bounceOutLeft');
			util.removeClass(slide.element.nextBtn2, 'hide');
			util.removeClass(slide.element.copy3, 'bounceOutUp');
			util.removeClass(slide.element.macbook, 'slideOutLeft');
			util.removeClass(slide.element.iPhone, 'slideInRightOut');
		}
	};
});