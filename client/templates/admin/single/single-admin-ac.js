Template.adminAcReport.helpers({
	'formatDate': function(){
		var reportId = this._id,
				report = Acreports.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	}
});