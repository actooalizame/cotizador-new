Template.singleOffGridReport.rendered = function(){
	$('.tooltipped').tooltip({delay: 50});

	var element1 = $('.aincT'),
			text1 = element1.text();
	if(text1===""||text1==="0"){
		element1.closest("tr").addClass('hidden');
	}
	var element2 = $('.aefT'),
			text2 = element2.text();
	if(text2===""||text2==="0"){
		element2.closest("tr").addClass('hidden');
	}
	var element3 = $('.tvT'),
			text3 = element3.text();
	if(text3===""||text3==="0"){
		element3.closest("tr").addClass('hidden');
	}

	var element4 = $('.tfluoT'),
			text4 = element4.text();
	if(text4===""||text4==="0"){
		element4.closest("tr").addClass('hidden');
	}
	var element5 = $('.ledT'),
			text5 = element5.text();
	if(text5===""||text5==="0"){
		element5.closest("tr").addClass('hidden');
	}
	var element6 = $('.compuT'),
			text6 = element6.text();
	if(text6===""||text6==="0"){
		element6.closest("tr").addClass('hidden');
	}
	var element7 = $('.noteT'),
			text7 = element7.text();
	if(text7===""||text7==="0"){
		element7.closest("tr").addClass('hidden');
	}
	var element8 = $('.refriT'),
			text8 = element8.text();
	if(text8===""||text8==="0"){
		element8.closest("tr").addClass('hidden');
	}
	var element9 = $('.musicT'),
			text9 = element9.text();
	if(text9===""||text9==="0"){
		element9.closest("tr").addClass('hidden');
	}
	var element10 = $('.dvdT'),
			text10 = element10.text();
	if(text10===""||text10==="0"){
		element10.closest("tr").addClass('hidden');
	}
	var element11 = $('.hornoT'),
			text11 = element11.text();
	if(text11===""||text11==="0"){
		element11.closest("tr").addClass('hidden');
	}
	var element12 = $('.microT'),
			text12 = element12.text();
	if(text12===""||text12==="0"){
		element12.closest("tr").addClass('hidden');
	}
	var element13 = $('.lavaT'),
			text13 = element13.text();
	if(text13===""||text13==="0"){
		element13.closest("tr").addClass('hidden');
	}
	var element14 = $('.aspiT'),
			text14 = element14.text();
	if(text14===""||text14==="0"){
		element14.closest("tr").addClass('hidden');
	}
	var element15 = $('.other1T'),
			text15 = element15.text();
	if(text15===""||text15==="0"){
		element15.closest("tr").addClass('hidden');
	}
	var element16 = $('.other2T'),
			text16 = element16.text();
	if(text16===""||text16==="0"){
		element16.closest("tr").addClass('hidden');
	}
	var element17 = $('.bombT'),
			text17 = element17.text();
	if(text17===""||text17==="0"){
		element17.closest("tr").addClass('hidden');
	}
};

Template.singleOffGridReport.helpers({
	'hideHelped': function(){
    var reportId = this.caseNumber,
    report = Offgridreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==true){
      return 'hidden';
    }
  },
  'showHelpedText': function(){
    var reportId = this.caseNumber,
    report = Offgridreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==false){
      return 'hidden';
    }
  },
  'helpedText': function(){
    var reportId = this.caseNumber,
    report = Offgridreports.findOne({caseNumber: reportId}),
    helped = report.helped;
    if(helped==true){
      return 'Hemos recibido su solicitud de asistencia, nos contactaremos a la brevedad';
    }
  },
	'pdfLead': function(){
		var reportId = this.caseNumber,
				report = Offgridreports.findOne({caseNumber: reportId}),
				category = report.category;
		switch(category){
      case "A": var fileName = "010";
      break;
      case "B": var fileName = "031";
      break;
      case "C": var fileName = "052";
      break;
      case "D": var fileName = "093";
      break;
      case "F": var fileName = "104";
      break;
      case "G": var fileName = "156";
      break;
      case "H": var fileName = "208";
      break;
      case "I": var fileName = "248";
      break;
      case "J": var fileName = "310";
      break;
      case "K": var fileName = "390";
      break;
      case "L": var fileName = "468";
      break;
      case "M": var fileName = "496";
      break;
    }
    return fileName;
	}
});

Template.singleOffGridReport.events({
  'click .contact-me': function(){
    var reportId = this._id,
        report = Offgridreports.findOne({_id: reportId}),
        name = report.cName,
        email = report.email,
        caseNumber = report.caseNumber;
    
    var to = 'enefchile@gmail.com',
        from = name,
        subject = "Solicitiud de asistencia Solar Offgrid - Cotizador Enef",
        text = "Alguien ha solicitado asistencia con su cotizacion de paneles offgrid" + "\n\n" +
               "Nombre: " + name + "\n" +
               "Email de contacto: " + email + "\n" +
               "Numero de caso: " + caseNumber + "\n\n" + 
               "Dirección de consulta: http://cotizadorsolar.cl/cotizacion-offgrid/"+caseNumber;
    Meteor.call('sendEmail', to,from,subject,text);
    Meteor.call('askedHelpOffgrid', reportId);
  }
});