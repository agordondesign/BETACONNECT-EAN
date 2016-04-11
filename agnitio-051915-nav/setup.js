(function(global) {
  
  // Creating our presentation and global namespace "app"
  global.app = new Presentation({
    globalElements: ['mainmenu','#pulldown'],

    slideshows: {
      container:            ['container'],
      introduction:         ['introduction'],
      mybetaapp_login:      ['mybetaapp_login'],
      pairing_betaconnect:  ['pairing_betaconnect'],
      injection_recording:  ['injection_recording'],
      calendar:             ['calendar'], 
      wellness_tracker:     ['wellness_tracker'],
      sharing_data:         ['sharing_data'],
      hcp_dashboard:        ['hcp_dashboard'],
      conclusion:           ['conclusion'],
    },
    collections: {
      default: [
        'introduction',
        'mybetaapp_login',
        'pairing_betaconnect',
        'injection_recording',
        'calendar',
        'wellness_tracker',
        'sharing_data',
        'hcp_dashboard',
        'conclusion',
      ]
    },
    
    type:'json',
    manageMemory: true
  });
  
  // Initiate modules
  //app.scroller = new Slidescroller();
  app.analytics.init({ version: '0.1' });
  app.loader = new Loader({delay:1600});
  
  app.menu = new Menu({
    //attachTo: 'default',
    links: [
      { title: 'Introduction', goTo: 'default.introduction' },
      { title: 'Login', goTo: 'default.mybetaapp_login' },
      { title: 'Pairing', goTo: 'default.pairing_betaconnect' },
      { title: 'Recording', goTo: 'default.injection_recording' },
      { title: 'Calendar', goTo: 'default.calendar' },
      { title: 'Wellness', goTo: 'default.wellness_tracker' },
      { title: 'Sharing', goTo: 'default.sharing_data' },
      { title: 'Navigator', goTo: 'default.hcp_dashboard' }
    ]
  });
  
  // Initialize presentation
  app.init('default');
  
})(window);