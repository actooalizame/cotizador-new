Template.adminOngridReport.helpers({
	'formatDate': function(){
		var reportId = this._id,
				report = Ongridreports.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	}
});