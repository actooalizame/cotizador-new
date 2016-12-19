Template.puerteOffGridSearch.rendered = function(){
	function setHeight() {
    var windowHeight = $(window).innerHeight(),
      wrapper = $('#searcher');
    wrapper.css('min-height', windowHeight);
  }

  setHeight();
};


Template.puerteOffGridSearch.events({
	'submit .off-grid-search': function(e){
		e.preventDefault();
		var caseNumber = e.target.caseNumber.value,
				report = Puerteoffgrid.findOne({caseNumber: caseNumber});
		if(report===undefined){
			var msg = "Caso Inexistente",
					title = "Error!";
			toastr.error(msg, title);
		}else{
			var	reportId = report.caseNumber;
			Router.go('/cotizacion-puertekuya-offgrid/'+reportId);
			var msg = "Reporte encontrado",
					title = "Exito!";
			toastr.success(msg, title);
		}
			
	}
});