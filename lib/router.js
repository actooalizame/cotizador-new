Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.route('clima', {
	layoutTemplate: 'layoutAc',
	template: 'clima',
	path: '/aire-acondicionado'
});

Router.route('home', {
	template: 'home',
	path: '/'
});

Router.route('adminEmail', {
	template: 'adminEmail',
	path: '/admin3m41l/',
	waitOn: function(){
		var selectedPlan = Session.get('selectedPlan')
		return Meteor.subscribe('emailConfigs', selectedPlan);
	}
});

Router.route('residencial', {
	template: 'residencial',
	path: '/residencial/'
});

Router.route('puertekuyaWelcome', {
	template: 'puertekuyaWelcome',
	path: '/puertekuya/'
});

Router.route('industrial', {
	template: 'industrial',
	path: '/industrial/'
});

Router.route('industrialAc', {
	layoutTemplate: 'layoutAc',
	template: 'industrialAc',
	path: '/climatizacion-industrial/'
});


Router.route('residencialAc', {
	layoutTemplate: 'layoutAc',
	template: 'residencialAc',
	path: '/cotizador-climatizacion',
	waitOn: function(){
		var category = "Climatizacion";
		return Meteor.subscribe('emailConfigs',category);
	}
});

Router.route('unavailable', {
	template: 'unavailable',
	path: '/residencial/en-construccion'
});

Router.route('electric-home', {
	template: 'electric-home',
	path: '/residencial/casa'
});

Router.route('contact', {
	template: 'contact',
	path: '/contacto'
});

Router.route('contactAc', {
	layoutTemplate: 'layoutAc',
	template: 'contactAc',
	path: '/contacto-climatizacion'
});

Router.route('searcher', {
	template: 'searcher',
	path: '/buscador-de-cotizaciones'
});

Router.route('thanks', {
	template: 'thanks',
	path: '/gracias'
});

Router.route('thanksAc', {
	layoutTemplate: 'layoutAc',
	template: 'thanksAc',
	path: '/recepcion'
});

Router.route('thanksPuerte', {
	//layoutTemplate: 'layoutAc',
	template: 'thanksPuerte',
	path: '/recepcion-puertekuya'
});

Router.route('water', {
	template: 'water',
	path: '/residencial/agua-sanitaria',
	waitOn: function(){
		return Meteor.subscribe('WaterReports');
	}
});

Router.route('pool', {
	template: 'pool',
	path: '/residencial/piscina',
	waitOn: function(){
		return Meteor.subscribe('PoolReports');
	}
});

Router.route('onGridReport', {
	template: 'onGridReport',
	path: '/residencial/on-grid/',
	waitOn: function(){
		var category = "Paneles On-Grid";
		return Meteor.subscribe('emailConfigs',category);
	}
});

Router.route('offGridReport', {
	template: 'offGridReport',
	path: '/residencial/off-grid/',
	waitOn: function(){
		var category = "Paneles Off-Grid";
		return Meteor.subscribe('emailConfigs',category);
	}
});

Router.route('puerteReport', {
	template: 'puerteReport',
	path: '/puertekuya/off-grid/',
});

Router.route('/cotizacion-agua-sanitaria/:_id', {
	template: 'singleWaterReport',
	name: 'singleWaterReport',
	
	data: function(){ return Waterreports.findOne(this.params._id);},
	waitOn: function(){
		var reportId = this.params._id;
		return Meteor.subscribe('singleWaterReport', reportId);
	}
});
/*
Router.route('/cotizacion-ongrid/:_id', {
	template: 'singleOngridReport',
	name: 'singleOngridReport',
	
	data: function(){ return Ongridreports.findOne(this.params._id);},
	waitOn: function(){
		var reportId = this.params._id;
		return Meteor.subscribe('singleOngridReport', reportId);
	}
});
*/

Router.route('/cotizacion-ongrid/:caseNumber', {
	template: 'singleOngridReport',
	name: 'singleOngridReport',
	
	data: function(){ return Ongridreports.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var reportId = this.params.caseNumber;
		return Meteor.subscribe('singleOngridReport', reportId);
	}
});


Router.route('/cotizacion-offgrid/:caseNumber', {
	template: 'singleOffGridReport',
	name: 'singleOffGridReport',
	data: function(){ return Offgridreports.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var reportId = this.params.caseNumber;
		return Meteor.subscribe('singleOffGridReport', reportId);
	}
});

