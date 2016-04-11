document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.sharing_data = {
		elements: {
			stage: '#democontainer',
			iPhone: '.iphonecontainer',
			page8: '.p8',
			page8a: '.p8a',
			page8b: '.p8b',
			page8c: '.p8c',
			page9: '.p9',
			copy8: '.c8',
			copy9: '.c9',
			cloud: '.gif2',
			rep: '.b8',
			rep1: '.b8b',
			rep2: '.b8c',
			dataBtn: '.btndata',
			hcpBtn: '.btnhcp',
			saveBtn: '.btndatasave',
			nextBtn: '.btnnext9'
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			app.addEvent('tap', slide.dataApp, slide.element.dataBtn);
			app.addEvent('tap', slide.hcpApp, slide.element.hcpBtn);
			app.addEvent('tap', slide.saveApp, slide.element.saveBtn);
			app.addEvent('tap', slide.nextSlide, slide.element.nextBtn);

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
			util.addClass(slide.element.page8, 'fadeIn');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.copy8, 'bounceInDown');
				util.addClass(slide.element.dataBtn, 'show');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.rep, 'fadeInRight');
				}, slide.element.copy8);
			}, slide.element.page8);
		},

		dataApp: function(event) {
			util.addClass(slide.element.dataBtn, 'hide');
			util.removeClass(slide.element.rep, 'fadeInRight');
			util.addClass(slide.element.rep, 'fadeOut');
			util.addClass(slide.element.page8b, 'show');
			util.addClass(slide.element.hcpBtn, 'show');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.rep1, 'fadeInRight');
			}, slide.element.rep);
		},

		hcpApp: function(event) {
			util.addClass(slide.element.hcpBtn, 'hide');
			util.removeClass(slide.element.rep1, 'fadeInRight');
			util.addClass(slide.element.rep1, 'fadeOut');
			util.addClass(slide.element.page8c, 'show');
			util.addClass(slide.element.saveBtn, 'show');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.rep2, 'fadeInRight');
			}, slide.element.rep1);
		},

		saveApp: function(event) {
			util.removeClass(slide.element.saveBtn, 'hide');
			util.removeClass(slide.element.rep2, 'fadeInRight');
			util.addClass(slide.element.rep2, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.copy8, 'bounceInDown');
				util.addClass(slide.element.copy8, 'bounceOutLeft');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.iPhone, 'slideRight');
					util.addClass(slide.element.iPhone, 'slideLeft');
					util.addClass(slide.element.page8, 'fadeOut');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.page9, 'fadeIn');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.cloud, 'fadeInRight');
							app.addEvent('webkitAnimationEnd', function(event) {
								util.addClass(slide.element.copy9, 'bounceInRight');
								app.addEvent('webkitAnimationEnd', function(event) {
									util.addClass(slide.element.nextBtn, 'bounceInRight');
								}, slide.element.copy9);
							}, slide.element.cloud);
						}, slide.element.page9);
					}, slide.element.page8);
				}, slide.element.copy8);
			}, slide.element.rep2);
		},

		nextSlide: function(event) {
			util.removeClass(slide.element.nextBtn, 'bounceInRight');
			util.addClass(slide.element.nextBtn, 'bounceOutRight');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.cloud, 'fadeInRight');
				util.addClass(slide.element.cloud, 'fadeOutGif');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.copy9, 'bounceInRight');
					util.addClass(slide.element.copy9, 'bounceOutUp');
					app.addEvent('webkitAnimationEnd', function(event) {
						app.collection.next();
					}, slide.element.copy9);
				}, slide.element.cloud);
			}, slide.element.nextBtn);
		},

		onExit: function(element) {
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.removeClass(slide.element.iPhone, 'slideRight');
			util.removeClass(slide.element.page8, 'fadeIn');
			util.removeClass(slide.element.copy8, 'bounceInDown');
			util.removeClass(slide.element.dataBtn, 'show');
			util.removeClass(slide.element.rep, 'fadeInRight');

			util.removeClass(slide.element.dataBtn, 'hide');
			util.removeClass(slide.element.rep, 'fadeOut');
			util.removeClass(slide.element.page8b, 'show');
			util.removeClass(slide.element.hcpBtn, 'show');
			util.removeClass(slide.element.rep1, 'fadeInRight');

			util.removeClass(slide.element.hcpBtn, 'hide');
			util.removeClass(slide.element.rep1, 'fadeOut');
			util.removeClass(slide.element.page8c, 'show');
			util.removeClass(slide.element.saveBtn, 'show');
			util.removeClass(slide.element.rep2, 'fadeInRight');

			util.removeClass(slide.element.rep2, 'fadeOut');
			util.removeClass(slide.element.copy8, 'bounceOutLeft');
			util.removeClass(slide.element.iPhone, 'slideLeft');
			util.removeClass(slide.element.page8, 'fadeOut');
			util.removeClass(slide.element.page9, 'fadeIn');
			util.removeClass(slide.element.cloud, 'fadeInRight');
			util.removeClass(slide.element.copy9, 'bounceInRight');
			util.removeClass(slide.element.nextBtn, 'bounceInRight');

			util.removeClass(slide.element.nextBtn, 'bounceOutRight');
			util.removeClass(slide.element.cloud, 'fadeOutGif');
			util.removeClass(slide.element.copy9, 'bounceOutUp');
		}
	};
});