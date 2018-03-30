Template.adminEmail.rendered = function() {
	$('select').material_select();

  $('.tooltipped').tooltip({delay: 50});
};

Template.adminEmail.events({
  'submit .admin-email': function(e,t){
    e.preventDefault();

    var data = {
      category: e.target.category.value,
      campaign: e.target.campaign.value,
      emailBody: e.target.emailBody.value
    }

    Meteor.call('insertEmailConfig',data,function(error){
      if (error) {
        return alert(error.reason);
      }
      else{
        toastr["success"]("Template insertado exitosamente.", "Ok!");
        Router.go('onGridReport');
      }
    });
    
  }
});