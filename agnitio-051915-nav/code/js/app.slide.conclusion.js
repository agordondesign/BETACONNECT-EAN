document.addEventListener('presentationInit', function() {
	var menubtn = document.querySelector('#pulldown');
	var slide = app.slide.conclusion = {
		elements: {
			videoOutro: "#outro"
			replay: "btnstart"
		},

		onEnter: function(element) {
			
			slide.element.videoOutro.offsetWidth = slide.element.videoOutro.offsetWidth;

			app.addEvent('tap', slide.shownav, menubtn);

			var endtime = 3;

			slide.element.videoOutro.addEventListener('timeupdate', function() {
    			if (this.currentTime >= endtime) {
    				slide.element.videoOutro.pause();
    		    }
    		}, false);

    		util.addClass(menubtn, 'pullupauto');
			util.addClass(mainmenu, 'pullupauto');

			slide.element.videoOutro.play();
			
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
		
		
		replayApp: function(event) {
			app.load('default');
		}
		
		onExit: function(element) {
			//slide.element.videoOutro.play();
		}
	};
});
