Template.offGridReport.onRendered(function(){
	$('select').material_select();
	$('.tooltipped').tooltip({delay: 50});
});

Template.offGridReport.helpers({
	'aincTotal': function(){
		var total = Session.get('aincTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'aefTotal': function(){
		var total = Session.get('aefTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'tfluoTotal': function(){
		var total = Session.get('tfluoTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'ledTotal': function(){
		var total = Session.get('ledTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'compuTotal': function(){
		var total = Session.get('compuTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'noteTotal': function(){
		var total = Session.get('noteTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'refriTotal': function(){
		var total = Session.get('refriTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'musicTotal': function(){
		var total = Session.get('musicTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'TvTotal': function(){
		var total = Session.get('TvTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'dvdTotal': function(){
		var total = Session.get('dvdTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'hornoTotal': function(){
		var total = Session.get('hornoTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'microTotal': function(){
		var total = Session.get('microTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'lavaTotal': function(){
		var total = Session.get('lavaTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'aspiTotal': function(){
		var total = Session.get('aspiTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'other1Total': function(){
		var total = Session.get('other1Total');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'other2Total': function(){
		var total = Session.get('other2Total');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'bombTotal': function(){
		var total = Session.get('bombTotal');
		if(total===undefined){
			total = 0;
		} else{
			return total;
		}
	},
	'total': function(){
		var ainc = Session.get('aincTotal'),
				aef = Session.get('aefTotal'),
				tfluo = Session.get('tfluoTotal'),
				led = Session.get('ledTotal'),
				compu = Session.get('compuTotal'),
				note = Session.get('noteTotal'),
				refri = Session.get('refriTotal'),
				music = Session.get('musicTotal'),
				tv = Session.get('TvTotal'),
				dvd = Session.get('dvdTotal'),
				horno = Session.get('hornoTotal'),
				micro = Session.get('microTotal'),
				lava = Session.get('lavaTotal'),
				aspi = Session.get("aspiTotal"),
				other1 = Session.get('other1Total'),
				other2 = Session.get('other2Total'),
				bomb = Session.get('bombTotal');
		
		if(ainc===undefined){
			ainc=0;
		}
		if(aef===undefined){
			aef=0;
		}
		if(tfluo===undefined){
			tfluo=0;
		}
		if(led===undefined){
			led=0;
		}
		if(compu===undefined){
			compu=0;
		}
		if(note===undefined){
			note=0;
		}
		if(refri===undefined){
			refri=0;
		}
		if(music===undefined){
			music=0;
		}
		if(tv===undefined){
			tv=0;
		}
		if(dvd===undefined){
			dvd=0;
		}
		if(horno===undefined){
			horno=0;
		}
		if(micro===undefined){
			micro=0;
		}
		if(lava===undefined){
			lava=0;
		}
		if(aspi===undefined){
			aspi=0;
		}
		if(other1===undefined){
			other1=0;
		}
		if(other2===undefined){
			other2=0;
		}
		if(bomb===undefined){
			bomb=0;
		}
		var total = ainc+aef+tfluo+led+compu+note+refri+music+tv+dvd+horno+micro+lava+aspi+other1+other2+bomb;
		return total.toFixed(1);
	},
	'selectedRM': function () {
    return Session.get('selectedRM');
  }
});

Template.offGridReport.events({
	
	'change #ainc': function(){
		var power = $( "input[name=power]#ainc" ).val(),
				units = $( "input[name=items]#ainc" ).val(),
				hours = $("input[name=hours]#ainc" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('aincPower', power);
			Session.set('aincUnit', units);
			Session.set('aincHour', hours);
			Session.set('aincTotal', parseFloat(total));
		}
	},
	'change #aef': function(){
		var power = $( "input[name=power]#aef" ).val(),
				units = $( "input[name=items]#aef" ).val(),
				hours = $("input[name=hours]#aef" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('aefPower', power);
			Session.set('aefUnit', units);
			Session.set('aefHour', hours);
			Session.set('aefTotal', parseFloat(total));
		}
	},
	'change #tfluo': function(){
		var power = $( "input[name=power]#tfluo" ).val(),
				units = $( "input[name=items]#tfluo" ).val(),
				hours = $("input[name=hours]#tfluo" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('tfluoPower', power);
			Session.set('tfluoUnit', units);
			Session.set('tfluoHour', hours);
			Session.set('tfluoTotal', parseFloat(total));
		}
	},
	'change #led': function(){
		var power = $( "input[name=power]#led" ).val(),
				units = $( "input[name=items]#led" ).val(),
				hours = $("input[name=hours]#led" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('ledPower', power);
			Session.set('ledUnit', units);
			Session.set('ledHour', hours);
			Session.set('ledTotal', parseFloat(total));
		}
	},
	'change #compu': function(){
		var power = $( "input[name=power]#compu" ).val(),
				units = $( "input[name=items]#compu" ).val(),
				hours = $("input[name=hours]#compu").val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('compuPower', power);
			Session.set('compuUnit', units);
			Session.set('compuHour', hours);
			Session.set('compuTotal', parseFloat(total));
		}
	},
	'change #note': function(){
		var power = $( "input[name=power]#note" ).val(),
				units = $( "input[name=items]#note" ).val(),
				hours = $("input[name=hours]#note" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('notePower', power);
			Session.set('noteUnit', units);
			Session.set('noteHour', hours);
			Session.set('noteTotal', parseFloat(total));
		}
	},
	'change #refri': function(){
		var power = $( "input[name=power]#refri" ).val(),
				units = $( "input[name=items]#refri" ).val(),
				hours = $("input[name=hours]#refri" ).val(),
				calc = (((power/30)*1000)*units*1).toFixed(1),
				total = Math.round(calc);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if(power < 2){
			toastr["error"]("Valor demasiado bajo.", "Error!");
			return;
		}
		if(units % 1 !== 0){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('refriPower', power);
			Session.set('refriUnit', units);
			Session.set('refriHour', hours);
			Session.set('refriTotal', total);
		}
	},
	'change #music': function(){
		var power = $( "input[name=power]#music" ).val(),
				units = $( "input[name=items]#music" ).val(),
				hours = $("input[name=hours]#music" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('musicPower', power);
			Session.set('musicUnit', units);
			Session.set('musicHour', hours);
			Session.set('musicTotal', parseFloat(total));
		}
	},
	'change #tv': function(){
		var power = $( "input[name=power]#tv" ).val(),
				units = $( "input[name=items]#tv" ).val(),
				hours = $("input[name=hours]#tv" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('TvPower', power);
			Session.set('TvUnit', units);
			Session.set('TvHour', hours);
			Session.set('TvTotal', parseFloat(total));
		}
	},
	'change #dvd': function(){
		var power = $( "input[name=power]#dvd" ).val(),
				units = $( "input[name=items]#dvd" ).val(),
				hours = $("input[name=hours]#dvd" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('dvdPower', power);
			Session.set('dvdUnit', units);
			Session.set('dvdHour', hours);
			Session.set('dvdTotal', parseFloat(total));
		}
	},
	'change #horno': function(){
		var power = $( "input[name=power]#horno" ).val(),
				units = $( "input[name=items]#horno" ).val(),
				hours = $("input[name=hours]#horno" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('hornoPower', power);
			Session.set('hornoUnit', units);
			Session.set('hornoHour', hours);
			Session.set('hornoTotal', parseFloat(total));
		}
	},
	'change #micro': function(){
		var power = $( "input[name=power]#micro" ).val(),
				units = $( "input[name=items]#micro" ).val(),
				hours = $("input[name=hours]#micro" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('microPower', power);
			Session.set('microUnit', units);
			Session.set('microHour', hours);
			Session.set('microTotal', parseFloat(total));
		}
	},
	'change #lava': function(){
		var power = $( "input[name=power]#lava" ).val(),
				units = $( "input[name=items]#lava" ).val(),
				hours = $("input[name=hours]#lava" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('lavaPower', power);
			Session.set('lavaUnit', units);
			Session.set('lavaHour', hours);
			Session.set('lavaTotal', parseFloat(total));
		}
	},
	'change #aspi': function(){
		var power = $( "input[name=power]#aspi" ).val(),
				units = $( "input[name=items]#aspi" ).val(),
				hours = $("input[name=hours]#aspi" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('aspiPower', power);
			Session.set('aspiUnit', units);
			Session.set('aspiHour', hours);
			Session.set('aspiTotal', parseFloat(total));
		}
	},
	'change #other1': function(){
		var power = $( "input[name=power]#other1" ).val(),
				units = $( "input[name=items]#other1" ).val(),
				hours = $("input[name=hours]#other1" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('other1Power', power);
			Session.set('other1Unit', units);
			Session.set('other1Hour', hours);
			Session.set('other1Total', parseFloat(total));
		}
	},
	'change #other2': function(){
		var power = $( "input[name=power]#other2" ).val(),
				units = $( "input[name=items]#other2" ).val(),
				hours = $("input[name=hours]#other2" ).val(),
				total = (power*units*hours).toFixed(1);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}
		if(units>=0){
			Session.set('other2Power', power);
			Session.set('other2Unit', units);
			Session.set('other2Hour', hours);
			Session.set('other2Total', parseFloat(total));
		}
	},
	'change #bomb': function(){
		var power = $( "input[name=power]#bomb" ).val(),
				units = $( "input[name=items]#bomb" ).val(),
				hours = $("input[name=hours]#bomb" ).val(),
				calc = ((power*744)*units*hours).toFixed(1),
				total = Math.round(calc);
		if(power<0||units<0||hours<0){
			toastr["error"]("Solo valores positivos.", "Error!");
			return;
		}
		/*if((power % 1 !== 0)||(units % 1 !== 0)){
			toastr["error"]("Sin decimales.", "Error!");
			return;
		}*/
		if(units>=0){
			Session.set('bombPower', power);
			Session.set('bombUnit', units);
			Session.set('bombHour', hours);
			Session.set('bombTotal', total);
		}
	},

	'change .regiones': function(e){
    var zone = e.target.value;
    if(zone==='Región Metropolitana'){
      Session.set('selectedRM', true);
    }else{
       Session.set('selectedRM', false)
    }
  },

	'submit .off-grid-form': function(e){
		e.preventDefault();
		var randomInt = Math.floor(Math.random()*100000000),
				caseNumber = randomInt.toString();

		var cName = e.target.cName.value,
				phone = e.target.phone.value,
				comment = e.target.comment.value,
				email = e.target.email.value,
				zone = e.target.zone.value;
		if(e.target.comuna.value==undefined){
			var comuna = 'Not';
		}else{
			var comuna = e.target.comuna.value;
		}
				
		switch (zone) {
      case 'Región Metropolitana': var zoneReference = "centro";
      break;
      case 'XV Arica y Parinacota': var zoneReference = "norte";
      break;
      case 'I Tarapacá': var zoneReference = "norte";
      break;
      case 'II Antofagasta': var zoneReference = "norte";
      break;
      case 'III Atacama': var zoneReference = "norte";
      break;
      case 'IV Coquimbo': var zoneReference = "norte";
      break;
      case 'V Valparaíso': var zoneReference = "centro";
      break;
      case "VI O'Higgins": var zoneReference = "centro";
      break;
      case 'VII Maule': var zoneReference = "centro";
      break;
      case 'VIII Biobío': var zoneReference = "centro";
      break;
      case 'IX La Araucanía': var zoneReference = "sur";
      break;
      case 'XIV Los Ríos': var zoneReference = "sur";
      break;
      case 'X Los Lagos': var zoneReference = "sur";
      break;
      case 'XI Aysén': var zoneReference = "sur";
      break;
      case 'XII Magallanes y Antártica': var zoneReference = "sur";
      break;
    }
		var aincPower = $( "input[name=power]#ainc" ).val(),
				aincUnits = $( "input[name=items]#ainc" ).val(),
				aincHours = $("input[name=hours]#ainc" ).val(),
				aincTotal = Session.get('aincTotal');
		var aefPower = $( "input[name=power]#aef" ).val(),
				aefUnits = $( "input[name=items]#aef" ).val(),
				aefHours = $("input[name=hours]#aef" ).val(),
				aefTotal = Session.get('aefTotal');
		var tfluoPower = $( "input[name=power]#tfluo" ).val(),
				tfluoUnits = $( "input[name=items]#tfluo" ).val(),
				tfluoHours = $("input[name=hours]#tfluo" ).val(),
				tfluoTotal = Session.get('tfluoTotal');
		var ledPower = $( "input[name=power]#led" ).val(),
				ledUnits = $( "input[name=items]#led" ).val(),
				ledHours = $("input[name=hours]#led" ).val(),
				ledTotal = Session.get('ledTotal');
		var compuPower = $( "input[name=power]#compu" ).val(),
				compuUnits = $( "input[name=items]#compu" ).val(),
				compuHours = $("input[name=hours]#compu" ).val(),
				compuTotal = Session.get('compuTotal');
		var notePower = $( "input[name=power]#note" ).val(),
				noteUnits = $( "input[name=items]#note" ).val(),
				noteHours = $("input[name=hours]#note" ).val(),
				noteTotal = Session.get('noteTotal');
		var refriPower = $( "input[name=power]#refri" ).val(),
				refriUnits = $( "input[name=items]#refri" ).val(),
				refriHours = $("input[name=hours]#refri" ).val(),
				refriTotal = Session.get('refriTotal');
		var musicPower = $( "input[name=power]#music" ).val(),
				musicUnits = $( "input[name=items]#music" ).val(),
				musicHours = $("input[name=hours]#music" ).val(),
				musicTotal = Session.get('musicTotal');
		var tvPower = $( "input[name=power]#tv" ).val(),
				tvUnits = $( "input[name=items]#tv" ).val(),
				tvHours = $("input[name=hours]#tv" ).val(),
				tvTotal = Session.get('TvTotal');
		var dvdPower = $( "input[name=power]#dvd" ).val(),
				dvdUnits = $( "input[name=items]#dvd" ).val(),
				dvdHours = $("input[name=hours]#dvd" ).val(),
				dvdTotal = Session.get('dvdTotal');
		var hornoPower = $( "input[name=power]#horno" ).val(),
				hornoUnits = $( "input[name=items]#horno" ).val(),
				hornoHours = $("input[name=hours]#horno" ).val(),
				hornoTotal = Session.get('hornoTotal');
		var microPower = $( "input[name=power]#micro" ).val(),
				microUnits = $( "input[name=items]#micro" ).val(),
				microHours = $("input[name=hours]#micro" ).val(),
				microTotal = Session.get('microTotal');
		var lavaPower = $( "input[name=power]#lava" ).val(),
				lavaUnits = $( "input[name=items]#lava" ).val(),
				lavaHours = $("input[name=hours]#lava" ).val(),
				lavaTotal = Session.get('lavaTotal');
		var aspiPower = $( "input[name=power]#aspi" ).val(),
				aspiUnits = $( "input[name=items]#aspi" ).val(),
				aspiHours = $("input[name=hours]#aspi" ).val(),
				aspiTotal = Session.get('aspiTotal');
		var other1Name =  $( "input[type=text]#other1" ).val(),
				other1Power = $( "input[name=power]#other1" ).val(),
				other1Units = $( "input[name=items]#other1" ).val(),
				other1Hours = $("input[name=hours]#other1" ).val(),
				other1Total = Session.get('other1Total');
		var other2Name =  $( "input[type=text]#other2" ).val(),
				other2Power = $( "input[name=power]#other2" ).val(),
				other2Units = $( "input[name=items]#other2" ).val(),
				other2Hours = $("input[name=hours]#other2" ).val(),
				other2Total = Session.get('other2Total');
		var bombPower = $( "input[name=power]#bomb" ).val(),
				bombUnits = $( "input[name=items]#bomb" ).val(),
				bombHours = $("input[name=hours]#bomb" ).val(),
				bombTotal = Session.get('bombTotal');
		var grandTotal = $('.total').text(),
				grandNum = Number(grandTotal);
		
		if(grandNum===0){
			alert('Selecciona al menos un producto!');
		}else{
			if(zoneReference==="norte"){
				if(grandNum<=438){
					var equipment = "500.037",
							instalation = "62.505",
							category = "A";
				}
				if(grandNum>438 && grandNum<=1358){
					var equipment = "895.032",
							instalation = "111.879",
							category = "B";
				}
				if(grandNum>1358 && grandNum<=2278){
					var equipment = "1.322.092",
							instalation = "165.261",
							category = "C";
				}
				if(grandNum>2278 && grandNum<=4073){
					var equipment = "2.339.037",
							instalation = "292.380",
							category = "D";
				}
				if(grandNum>4073 && grandNum<=4555){
					var equipment = "2.639.885",
							instalation = "329.986",
							category = "F";
				}
				if(grandNum>4555 && grandNum<=6833){
					var equipment = "3.510.836",
							instalation = "438.855",
							category = "G";
				}
				if(grandNum>6833 && grandNum<=9110){
					var equipment = "4.921.328",
							instalation = "615.166",
							category = "H";
				}
				if(grandNum>9110 && grandNum<=10862){
					var equipment = "5.742.963",
							instalation = "717.870",
							category = "I";
				}
				if(grandNum>10862 && grandNum<=13578){
					var equipment = "7.726.744",
							instalation = "965.843",
							category = "J";
				}
				if(grandNum>13578 && grandNum<=17082){
					var equipment = "9.377.960",
							instalation = "1.172.245",
							category = "K";
				}
				if(grandNum>17082 && grandNum<=20498){
					var equipment = "10.060.654",
							instalation = "1.257.582",
							category = "L";
				}
				if(grandNum>20498 && grandNum<=21725){
					var equipment = "10.190.106",
							instalation = "1.273.763",
							category = "M";
				}
			}

			if(zoneReference==="centro"){
				if(grandNum<=333){
					var equipment = "500.037",
							instalation = "62.505",
							category = "A";
				}
				if(grandNum>333 && grandNum<=1033){
					var equipment = "895.032",
							instalation = "111.879",
							category = "B";
				}
				if(grandNum>1033 && grandNum<=1733){
					var equipment = "1.322.092",
							instalation = "165.261",
							category = "C";
				}
				if(grandNum>1733 && grandNum<=3100){
					var equipment = "2.339.037",
							instalation = "292.380",
							category = "D";
				}
				if(grandNum>3100 && grandNum<=3467){
					var equipment = "2.639.885",
							instalation = "329.986",
							category = "F";
				}
				if(grandNum>3467 && grandNum<=5200){
					var equipment = "3.510.836",
							instalation = "438.855",
							category = "G";
				}
				if(grandNum>5200 && grandNum<=6933){
					var equipment = "4.921.328",
							instalation = "615.166",
							category = "H";
				}
				if(grandNum>6933 && grandNum<=8267){
					var equipment = "5.742.963",
							instalation = "717.870",
							category = "I";
				}
				if(grandNum>8267 && grandNum<=10333){
					var equipment = "7.726.744",
							instalation = "965.843",
							category = "J";
				}
				if(grandNum>10333 && grandNum<=13000){
					var equipment = "9.377.960",
							instalation = "1.172.245",
							category = "K";
				}
				if(grandNum>13000 && grandNum<=15600){
					var equipment = "10.060.654",
							instalation = "1.257.582",
							category = "L";
				}
				if(grandNum>15600 && grandNum<=16533){
					var equipment = "10.190.106",
							instalation = "1.273.763",
							category = "M";
				}
				
			}

			if(zoneReference==="sur"){
				if(grandNum<=165){
					var equipment = "500.037",
							instalation = "62.505",
							category = "A";
				}
				if(grandNum>165 && grandNum<=513){
					var equipment = "895.032",
							instalation = "111.879",
							category = "B";
				}
				if(grandNum>513 && grandNum<=860){
					var equipment = "1.322.092",
							instalation = "165.261",
							category = "C";
				}
				if(grandNum>860 && grandNum<=1538){
					var equipment = "2.339.037",
							instalation = "292.380",
							category = "D";
				}
				if(grandNum>1538 && grandNum<=1719){
					var equipment = "2.639.885",
							instalation = "329.986",
							category = "F";
				}
				if(grandNum>1719 && grandNum<=2579){
					var equipment = "3.510.836",
							instalation = "438.855",
							category = "G";
				}
				if(grandNum>2579 && grandNum<=3439){
					var equipment = "4.921.328",
							instalation = "615.166",
							category = "H";
				}
				if(grandNum>3439 && grandNum<=4100){
					var equipment = "5.742.963",
							instalation = "717.870",
							category = "I";
				}
				if(grandNum>4100 && grandNum<=5125){
					var equipment = "7.726.744",
							instalation = "965.843",
							category = "J";
				}
				if(grandNum>5125 && grandNum<=6448){
					var equipment = "9.377.960",
							instalation = "1.172.245",
							category = "K";
				}
				if(grandNum>6448 && grandNum<=7738){
					var equipment = "10.060.654",
							instalation = "1.257.582",
							category = "L";
				}
				if(grandNum>7738 && grandNum<=8201){
					var equipment = "10.190.106",
							instalation = "1.273.763",
							category = "M";
				}
				
			}

      /*var message = "Estimado " +cName+ "," + "\n\n" +
      							"Su número de caso es el: "+caseNumber+ "\n" +
      							//"Su plan requiere la generación diaria de " +grandNum+ " Watts." + "\n" +
      							"Tomando en cuenta el factor de radiación solar de su región (" +zone+ "), se ha cotizado la instalación de un sistema fotovoltaico compuesto por paneles solares, regulador de carga, banco de baterías, inversor, estructuras, cables y conectores que podrá suminístrale energía a su hogar de forma autónoma las 24 horas del día." + "\n\n" +
      							//"Los valores corresponden a:" + "\n\n" +
      							//"- Equipos: " +equipment+ " pesos + IVA" + "\n" +
      							//"- Instalación: " +instalation+ " pesos + IVA" + "\n\n" +
      							//"Este es un valor estimado y no incluye costos de flete para regiones fuera de la Región Metropolitana." + "\n\n" +
      							//"Si quiere conocer los detalles de su cotización introduzca el siguiente código de 8 dígitos ---> "+caseNumber+ "\n" +
                    "Si quiere revisar y descargar su cotización diríjase a la siguiente dirección: http://cotizadorsolar.cl/cotizacion-offgrid/"+caseNumber+ "\n\n" +
                    "Si tiene alguna inquietud o necesita mayor información reenvíe este correo a  solar@enef.cl y un ejecutivo lo contactará de inmediato." + "\n\n\n" +
                    "Saludos," + "\n\n" + 
                    "Equipo de Enef";*/
      var emailMsg = EmailConfigs.findOne({active:true},{sort:{createdAt:-1}}),
        emailText = emailMsg.emailBody;

	    var mapObj = {
	       cName,
	       caseNumber,
	       phone,
	       zone,
	       equipment,
	       instalation,
	       category,
	       grandNum
	    };
	    var res = emailText.replace(/cName|caseNumber|phone|zone|equipment|instalation|category|grandNum/gi, function(matched){
	      return mapObj[matched];
	    });

      if((zoneReference==="norte"&&grandNum>21725)||(zoneReference==="centro"&&grandNum>16533)||(zoneReference==="sur"&&grandNum>8201)){
				var res = "Estimado " +cName+ "," + "\n\n" +
      								"Su proyecto excede el máximo predeterminado para nuestras cotizaciones automáticas on-line." + "\n\n" +
      								"Envíenos un correo a solar@enef.cl y le responderemos rápidamente para comenzar a asesorarlo de forma personalizada con su proyecto.";
      	var equipment = "Consultar",
      			instalation = "Consultar",
      			category = "solar-industrial"
			}


      var to = email,
        from = "solar@enef.cl",
        subject = "Cotizacion Online Enef",
        text = res;						 
			if(zone===""){
				alert('Selecciona tu región!');
				return;
			}
			
			else{
				var data = {
					equipment: equipment,instalation: instalation,category: category,
					caseNumber: caseNumber,cName: cName,phone: phone,comment:comment,
					email: email,comuna:comuna,aincPower: aincPower,aincUnits: aincUnits,
					aincHours: aincHours,aincTotal: aincTotal,aefPower: aefPower,
					aefUnits: aefUnits,aefHours: aefHours,aefTotal: aefTotal,
					tfluoPower: tfluoPower,tfluoUnits: tfluoUnits,tfluoHours: tfluoHours,
					tfluoTotal: tfluoTotal,ledPower: ledPower,ledUnits: ledUnits,
					ledHours: ledHours,ledTotal: ledTotal,compuPower: compuPower,
					compuUnits: compuUnits,compuHours: compuHours,compuTotal: compuTotal,
					notePower: notePower,noteUnits: noteUnits,noteHours: noteHours,
					noteTotal: noteTotal,refriPower: refriPower,refriUnits: refriUnits,
					refriHours: refriHours,refriTotal: refriTotal,musicPower: musicPower,
					musicUnits: musicUnits,musicHours: musicHours,musicTotal: musicTotal,
					tvPower: tvPower,tvUnits: tvUnits,tvHours: tvHours,
					tvTotal: tvTotal,dvdPower: dvdPower,dvdUnits: dvdUnits,
					dvdHours: dvdHours,dvdTotal: dvdTotal,hornoPower: hornoPower,
					hornoUnits: hornoUnits,hornoHours: hornoHours,hornoTotal: hornoTotal,
					microPower: microPower,microUnits: microUnits,microHours: microHours,
					microTotal: microTotal,lavaPower: lavaPower,lavaUnits: lavaUnits,
					lavaHours: lavaHours,lavaTotal: lavaTotal,aspiPower: aspiPower,
					aspiUnits: aspiUnits,aspiHours: aspiHours,aspiTotal: aspiTotal,
					other1Name: other1Name,other1Power: other1Power,other1Units: other1Units,
					other1Hours: other1Hours,other1Total: other1Total,other2Name: other2Name,
					other2Power: other2Power,other2Units: other2Units,other2Hours: other2Hours,
					other2Total: other2Total,bombPower: bombPower,bombUnits: bombUnits,
					bombHours: bombHours,bombTotal: bombTotal,grandNum: grandNum
				};
				
				Meteor.call('insertOffGridReport',data);
				Meteor.call('sendEmail', to,from,subject,text);
				Session.set('contactEmail',email);
				Router.go('thanks');

			}
		}
	}
});