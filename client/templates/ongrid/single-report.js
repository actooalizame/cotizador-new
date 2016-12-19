Template.singleOngridReport.onRendered(function(){
  $('.tooltipped').tooltip({delay: 50});
});

Template.singleOngridReport.helpers({
  'hideHelped': function(){
    var reportId = this.caseNumber,
    report = Ongridreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==true){
      return 'hidden';
    }
   
  },
  'showHelpedText': function(){
    var reportId = this.caseNumber,
    report = Ongridreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==false){
      return 'hidden';
    }
  },
  'helpedText': function(){
    var reportId = this.caseNumber,
    report = Ongridreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==true){
      return 'Hemos recibido su solicitud de asistencia, nos contactaremos a la brevedad';
    }
  },
	'pdfLead': function(){
		var reportId = this.caseNumber,
				report = Ongridreports.findOne({caseNumber: reportId}),
				panels = report.suggestedPanels;
		switch(panels){
      case 0: var fileName = "124";
      break;
      case 2: var fileName = "124";
      break;
      case 4: var fileName = "124";
      break;
      case 6: var fileName = "186";
      break;
      case 8: var fileName = "248";
      break;
      case 10: var fileName = "310";
      break;
      case 12: var fileName = "372";
      break;
      case 14: var fileName = "434";
      break;
      case 16: var fileName = "496";
      break;
    }
    return fileName;
	}
});

Template.singleOngridReport.events({
  'click .contact-me': function(){
    var reportId = this._id,
        report = Ongridreports.findOne({_id: reportId}),
        name = report.name,
        email = report.contactEmail,
        caseNumber = report.caseNumber;
    
    var to = 'enefchile@gmail.com',
        from = name,
        subject = "Solicitiud de asistencia Solar Offgrid - Cotizador Enef",
        text = "Alguien ha solicitado asistencia con su cotizacion de paneles ongrid" + "\n\n" +
               "Nombre: " + name + "\n" +
               "Email de contacto: " + email + "\n" +
               "Numero de caso: " + caseNumber + "\n\n" + 
               "Dirección de consulta: http://cotizadorsolar.cl/cotizacion-ongrid/"+caseNumber;
    Meteor.call('sendEmail', to,from,subject,text);
    Meteor.call('askedHelpOngrid', reportId);
  }
});