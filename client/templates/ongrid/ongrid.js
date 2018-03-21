Template.onGridReport.rendered = function() {
	$('select').material_select();

  $('.tooltipped').tooltip({delay: 50});

  $('.modal-trigger').leanModal();

	this.$("#range1").noUiSlider({
    start: 10,
    step: 5,
    behaviour: 'snap',
    //connect: true,
    range: {
      'min': 10,
      'max': 100
    },
    format: wNumb({
			decimals: 0
		})
  }).on('slide', function (ev, val) {
    // set real values on 'slide' event
    Session.set('slider', val);
  }).on('change', function (ev, val) {
    // round off values on 'change' event

    Session.set('slider', val);
  });
};

Template.onGridReport.helpers({
	'slider': function () {
    var slider = Session.get("slider");
    return slider;
  },
  'selectedRM': function () {
    return Session.get('selectedRM');
  }
});

Template.onGridReport.events({
  'click .modal-trigger': function(){
    $('.lean-overlay').remove();
  },

  'change .regiones': function(e){
    var zone = e.target.value;
    console.log(zone);
    if(zone==='Región Metropolitana'){
      Session.set('selectedRM', true);
    }else{
       Session.set('selectedRM', false)
    }
  },

  'submit .on-grid-form': function(e,t){
    e.preventDefault();

    var randomInt = Math.floor(Math.random()*100000000),
        caseNumber = randomInt.toString();
    var acSpend = e.target.acSpend.value,
        montKwats = e.target.mKwats.value,
        desiredSave = Session.get('slider'),
        name = e.target.firstName.value,
        phone = e.target.phone.value,
        comment = e.target.comment.value,
        contactEmail = e.target.email.value,
        zone = e.target.zone.value;
        if(Session.get('selectedRM')===true){
          comuna = e.target.comuna.value
        }else{
          comuna = 'En Región'
        };
    var percent = desiredSave*0.01,
        desiredKiloWats = montKwats*percent,
        desiredWats = (desiredKiloWats*1000).toFixed(0),
        dailyRequiredWattsGeneration = (desiredWats/30).toFixed(0);
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
    var dayZoneRadGen = (dailyRequiredWattsGeneration/zoneRad).toFixed(0);
    var dayPanelWatts= 310,
        requiredPanels = (dayZoneRadGen/dayPanelWatts).toFixed(0),
        suggestedPanels = 2 * Math.round(requiredPanels / 2);

    if(suggestedPanels<2){
      var instalation = "222.147",
          equipment = "1.777.177";
    }
    
    switch(suggestedPanels){

      case 2: var instalation = "222.147",
                    equipment = "1.777.177";

      case 4: var instalation = "222.147",
                    equipment = "1.777.177";
      break;
      case 6: var instalation = "286.128",
                    equipment = "2.289.022";
      break;
      case 8: var instalation = "377.198",
                    equipment = "3.017.584";
      break;
      case 10: var instalation = "491.232",
                    equipment = "3.929.855";
      break;
      case 12: var instalation = "565.080",
                    equipment = "4.520.638";
      break;
      case 14: var instalation = "634.252",
                    equipment = "5.074.018";
      break;
      case 16: var instalation = "724.048",
                    equipment = "5.792.381";
      break;
    }


    var message = "Estimado " + name + "," + "\n\n" +
                  "Su número de caso es el: "+caseNumber+ "\n" +
                  //"Su plan requiere una generación diaria de " + dailyRequiredWattsGeneration + " " + "Watts. " + "\n" +
                  "Tomando en cuenta el factor de radiación solar de su región ("+zone+"), se ha cotizado la instalación de un sistema fotovoltaico compuesto por paneles solares, inversor, estructuras, cables y conectores que podrá suministrarle energía para obtener el ahorro anual seleccionado." + "\n\n" +
                  //"Los valores corresponden a:" + "\n\n" +
                  //"- Equipos: " +equipment+" pesos + IVA" + "\n" +
                  //"- Instalación: " +instalation+ " pesos + IVA" + "\n" +
                  //"- Tramites distribuidora y Net Billing: 250.000 pesos + IVA " + "\n\n" +
                  //"Este es un valor estimado y no incluye costos de flete para regiones fuera de la Región Metropolitana." + "\n\n" +
                  "Si quiere revisar y descargar su cotización diríjase a la siguiente dirección: http://cotizadorsolar.cl/cotizacion-ongrid/"+caseNumber+ "\n\n" +
                  //"En el formulario que aparece en la siguiente dirección: http://cotizadorsolar.cl/cotizacion-ongrid/"+caseNumber+ "\n\n" +
                  "Si tiene alguna duda o necesita mayor información reenvíe este correo a  solar@enef.cl y un ejecutivo lo contactará de inmediato." + "\n\n" +
                  "Saludos," + "\n\n\n" +
                  "Equipo de Enef";
    
    
    var to = contactEmail,
        from = "solar@enef.cl",
        subject = "Cotizacion Online Enef",
        text = message;

    if(suggestedPanels>16){
      var instalation = "Consultar",
        equipment = "Consultar";
        text = "Estimado " +name+ "," + "\n\n" +
                "Su proyecto excede el máximo predeterminado para nuestras cotizaciones automáticas on-line." + "\n\n" +
                "Envíenos un correo a solar@enef.cl y con mucho gusto lo asesoraremos con su proyecto de manera personalizada.";
    }
     var data = {
      equipment: equipment,
      instalation: instalation,
      caseNumber: caseNumber,
      acSpend: acSpend,
      montKwats: montKwats,
      name: name,
      phone: phone,
      comment: comment,
      contactEmail: contactEmail,
      zone: zone,
      comuna: comuna,
      dailyRequiredWattsGeneration: dailyRequiredWattsGeneration, 
      zoneRad: zoneRad,
      dayZoneRadGen: dayZoneRadGen,
      suggestedPanels: suggestedPanels
    }
   
    Meteor.call('insertOnGridReport',data,function(error){
      if (error) {
        return alert(error.reason);
      }
      else{
        Meteor.call('sendEmail', to,from,subject,text);
        Session.set('contactEmail',contactEmail);
        Router.go('thanks');
      }
    });

  }
});

