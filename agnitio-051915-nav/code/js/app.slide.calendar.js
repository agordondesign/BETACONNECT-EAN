document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.calendar = {
		elements: {
			stage: '#democontainer',
			iPhone: '.iphonecontainer',
			key: '.key',
			key1: '.schedule',
			key2: '.notrecorded',
			key3: '.recorded',
			key4: '.target',
			key5: '.flag',
			page6: '.p6',
			page6a: '.p6a',
			page6b: '.p6b',
			page6c: '.p6c',
			page6d: '.p6d',
			page6e: '.p6e',
			page6f: '.p6f',
			page6g: '.p6g',
			page6h: '.p6h',
			copy6: '.c6',
			copy6b: '.c6b',
			nextBtn: '.btnnext6',
			nextBtn2: '.btnnext7'
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			app.addEvent('tap', slide.nextSlide, slide.element.nextBtn);
			app.addEvent('tap', slide.nextSlide2, slide.element.nextBtn2);

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
			util.addClass(slide.element.iPhone, 'slideRight');
			util.addClass(slide.element.page6, 'fadeIn');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.copy6b, 'bounceInDown');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.key, 'bounceInDown');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.key1, 'fadeIn');
						util.addClass(slide.element.page6a, 'fadeOut');
						util.addClass(slide.element.page6c, 'longdelay');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.key2, 'fadeIn');
							util.removeClass(slide.element.page6c, 'longdelay');
							util.addClass(slide.element.page6c, 'fadeOut');
							app.addEvent('webkitAnimationEnd', function(event) {
								util.addClass(slide.element.page6d, 'longdelay');
								app.addEvent('webkitAnimationEnd', function(event) {
									util.addClass(slide.element.key3, 'fadeIn');
									util.removeClass(slide.element.page6d, 'longdelay');
									util.addClass(slide.element.page6d, 'fadeOut');
									app.addEvent('webkitAnimationEnd', function(event) {
										util.addClass(slide.element.page6e, 'longdelay');
										app.addEvent('webkitAnimationEnd', function(event) {
											util.addClass(slide.element.key4, 'fadeIn');
											util.removeClass(slide.element.page6e, 'longdelay');
											util.addClass(slide.element.page6e, 'fadeOut');
											app.addEvent('webkitAnimationEnd', function(event) {
												util.addClass(slide.element.page6g, 'longdelay');
												app.addEvent('webkitAnimationEnd', function(event) {
													util.addClass(slide.element.key5, 'fadeIn');
													util.removeClass(slide.element.page6g, 'longdelay');
													util.addClass(slide.element.page6g, 'fadeOut');
													app.addEvent('webkitAnimationEnd', function(event) {
														util.addClass(slide.element.page6h, 'longdelay');
														app.addEvent('webkitAnimationEnd', function(event) {
															util.removeClass(slide.element.page6h, 'longdelay');
															util.addClass(slide.element.page6h, 'fadeOut');
															util.addClass(slide.element.nextBtn, 'bounceInLeft');
														}, slide.element.page6h);
													}, slide.element.page6g);
												}, slide.element.page6g);
											}, slide.element.page6e);
										}, slide.element.page6e);
									}, slide.element.page6d);
								}, slide.element.page6d);
							}, slide.element.page6c);
						}, slide.element.page6c);
					}, slide.element.key);
				}, slide.element.copy6b);
			}, slide.element.page6);
		},

		nextSlide: function(event) {
			util.removeClass(slide.element.nextBtn, 'bounceInLeft');
			util.addClass(slide.element.nextBtn, 'bounceOutLeft');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.nextBtn, 'hide');
				util.removeClass(slide.element.copy6b, 'bounceInDown');
				util.addClass(slide.element.copy6b, 'bounceOutLeft');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.copy6, 'bounceInLeft');
					util.addClass(slide.element.page6f, 'fadeOut');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.nextBtn2, 'bounceInLeft');
					}, slide.element.copy6);
				}, slide.element.copy6b);
			}, slide.element.nextBtn);
		},

		nextSlide2: function(event) {
			util.removeClass(slide.element.nextBtn2, 'bounceInLeft');
			util.addClass(slide.element.nextBtn2, 'bounceOutLeft');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.nextBtn2, 'hide');
				util.removeClass(slide.element.copy6, 'bounceInLeft');
				util.addClass(slide.element.copy6, 'bounceOutUp');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.iPhone, 'slideRight');
					util.addClass(slide.element.iPhone, 'slideLeft');
					util.addClass(slide.element.page6, 'fadeOut');
					app.collection.next();
				}, slide.element.copy6);
			}, slide.element.nextBtn2);
		},

		onExit: function(element) {
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.removeClass(slide.element.iPhone, 'slideRight');
			util.removeClass(slide.element.page6, 'fadeIn');
			util.removeClass(slide.element.copy6b, 'bounceInDown');
			util.removeClass(slide.element.key, 'bounceInDown');
			util.removeClass(slide.element.key1, 'fadeIn');
			util.removeClass(slide.element.page6a, 'fadeOut');
			util.removeClass(slide.element.page6c, 'longdelay');
			util.removeClass(slide.element.key2, 'fadeIn');
			util.removeClass(slide.element.page6c, 'fadeOut');
			util.removeClass(slide.element.page6d, 'longdelay');
			util.removeClass(slide.element.key3, 'fadeIn');
			util.removeClass(slide.element.page6d, 'fadeOut');
			util.removeClass(slide.element.page6e, 'longdelay');
			util.removeClass(slide.element.key4, 'fadeIn');
			util.removeClass(slide.element.page6e, 'fadeOut');
			util.removeClass(slide.element.page6g, 'longdelay');
			util.removeClass(slide.element.page6g, 'fadeOut');
			util.removeClass(slide.element.key5, 'fadeIn');
			util.removeClass(slide.element.page6g, 'fadeOut');
			util.removeClass(slide.element.page6h, 'longdelay');
			util.removeClass(slide.element.page6h, 'fadeOut');
			util.removeClass(slide.element.nextBtn, 'bounceInLeft');

			util.removeClass(slide.element.nextBtn, 'bounceOutLeft');
			util.removeClass(slide.element.nextBtn, 'hide');
			util.removeClass(slide.element.copy6b, 'bounceOutLeft');
			util.removeClass(slide.element.copy6, 'bounceInLeft');
			util.removeClass(slide.element.page6f, 'fadeOut');
			util.removeClass(slide.element.nextBtn2, 'bounceInLeft');

			util.removeClass(slide.element.nextBtn2, 'bounceOutLeft');
			util.removeClass(slide.element.nextBtn2, 'hide');
			util.removeClass(slide.element.copy6, 'bounceOutUp');
			util.removeClass(slide.element.iPhone, 'slideLeft');
			util.removeClass(slide.element.page6, 'fadeOut');
		}
	};
});