Router.route('/cotizacion-puertekuya-offgrid/:caseNumber', {
	template: 'singlePuerteReport',
	name: 'singlePuerteReport',
	data: function(){ return Puerteoffgrid.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var reportId = this.params.caseNumber;
		return Meteor.subscribe('singlePuerteOffGridReport', reportId);
	}
});


Router.route('/cotizacion-climatizacion/:caseNumber', {
	layoutTemplate: 'layoutAc',
	template: 'singleAcReport',
	name: 'singleAcReport',
	
	data: function(){ return Acreports.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var reportId = this.params.caseNumber;
		return Meteor.subscribe('singleAcReport', reportId);
	}
});

Router.route('waterReportSearch', {
	template: 'waterReportSearch',
	path: '/buscador-agua-sanitaria/',
	waitOn: function(){
		return Meteor.subscribe('searchWaterReport');
	}
});

Router.route('poolReportSearch', {
	template: 'poolReportSearch',
	path: '/buscador-paneles-piscina/',
	waitOn: function(){
		return Meteor.subscribe('searchPoolReport');
	}
});

Router.route('onGridSearch', {
	template: 'onGridSearch',
	path: '/buscador-ongrid/',
	waitOn: function(){
		return Meteor.subscribe('searchOnGridReport');
	}
});

Router.route('offGridSearch', {
	template: 'offGridSearch',
	path: '/buscador-offgrid/',
	waitOn: function(){
		return Meteor.subscribe('searchOffGridReport');
	}
});

Router.route('puerteOffGridSearch', {
	template: 'puerteOffGridSearch',
	path: '/buscador-puertekuya-offgrid/',
	waitOn: function(){
		return Meteor.subscribe('searchPuerteOffGridReport');
	}
});

Router.route('acSearch', {
	layoutTemplate: 'layoutAc',
	template: 'acSearch',
	path: '/buscador-climatizacion/',
	waitOn: function(){
		return Meteor.subscribe('searchAcReport');
	}
});

Router.route('adminReports', {
	layoutTemplate: 'adminLayout',
	template: 'adminReports',
	path: '/admin3693/',
	waitOn: function(){
		return Meteor.subscribe('adminSearch');
	}
});

Router.route('adminPuertekuyaReports', {
	layoutTemplate: 'adminLayout',
	template: 'adminPuertekuyaReports',
	path: '/admin3693puerte/',
	waitOn: function(){
		return Meteor.subscribe('adminPuertekuyaSearch');
	}
});

Router.route('/adminongrid/:caseNumber', {
	layoutTemplate: 'adminLayout',
	template: 'adminOngridReport',
	name: 'adminOngridReport',
	
	data: function(){ return Ongridreports.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var reportId = this.params.caseNumber;
		return Meteor.subscribe('singleOngridReport', reportId);
	}
});

Router.route('/adminoffgrid/:caseNumber', {
	layoutTemplate: 'adminLayout',
	template: 'adminOffgridReport',
	name: 'adminOffgridReport',
	
	data: function(){ return Offgridreports.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var caseNumber = this.params.caseNumber;
		return Meteor.subscribe('singleAdminOffGridReport', caseNumber);
	}
});

Router.route('/adminPuertekuya/:caseNumber', {
	layoutTemplate: 'adminLayout',
	template: 'adminPuertekuyaReport',
	name: 'adminPuertekuyaReport',
	
	data: function(){ return Puerteoffgrid.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var caseNumber = this.params.caseNumber;
		return Meteor.subscribe('singleAdminOffGridReportPuerte', caseNumber);
	}
});

Router.route('/adminclimatizacion/:caseNumber', {
	layoutTemplate: 'adminLayout',
	template: 'adminAcReport',
	name: 'adminAcReport',
	
	data: function(){ return Acreports.findOne({caseNumber:this.params.caseNumber});},
	waitOn: function(){
		var caseNumber = this.params.caseNumber;
		return Meteor.subscribe('singleAcReport', caseNumber);
	}
});

Router._filters = {
  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  }
};

var filters = Router._filters;

if(Meteor.isClient) {
  Router.onAfterAction(filters.resetScroll); // for all pages
}
