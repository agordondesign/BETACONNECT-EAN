document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.introduction = {
		elements: {
			//menubtn: '#pulldown',
			stage: ".democontainer",
			startBtn: ".btnstart",
			skipBtn: ".btnskip",
			videoIntro: "#intro1",
			videoIntro2: "#intro2",
			nextBtn: '.btnnext1'
		},

		onEnter: function(element) {
			app.addEvent('tap', slide.shownav, menubtn);
			
			util.removeClass(slide.element.startBtn, 'hide');
			util.removeClass(slide.element.videoIntro, 'hide');
			util.removeClass(slide.element.skipBtn, 'hide');

			slide.element.startBtn.offsetWidth = slide.element.startBtn.offsetWidth;
			slide.element.videoIntro.offsetWidth = slide.element.videoIntro.offsetWidth;
			slide.element.skipBtn.offsetWidth = slide.element.skipBtn.offsetWidth;
			
			app.addEvent('tap', slide.startIntro, slide.element.startBtn);
			app.addEvent('tap', slide.skipIntro, slide.element.skipBtn);
			app.addEvent('tap', slide.nextSlide, slide.element.nextBtn);

			util.removeClass(slide.element.startBtn, 'hide');
			util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');

			var endtime = 25;
			var endtime2 = 8;
			var endtime3 = 17;
			var whichvideo = "none";

			slide.element.videoIntro.addEventListener('timeupdate', function() {
    			if (this.currentTime >= endtime) {
    				//slide.endIntro();
    				this.pause();
    				whichvideo = "one";
    				//util.removeClass(slide.element.skipBtn, 'show');
					//util.addClass(slide.element.skipBtn, 'hide');
    				util.addClass(slide.element.nextBtn, 'bounceInLeft');
    		    }
    		    if (this.currentTime >= endtime3) {
    		    	util.removeClass(slide.element.skipBtn, 'show');
					util.addClass(slide.element.skipBtn, 'hide');
    		    }
    		}, false);
    		slide.element.videoIntro2.addEventListener('timeupdate', function() {
    			if (this.currentTime >= endtime2) {
    				//slide.endIntro();
    				this.pause();
    				whichvideo = "two";
    				util.addClass(slide.element.nextBtn, 'bounceInLeft');
    		    }
    		}, false);
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

		skipIntro: function(event) {
			util.removeClass(slide.element.skipBtn, 'show');
			util.addClass(slide.element.skipBtn, 'hide');
			slide.element.videoIntro.pause();
			util.addClass(slide.element.videoIntro, 'hide');
			util.removeClass(slide.element.videoIntro2, 'hide');
			util.addClass(slide.element.videoIntro2, 'show');
			slide.element.videoIntro2.play();
		},

		startIntro: function(event) {
			util.addClass(slide.element.startBtn, 'hide');
			util.addClass(slide.element.skipBtn, 'show');
			util.removeClass(slide.element.videoIntro, 'hide');
			slide.element.videoIntro.play();
		},

		nextSlide: function(event) {
			util.removeClass(slide.element.nextBtn, 'bounceInLeft');
			util.addClass(slide.element.nextBtn, 'bounceOutLeft');
			app.addEvent('webkitAnimationEnd', function(event) {
				app.collection.next();
			}, slide.element.nextBtn);
		},

		onExit: function(element) {
			slide.element.videoIntro.pause();
			slide.element.videoIntro.currentTime = 0;
			slide.element.videoIntro2.pause();
			slide.element.videoIntro2.currentTime = 0;

			util.removeClass(menubtn, 'pullupauto');
			util.removeClass(mainmenu, 'pullupauto');

			util.removeClass(slide.element.skipBtn, 'hide');
			//util.removeClass(slide.element.videoIntro, 'hide');
			util.removeClass(slide.element.videoIntro2, 'show');

			util.removeClass(slide.element.skipBtn, 'show');

			util.removeClass(slide.element.skipBtn, 'fadeOut');

			util.removeClass(slide.element.nextBtn, 'bounceInLeft');
			util.addClass(slide.element.nextBtn, 'bounceOutLeft');
		}
	};
});
