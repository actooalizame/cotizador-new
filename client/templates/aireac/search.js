Template.acSearch.rendered = function(){
	function setHeight() {
    var windowHeight = $(window).innerHeight(),
      wrapper = $('#searcher');
    wrapper.css('min-height', windowHeight);
  }

  setHeight();
};


Template.acSearch.events({
	'submit .ac-search': function(e){
		e.preventDefault();
		var caseNumber = e.target.caseNumber.value,
				report = Acreports.findOne({caseNumber: caseNumber});
		if(report===undefined){
			var msg = "Caso Inexistente",
					title = "Error!";
			toastr.error(msg, title);
		}else{
			var	reportId = report._id;
			Router.go('/cotizacion-climatizacion/'+caseNumber);
			var msg = "Reporte encontrado",
					title = "Exito!";
			toastr.success(msg, title);
		}
			
	}
});