Meteor.methods({
	'sendEmail': function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },
  'insertPoolReport': function(caseNumber,zone,ancho,largo,mcuad,name,phone,email){
		Poolreports.insert({
			caseNumber: caseNumber,
			zone: zone,
			ancho: ancho,
			largo: largo,
			mcuad: mcuad,
			name: name,
			phone: phone,
			email: email,
			createdAt: new Date(),
			userIp: this.connection.clientAddress
		});
  },
  'insertWaterReport': function(caseNumber,zone,residents,name,phone,email){
		Waterreports.insert({
			caseNumber: caseNumber,
			zone: zone,
			residents: residents,
			name: name,
			phone: phone,
			email: email,
			createdAt: new Date(),
			userIp: this.connection.clientAddress
		});
  },
	'insertOnGridReport': function(data){
		Ongridreports.insert({
			equipment: data.equipment,
			instalation: data.instalation,
			caseNumber: data.caseNumber,
			acSpend: data.acSpend,
			montKwats: data.montKwats,
			name: data.name,
			phone: data.phone,
			comment: data.comment,
			contactEmail: data.contactEmail,
			zone: data.zone,
			comuna: data.comuna,
			dailyRequiredWattsGeneration: data.dailyRequiredWattsGeneration,
			zoneRad: data.zoneRad,
			dayZoneRadGen: data.dayZoneRadGen,
			suggestedPanels: data.suggestedPanels,
			helped: false,
			createdAt: new Date(),
			userIp: this.connection.clientAddress
		});
	},
	'insertOffGridReport': function(data){
		Offgridreports.insert({
			equipment: data.equipment,
			instalation: data.instalation,
			category: data.category,
			caseNumber: data.caseNumber,
			cName: data.cName,
			phone: data.phone,
			email: data.email,
			aincPower: data.aincPower,
			aincUnits: data.aincUnits,
			aincHours: data.aincHours,
			aincTotal: data.aincTotal,
			aefPower: data.aefPower,
			aefUnits: data.aefUnits,
			aefHours: data.aefHours,
			aefTotal: data.aefTotal,
			tfluoPower: data.tfluoPower,
			tfluoUnits: data.tfluoUnits,
			tfluoHours: data.tfluoHours,
			tfluoTotal: data.tfluoTotal,
			ledPower: data.ledPower,
			ledUnits: data.ledUnits,
			ledHours: data.ledHours,
			ledTotal: data.ledTotal,
			compuPower: data.compuPower,
			compuUnits: data.compuUnits,
			compuHours: data.compuHours,
			compuTotal: data.compuTotal,
			notePower: data.notePower,
			noteUnits: data.noteUnits,
			noteHours: data.noteHours,
			noteTotal: data.noteTotal,
			refriPower: data.refriPower,
			refriUnits: data.refriUnits,
			refriHours: data.refriHours,
			refriTotal: data.refriTotal,
			musicPower: data.musicPower,
			musicUnits: data.musicUnits,
			musicHours: data.musicHours,
			musicTotal: data.musicTotal,
			tvPower: data.tvPower,
			tvUnits: data.tvUnits,
			tvHours: data.tvHours,
			tvTotal: data.tvTotal,
			dvdPower: data.dvdPower,
			dvdUnits: data.dvdUnits,
			dvdHours: data.dvdHours,
			dvdTotal: data.dvdTotal,
			hornoPower: data.hornoPower,
			hornoUnits: data.hornoUnits,
			hornoHours: data.hornoHours,
			hornoTotal: data.hornoTotal,
			microPower: data.microPower,
			microUnits: data.microUnits,
			microHours: data.microHours,
			microTotal: data.microTotal,
			lavaPower: data.lavaPower,
			lavaUnits: data.lavaUnits,
			lavaHours: data.lavaHours,
			lavaTotal: data.lavaTotal,
			aspiPower: data.aspiPower,
			aspiUnits: data.aspiUnits,
			aspiHours: data.aspiHours,
			aspiTotal: data.aspiTotal,
			other1Name: data.other1Name,
			other1Power: data.other1Power,
			other1Units: data.other1Units,
			other1Hours: data.other1Hours,
			other1Total: data.other1Total,
			other2Name: data.other2Name,
			other2Power: data.other2Power,
			other2Units: data.other2Units,
			other2Hours: data.other2Hours,
			other2Total: data.other2Total,
			bombPower: data.bombPower,
			bombUnits: data.bombUnits,
			bombHours: data.bombHours,
			bombTotal: data.bombTotal,
			grandNum: data.grandNum,
			createdAt: new Date(),
			userIp: this.connection.clientAddress
		});
	},
	'insertPuerteOffGridReport': function(data){
		Puerteoffgrid.insert({
			equipment: data.equipment,
			instalation: data.instalation,
			category: data.category,
			discount: data.discount,
			caseNumber: data.caseNumber,
			cName: data.cName,
			phone: data.phone,
			email: data.email,
			aincPower: data.aincPower,
			aincUnits: data.aincUnits,
			aincHours: data.aincHours,
			aincTotal: data.aincTotal,
			aefPower: data.aefPower,
			aefUnits: data.aefUnits,
			aefHours: data.aefHours,
			aefTotal: data.aefTotal,
			tfluoPower: data.tfluoPower,
			tfluoUnits: data.tfluoUnits,
			tfluoHours: data.tfluoHours,
			tfluoTotal: data.tfluoTotal,
			ledPower: data.ledPower,
			ledUnits: data.ledUnits,
			ledHours: data.ledHours,
			ledTotal: data.ledTotal,
			compuPower: data.compuPower,
			compuUnits: data.compuUnits,
			compuHours: data.compuHours,
			compuTotal: data.compuTotal,
			notePower: data.notePower,
			noteUnits: data.noteUnits,
			noteHours: data.noteHours,
			noteTotal: data.noteTotal,
			refriPower: data.refriPower,
			refriUnits: data.refriUnits,
			refriHours: data.refriHours,
			refriTotal: data.refriTotal,
			musicPower: data.musicPower,
			musicUnits: data.musicUnits,
			musicHours: data.musicHours,
			musicTotal: data.musicTotal,
			tvPower: data.tvPower,
			tvUnits: data.tvUnits,
			tvHours: data.tvHours,
			tvTotal: data.tvTotal,
			dvdPower: data.dvdPower,
			dvdUnits: data.dvdUnits,
			dvdHours: data.dvdHours,
			dvdTotal: data.dvdTotal,
			hornoPower: data.hornoPower,
			hornoUnits: data.hornoUnits,
			hornoHours: data.hornoHours,
			hornoTotal: data.hornoTotal,
			microPower: data.microPower,
			microUnits: data.microUnits,
			microHours: data.microHours,
			microTotal: data.microTotal,
			lavaPower: data.lavaPower,
			lavaUnits: data.lavaUnits,
			lavaHours: data.lavaHours,
			lavaTotal: data.lavaTotal,
			aspiPower: data.aspiPower,
			aspiUnits: data.aspiUnits,
			aspiHours: data.aspiHours,
			aspiTotal: data.aspiTotal,
			other1Name: data.other1Name,
			other1Power: data.other1Power,
			other1Units: data.other1Units,
			other1Hours: data.other1Hours,
			other1Total: data.other1Total,
			other2Name: data.other2Name,
			other2Power: data.other2Power,
			other2Units: data.other2Units,
			other2Hours: data.other2Hours,
			other2Total: data.other2Total,
			bombPower: data.bombPower,
			bombUnits: data.bombUnits,
			bombHours: data.bombHours,
			bombTotal: data.bombTotal,
			grandNum: data.grandNum,
			createdAt: new Date(),
			userIp: this.connection.clientAddress
		});
	},
	'insertAcReport': function(data,plan){
		Acreports.insert({
			caseNumber: data.caseNumber,
			ancho: data.ancho,
			largo: data.largo,
			alto: data.alto,
			people: data.people,
			building: data.building,
			name: data.name,
			phone: data.phone,
			email: data.email,
			comment: data.comment,
			calculation: data.calculation,
			equipment: plan.equipment,
			instalation: plan.instalation,
			percentage: plan.percentage,
			totalDiscounted: plan.totalDiscounted,
			category: plan.category,
			helped: false,
			createdAt: new Date(),
			userIp: this.connection.clientAddress
		});
  },
  'askedHelpOngrid': function(reportId){
		Ongridreports.update(
			{ _id: reportId},
			{$set: {helped:true}}
		);
	},
  'askedHelpOffgrid': function(reportId){
		Offgridreports.update(
			{ _id: reportId},
			{$set: {helped:true}}
		);
	},
	'askedHelpOffgridPuerte': function(reportId){
		Puerteoffgrid.update(
			{ _id: reportId},
			{$set: {helped:true}}
		);
	},
  'askedHelpAc': function(reportId){
		Acreports.update(
			{ _id: reportId},
			{$set: {helped:true}}
		);
	},
	'insertEmailConfig': function(data){
		EmailConfigs.insert({
			category: data.category,
			campaign: data.campaign,
			emailBody: data.emailBody,
			active: true,
			createdAt: new Date()
		});
  },
  'toggleActiveEmail': function(thisId,isChecked){
		EmailConfigs.update(
			{ _id: thisId},
			{$set: {active:isChecked}}
		);
	},
});