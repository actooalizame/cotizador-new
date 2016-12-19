Template.pool.onRendered(function(){
	$('select').material_select();

  $('.tooltipped').tooltip({delay: 50});
});

Template.pool.events({
	'submit .form-pool': function(e){
		e.preventDefault();
		var randomInt = Math.floor(Math.random()*100000000),
				caseNumber = randomInt.toString();
		var zone = e.target.zone.value;
		switch (zone) {
      case 'Región Metropolitana': var zoneRad = 5.06;
      break;
      case 'XV Arica y Parinacota': var zoneRad = 6.42;
      break;
      case 'I Tarapacá': var zoneRad = 5.67;
      break;
      case 'II Antofagasta': var zoneRad = 6.47;
      break;
      case 'III Atacama': var zoneRad = 5.96;
      break;
      case 'IV Coquimbo': var zoneRad = 4.98;
      break;
      case 'V Valparaíso': var zoneRad = 3.93;
      break;
      case "VI O'Higgins": var zoneRad = 4.4;
      break;
      case 'VII Maule': var zoneRad = 4.14;
      break;
      case 'VIII Biobío': var zoneRad = 4.11;
      break;
      case 'IX La Araucanía': var zoneRad = 3.86;
      break;
      case 'XIV Los Ríos': var zoneRad = 3.68;
      break;
      case 'X Los Lagos': var zoneRad = 3.33;
      break;
      case 'XI Aysén': var zoneRad = 3.7;
      break;
      case 'XII Magallanes y Antártica': var zoneRad = 2.4;
      break;
    }
    var ancho = e.target.ancho.value,
				largo = e.target.largo.value,
				mcuad = ancho*largo,

				name = e.target.firstName.value,
				phone = e.target.phone.value,
				email = e.target.email.value;
		Meteor.call('insertPoolReport',caseNumber,zone,ancho,largo,mcuad,name,phone,email);
		Router.go('thanks');
	}
});