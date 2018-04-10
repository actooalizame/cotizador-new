Template.adminEmail.rendered = function() {
	$('select').material_select();

  $('.tooltipped').tooltip({delay: 50});

  $('.collapsible').collapsible();
};


Template.adminEmail.helpers({
  'active1': function(){
    if(Session.get('selectedPlan')==='Paneles On-Grid'){
      return true
    } else {
      return false
    }
  },
  'active2': function(){
    if(Session.get('selectedPlan')==='Paneles Off-Grid'){
      return true
    } else {
      return false
    }
  },
  'active3': function(){
    if(Session.get('selectedPlan')==='Climatizacion'){
      return true
    } else {
      return false
    }
  },
  'emailConfigs': function(){
    var selectedPlan = Session.get('selectedPlan');
    return EmailConfigs.find({category:selectedPlan},{sort:{createdAt:-1}});
  },
  'selectedPlan': function(){
    return Session.get('selectedPlan');
  },
  'hasSelected': function(){
    if(Session.get('selectedPlan')!==undefined){
      return true
    } else {
      return false
    }
  },
  'isChecked': function(){
    var email = EmailConfigs.findOne({_id:this._id}),
        emailActive = email.active;
    return emailActive;
  },
  'toggleColor': function(){
    var email = EmailConfigs.findOne({_id:this._id}),
        emailActive = email.active;
    if(emailActive===true){
      return 'green';
    }if (emailActive===false){
      return 'red';
    }
  }
});

Template.adminEmail.events({
  'submit .admin-email': function(e,t){
    e.preventDefault();

    var data = {
      category: Session.get('selectedPlan'),
      campaign: e.target.campaign.value,
      emailBody: e.target.emailBody.value
    }

    Meteor.call('insertEmailConfig',data,function(error){
      if (error) {
        return alert(error.reason);
      }
      else{
        toastr["success"]("Template insertado exitosamente.", "Ok!");
        //Router.go('onGridReport');
        var selectedPlan = Session.get('selectedPlan');
        if(selectedPlan==='Paneles On-Grid'){
          Router.go('onGridReport');
        }
        if(selectedPlan==='Paneles Off-Grid'){
          Router.go('offGridReport');
        }
        if(selectedPlan==='Climatizacion'){
          Router.go('residencialAc');
        }
      }
    });
  },

  'change .category': function(e){
    Session.set('selectedPlan', e.target.value);
  },

  'click .toggle-active': function(e){
    var thisId = this._id,
        isChecked = e.target.checked;
    Meteor.call('toggleActiveEmail', thisId,isChecked);
  }
});