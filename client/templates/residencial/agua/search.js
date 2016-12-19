Template.waterReportSearch.onRendered(function(){
	function setHeight() {
    var windowHeight = $(window).innerHeight(),
      wrapper = $('#searcher');
    wrapper.css('min-height', windowHeight);
  }

  setHeight();
});


Template.waterReportSearch.events({
	'submit .water-panel-search': function(e){
		e.preventDefault();
		var caseNumber = e.target.caseNumber.value,
				report = Waterreports.findOne({caseNumber: caseNumber});
		if(report===undefined){
			var msg = "Caso Inexistente",
					title = "Error!";
			toastr.error(msg, title);
		}else{
			var	reportId = report._id;
			Router.go('/cotizacion-agua-sanitaria/'+reportId);
			var msg = "Reporte encontrado",
					title = "Exito!";
			toastr.success(msg, title);
		}
			
	}
});