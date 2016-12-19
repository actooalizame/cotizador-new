Template.water.onRendered(function(){
	$('select').material_select();

  $('.tooltipped').tooltip({delay: 50});
});

Template.water.events({
	'submit .form-water': function(e){
		e.preventDefault();
		var randomInt = Math.floor(Math.random()*100000000),
				caseNumber = randomInt.toString();
		var zone = e.target.zone.value,
				residents = e.target.residents.value,
				name = e.target.firstName.value,
				phone = e.target.phone.value,
				email = e.target.email.value;
		Meteor.call('insertWaterReport',caseNumber,zone,residents,name,phone,email);
		Router.go('thanks');
	}
});