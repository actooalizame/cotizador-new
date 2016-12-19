Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: '/images/logo-enef-splash.jpg',
      backgroundColor: '#fbfcfc',
      loadingHtml: message + spinner
    });
    //Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '<p class="loading-message">Cargando...</p>';
//var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';
var spinner = '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';