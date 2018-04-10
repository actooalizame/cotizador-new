Template.singleAcReport.onRendered(function(){
  $('.tooltipped').tooltip({delay: 50});
});

Template.singleAcReport.helpers({
	'pdfLead': function(){
		var reportId = this.caseNumber,
				report = Acreports.findOne({caseNumber: reportId}),
				category = report.category;
		switch(category){
      case 'A': var fileName = "09000";
      break;
      case 'B': var fileName = "12000";
      break;
      case 'C': var fileName = "18000";
      break;
      case 'D': var fileName = "24000";
      break;
      case 'E': var fileName = "industrial";
      break;
    }
    return fileName;
	},

  'hideHelped': function(){
    var reportId = this.caseNumber,
    report = Acreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==true){
      return 'hidden';
    }
  },
  'showHelpedText': function(){
    var reportId = this.caseNumber,
    report = Acreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==false){
      return 'hidden';
    }
  },
  'helpedText': function(){
    var reportId = this.caseNumber,
    report = Acreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==true){
      return 'Hemos recibido su solicitud de asistencia, nos contactaremos a la brevedad';
    }
  },
  'btuExists': function(){
    var reportId = this.caseNumber,
        report = Acreports.findOne({caseNumber: reportId});

    if(report.btu!==undefined){
      return true;
    } else {
      return false;
    }
  }
});

Template.singleAcReport.events({
  'click .contact-me': function(){
    var reportId = this._id,
        report = Acreports.findOne({_id: reportId}),
        name = report.name,
        email = report.email,
        caseNumber = report.caseNumber;
    
    var to = 'enefchile@gmail.com',
        from = name,
        subject = "Solicitiud de asistencia Climatizacion - Cotizador Enef",
        text = "Alguien ha solicitado asistencia con su cotizacion de climatizacion" + "\n\n" +
               "Nombre: " + name + "\n" +
               "Email de contacto: " + email + "\n" +
               "Numero de caso: " + caseNumber + "\n\n" + 
               "Dirección de consulta: http://cotizadorsolar.cl/cotizacion-climatizacion/"+ caseNumber;
    Meteor.call('sendEmail', to,from,subject,text);
    Meteor.call('askedHelpAc', reportId);
  }
});