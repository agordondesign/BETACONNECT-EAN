document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.mybetaapp_login = {
		elements: {
			stage: ".democontainer",

			register: ".btnregister",
			appIcon: ".btnicon",

			iPhone: ".iphonecontainer",

			rep2: ".b2", rep3: ".b3",
			page2: ".p2", page3: ".p3",
			copy3: ".c3",

			i1: ".i1", i2: ".i2", i3: ".i3", i4: ".i4", i5: ".i5",
			i6: ".i6", i7: ".i7", i8: ".i8", i9: ".i9", i10: ".i10",
			i11: ".i11", i12: ".i12", i13: ".i13", i14: ".i14", i15: ".i15",
			i16: ".i16", i17: ".i17", i18: ".i18", i19: ".i19", i20: ".i20",
			i21: ".i21", i22: ".i22", i23: ".i23", i24: ".i24", i25: ".i25",
			i26: ".i26", password: ".password", email: ".email"
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			app.addEvent('tap', slide.viewApp, slide.element.appIcon);
			app.addEvent('tap', slide.registerApp, slide.element.register);

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
			util.removeClass(slide.element.iPhone, 'slideOutRight');
			util.removeClass(slide.element.appIcon, 'show');
			util.removeClass(slide.element.rep2, 'fadeInLeft');
			util.addClass(slide.element.iPhone, 'slideOutRight');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.appIcon, 'show');
				util.addClass(slide.element.rep2, 'fadeInLeft');
			}, slide.element.iPhone);
			return false;
		},
		
		viewApp: function(event) {
			util.removeClass(slide.element.rep2, 'fadeInLeft');
			util.addClass(slide.element.rep2, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.page3, 'zoomIn vis');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.addClass(slide.element.page2, 'hide');
					util.addClass(slide.element.copy3, 'bounceInDown');
					app.addEvent('webkitAnimationEnd', function(event) {
						util.addClass(slide.element.email, 'fadeIn');
						util.addClass(slide.element.register, 'show');
						app.addEvent('webkitAnimationEnd', function(event) {
							util.addClass(slide.element.i1, 's1'); util.addClass(slide.element.i9, 's9');       
							util.addClass(slide.element.i2, 's2'); util.addClass(slide.element.i10, 's10');    
							util.addClass(slide.element.i3, 's3'); util.addClass(slide.element.i11, 's11');   
							util.addClass(slide.element.i4, 's4'); util.addClass(slide.element.i12, 's12');   
							util.addClass(slide.element.i5, 's5'); util.addClass(slide.element.i13, 's13');   
							util.addClass(slide.element.i6, 's6'); util.addClass(slide.element.i14, 's14');   
							util.addClass(slide.element.i7, 's7'); util.addClass(slide.element.i15, 's15');   
							util.addClass(slide.element.i8, 's8'); util.addClass(slide.element.password, 'spassword');
							app.addEvent('webkitAnimationEnd', function(event) {
								util.addClass(slide.element.i16, 's16'); util.addClass(slide.element.i22, 's22');
								util.addClass(slide.element.i17, 's17'); util.addClass(slide.element.i23, 's23');
								util.addClass(slide.element.i18, 's18'); util.addClass(slide.element.i24, 's24');
								util.addClass(slide.element.i19, 's19'); util.addClass(slide.element.i25, 's25');
								util.addClass(slide.element.i20, 's20'); 
								util.addClass(slide.element.i21, 's21'); 
								app.addEvent('webkitAnimationEnd', function(event) {
									util.addClass(slide.element.rep3, 'fadeInLeft');
								}, slide.element.i25);
							}, slide.element.password);
						}, slide.element.email);
					}, slide.element.copy3);
				}, slide.element.page3);
			}, slide.element.rep2);
			return false;
		},
		
		registerApp: function(event) {
			util.addClass(slide.element.rep3, 'fadeOut');
			app.addEvent('webkitAnimationEnd', function(event) {
				util.addClass(slide.element.copy3, 'bounceOutUp');
				app.addEvent('webkitAnimationEnd', function(event) {
					util.removeClass(slide.element.page3, 'zoomIn');
					util.addClass(slide.element.page3, 'fadeOut');
					util.addClass(slide.element.iPhone, 'slideRight');
					app.collection.next();
				}, slide.element.copy3);
			}, slide.element.rep3)
			return false;
		},
		
		onExit: function(element) {
			util.removeClass(slide.element.iPhone, 'slideOutRight');
			util.removeClass(slide.element.iPhone, 'slideRight');
			util.removeClass(slide.element.copy3, 'bounceInDown');
			util.removeClass(slide.element.copy3, 'bounceOutUp');
			util.removeClass(slide.element.page2, 'hide');
			util.removeClass(slide.element.page3, 'vis');
			util.removeClass(slide.element.page3, 'fadeOut');
			util.removeClass(slide.element.page3, 'zoomIn');
			util.removeClass(slide.element.rep2, 'fadeOut');
			util.removeClass(slide.element.rep2, 'fadeInLeft');
			util.removeClass(slide.element.rep3, 'fadeOut');
			util.removeClass(slide.element.rep3, 'fadeInLeft');
			util.removeClass(slide.element.email, 'fadeIn');
			util.removeClass(slide.element.register, 'show');

			util.removeClass(slide.element.i1, 's1'); util.removeClass(slide.element.i9, 's9');       
			util.removeClass(slide.element.i2, 's2'); util.removeClass(slide.element.i10, 's10');    
			util.removeClass(slide.element.i3, 's3'); util.removeClass(slide.element.i11, 's11');   
			util.removeClass(slide.element.i4, 's4'); util.removeClass(slide.element.i12, 's12');   
			util.removeClass(slide.element.i5, 's5'); util.removeClass(slide.element.i13, 's13');   
			util.removeClass(slide.element.i6, 's6'); util.removeClass(slide.element.i14, 's14');   
			util.removeClass(slide.element.i7, 's7'); util.removeClass(slide.element.i15, 's15');   
			util.removeClass(slide.element.i8, 's8'); util.removeClass(slide.element.password, 'spassword');

			util.removeClass(slide.element.i16, 's16'); util.removeClass(slide.element.i22, 's22');
			util.removeClass(slide.element.i17, 's17'); util.removeClass(slide.element.i23, 's23');
			util.removeClass(slide.element.i18, 's18'); util.removeClass(slide.element.i24, 's24');
			util.removeClass(slide.element.i19, 's19'); util.removeClass(slide.element.i25, 's25');
			util.removeClass(slide.element.i20, 's20'); 
			util.removeClass(slide.element.i21, 's21');

			util.removeClass(slide.element.appIcon, 'show');
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');
		} 
	}
});
