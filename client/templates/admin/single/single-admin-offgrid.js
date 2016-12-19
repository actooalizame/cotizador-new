Template.adminOffgridReport.helpers({
	'formatDate': function(){
		var reportId = this._id,
				report = Offgridreports.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	}
});