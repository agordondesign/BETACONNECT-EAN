document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.wellness_tracker = {
		elements: {
			stage: '#democontainer',
			iPhone: '.iphonecontainer',
			page7: '.p7',
			page7b: '.p7b',
			n2: '.n2', n3: '.n3', n4: '.n4', n5: '.n5',
			n6: '.n6', n7: '.n7', n8: '.n8', n9: '.n9', n10: '.n10',
			n11: '.n11', n12: '.n12',
			copy7: '.c7',
			rep: '.b7b',
			rep2: '.b7c',
			progress: '.btnprogress',
			saveBtn: '.btnsave'
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			app.addEvent('tap', slide.progressApp, slide.element.progress);
			app.addEvent('tap', slide.saveApp, slide.element.saveBtn);

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
			util.addClass(slide.element.page7, 'fadeIn');
			util.addClass(slide.element.page7b, 'fadeIn');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.progress, 'show');
				app.addEvent('tap', slide.progressApp, slide.element.progress);
				util.addClass(slide.element.copy7, 'bounceInDown');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.rep, 'fadeInLeft');
				}, slide.element.copy7);
			}, slide.element.page7);
		},

		progressApp: function(event) {
			util.addClass(slide.element.progress, 'hide');
			util.removeClass(slide.element.rep, 'fadeInLeft');
			util.addClass(slide.element.rep, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.page7b, 'fadeIn');
				util.addClass(slide.element.page7b, 'scrollWellness');
				util.addClass(slide.element.n2, 'e2');
				util.addClass(slide.element.n3, 'e3');
				util.addClass(slide.element.n4, 'e4');
				util.addClass(slide.element.n5, 'e5');
				util.addClass(slide.element.n6, 'e6');
				util.addClass(slide.element.n7, 'e7');
				util.addClass(slide.element.n8, 'e8');
				util.addClass(slide.element.n9, 'e9');
				util.addClass(slide.element.n10, 'e10');
				util.addClass(slide.element.n11, 'e11');
				util.addClass(slide.element.n12, 'e12');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.saveBtn, 'show');
					app.addEvent('tap', slide.saveApp, slide.element.saveBtn);
					util.addClass(slide.element.rep2, 'fadeInLeft');
				}, slide.element.n12);
			}, slide.element.rep);
		},

		saveApp: function(event) {
			util.removeClass(slide.element.rep2, 'fadeInLeft');
			util.addClass(slide.element.rep2, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.removeClass(slide.element.copy7, 'bounceInDown');
				util.addClass(slide.element.copy7, 'bounceOutRight');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.page7b, 'scrollWellness');
					app.collection.next();
				}, slide.element.copy7);
			}, slide.element.rep2);
		},

		onExit: function(element) { 
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
			util.removeClass(slide.element.iPhone, 'slideLeft');
			util.removeClass(slide.element.page7, 'fadeIn');
			util.removeClass(slide.element.page7b, 'fadeIn');
			util.removeClass(slide.element.progress, 'show');
			util.removeClass(slide.element.copy7, 'bounceInDown');
			util.removeClass(slide.element.rep, 'fadeInLeft');

			util.removeClass(slide.element.progress, 'hide');
			util.removeClass(slide.element.rep, 'fadeOut');
			util.removeClass(slide.element.page7b, 'scrollWellness');
			util.removeClass(slide.element.n2, 'e2');
			util.removeClass(slide.element.n3, 'e3');
			util.removeClass(slide.element.n4, 'e4');
			util.removeClass(slide.element.n5, 'e5');
			util.removeClass(slide.element.n6, 'e6');
			util.removeClass(slide.element.n7, 'e7');
			util.removeClass(slide.element.n8, 'e8');
			util.removeClass(slide.element.n9, 'e9');
			util.removeClass(slide.element.n10, 'e10');
			util.removeClass(slide.element.n11, 'e11');
			util.removeClass(slide.element.n12, 'e12');
			util.removeClass(slide.element.saveBtn, 'show');
			util.removeClass(slide.element.rep2, 'fadeInLeft');

			util.removeClass(slide.element.rep2, 'fadeOut');
			util.removeClass(slide.element.copy7, 'bounceOutRight');
		}
	};
});