Template.residencialAc.onRendered(function(){
	$('select').material_select();
	$('.tabs').tabs();
});


Template.residencialAc.events({
	'change #light1': function(){
		Session.set('light', 'Sol directo');
	},
	'change #light2': function(){
		Session.set('light', 'Normal');
	},
	'change #light3': function(){
		Session.set('light', 'Poco sol');
	},

	'submit .ac-form': function(e){
		e.preventDefault();
		var randomInt = Math.floor(Math.random()*100000000),
				light = Session.get('light');
		switch (light) {
      case 'Sol directo': var lightPercentage = 1.1;
      break;
      case 'Normal': var lightPercentage = 1;
      break;
      case 'Poco sol': var lightPercentage = 0.9;
      break;
    }
    var ancho = e.target.ancho.value,
    		largo = e.target.largo.value,
				alto = e.target.alto.value,
				people = e.target.people.value;

		var data = {
				caseNumber: randomInt.toString(),
				ancho: parseFloat(ancho),
				largo: parseFloat(largo),
				alto: parseFloat(alto),
				people: parseFloat(people),
				building: e.target.building.value,
				name: e.target.firstName.value,
				phone: e.target.phone.value,
				email: e.target.email.value,
				comment: e.target.comment.value,
				btu: ((((ancho*largo*alto)*165)+(people*500))*lightPercentage).toFixed(1)
			};

		if(data.btu<=9000){
			var plan = {
						equipment: "242.222",
						instalation: "146.154",
						percentage: "10%",
						totalDiscounted: "349.990",
						category: "A"
					}
				
				}
		if(data.btu>9000 && data.btu<=12000){
			var plan = {
					equipment: "274.444",
					instalation: "146.154",
					percentage: "11%",
					totalDiscounted: "387.746",
					category: "B"
				}
			}
		if(data.btu>12000 && data.btu<=18000){
			var plan = {
					equipment: "407.778",
					instalation: "146.154",
					percentage: "12%",
					totalDiscounted: "490.102",
					category: "C"
				}
			}
		if(data.btu>18000 && data.btu<=24000){
			var plan = {
					equipment: "546.667",
					instalation: "146.154",
					percentage: "13%",
					totalDiscounted: "490.102",
					category: "D"
				}
			}
		if(data.btu>24000){
			var plan = {
					equipment: "Consultar",
					instalation: "Consultar",
					percentage: "--",
					totalDiscounted: "Consultar",
					category: "E"
				}
			}
		var contactEmail = data.email;
		/*var message = "Estimado " +data.name+ "," + "\n\n" +
									"Su número de caso es el: " +data.caseNumber+ "\n" +
									"Según los detalles de la habitación ingresada en nuestro cotizador, usted requiere de un equipo de climatización de " +data.btu+ " BTU." + "\n\n" +
									//"Los valores corresponden a:" + "\n\n" +
      						//"- Equipos: " +plan.equipment+ " pesos + IVA" + "\n" +
      						//"- Instalación: " +plan.instalation+ " pesos + IVA" + "\n" +
      						//"- Valor total con descuento del " +plan.percentage+ ": " +plan.totalDiscounted+ " pesos + IVA" + "\n\n" +
      						//"Este es un valor estimado y no incluye costos de flete para regiones fuera de la Región Metropolitana." + "\n\n" +
      						//"Si quiere conocer los detalles de su cotización introduzca el siguiente código de 8 dígitos ---> "+data.caseNumber+ "\n" +
                  "Si quiere revisar y descargar su cotización diríjase a la siguiente dirección:  http://cotizadorsolar.cl/cotizacion-climatizacion/" +data.caseNumber+ "\n\n" +
                  "Si tiene alguna inquietud o necesita mayor información reenvíe este correo a  solar@enef.cl y un ejecutivo lo contactará de inmediato." + "\n\n\n" +
                  "Saludos," + "\n\n" + 
                  "Equipo de Enef";*/
    

    var emailMsg = EmailConfigs.findOne({active:true},{sort:{createdAt:-1}}),
        emailText = emailMsg.emailBody;

    var mapObj = {
       name: data.name,
       caseNumber: data.caseNumber,
       phone: data.phone,
       btu: data.btu,
       building: data.building,
       equipment: plan.equipment,
       instalation: plan.instalation,
       percentage: plan.percentage,
       totalDiscounted: plan.totalDiscounted
    };
    var res = emailText.replace(/name|caseNumber|phone|btu|building|equipment|instalation|percentage|totalDiscounted/gi, function(matched){
      return mapObj[matched];
    });
    
    if(data.btu>24000){
    	var res = "Estimado " +data.name+ "," + "\n\n" +
      								"Su proyecto excede el máximo predeterminado para nuestras cotizaciones automáticas on-line." + "\n\n" +
      								"Envíenos un correo a solar@enef.cl y le responderemos rápidamente para comenzar a asesorarlo de forma personalizada con su proyecto.";
    }

		var to = contactEmail,
        from = "solar@enef.cl",
        subject = "Cotizacion Online Enef",
        text = res;

		Meteor.call('insertAcReport', data, plan, function(error){
      if (error) {
        return alert(error.reason);
      }
      else{
        Meteor.call('sendEmail', to,from,subject,text);
        Session.set('contactEmail',contactEmail);
        Router.go('thanksAc');
      }
    });
	},

	'submit .ac-form-2': function(e){
		e.preventDefault();
		var randomInt = Math.floor(Math.random()*100000000);
		

		var data = {
				caseNumber: randomInt.toString(),
				btu: e.target.btu.value,
				building: e.target.building.value,
				name: e.target.firstName.value,
				phone: e.target.phone.value,
				email: e.target.email.value,
				comment: e.target.comment.value
			};

		if(data.btu == 9000){
			var plan = {
						equipment: "242.222",
						instalation: "146.154",
						percentage: "10%",
						totalDiscounted: "349.990",
						category: "A"
					}
				
				}
		if(data.btu == 12000){
			var plan = {
					equipment: "274.444",
					instalation: "146.154",
					percentage: "11%",
					totalDiscounted: "387.746",
					category: "B"
				}
			}
		if(data.btu == 18000){
			var plan = {
					equipment: "407.778",
					instalation: "146.154",
					percentage: "12%",
					totalDiscounted: "490.102",
					category: "C"
				}
			}
		if(data.btu==24000){
			var plan = {
					equipment: "546.667",
					instalation: "146.154",
					percentage: "13%",
					totalDiscounted: "490.102",
					category: "D"
				}
			}
		
		var contactEmail = data.email;
		/*var message = "Estimado " +data.name+ "," + "\n\n" +
									"Su número de caso es el: " +data.caseNumber+ "\n" +
									"Según los detalles de la habitación ingresada en nuestro cotizador, usted requiere de un equipo de climatización de " +data.btu+ " BTU." + "\n\n" +
									//"Los valores corresponden a:" + "\n\n" +
      						//"- Equipos: " +plan.equipment+ " pesos + IVA" + "\n" +
      						//"- Instalación: " +plan.instalation+ " pesos + IVA" + "\n" +
      						//"- Valor total con descuento del " +plan.percentage+ ": " +plan.totalDiscounted+ " pesos + IVA" + "\n\n" +
      						//"Este es un valor estimado y no incluye costos de flete para regiones fuera de la Región Metropolitana." + "\n\n" +
      						//"Si quiere conocer los detalles de su cotización introduzca el siguiente código de 8 dígitos ---> "+data.caseNumber+ "\n" +
                  "Si quiere revisar y descargar su cotización diríjase a la siguiente dirección:  http://cotizadorsolar.cl/cotizacion-climatizacion/" +data.caseNumber+ "\n\n" +
                  "Si tiene alguna inquietud o necesita mayor información reenvíe este correo a  solar@enef.cl y un ejecutivo lo contactará de inmediato." + "\n\n\n" +
                  "Saludos," + "\n\n" + 
                  "Equipo de Enef";*/
    
    var emailMsg = EmailConfigs.findOne({active:true},{sort:{createdAt:-1}}),
        emailText = emailMsg.emailBody;

    var mapObj = {
       name: data.name,
       caseNumber: data.caseNumber,
       phone: data.phone,
       btu: data.btu,
       building: data.building,
       equipment: plan.equipment,
       instalation: plan.instalation,
       percentage: plan.percentage,
       totalDiscounted: plan.totalDiscounted
    };
    var res = emailText.replace(/name|caseNumber|phone|btu|building|equipment|instalation|percentage|totalDiscounted/gi, function(matched){
      return mapObj[matched];
    });

		var to = contactEmail,
        from = "solar@enef.cl",
        subject = "Cotizacion Online Enef",
        text = res;

		Meteor.call('insertAcReport', data, plan, function(error){
      if (error) {
        return alert(error.reason);
      }
      else{
        Meteor.call('sendEmail', to,from,subject,text);
        Session.set('contactEmail',contactEmail);
        Router.go('thanksAc');
      }
    });
	}
});