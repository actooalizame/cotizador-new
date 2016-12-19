Template.adminPuertekuyaReport.helpers({
	'formatDate': function(){
		var reportId = this._id,
				report = Puerteoffgrid.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	}
});