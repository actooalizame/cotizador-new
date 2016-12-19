Template.adminPuertekuyaReports.helpers({
	'puertekuyaRecords': function(){
		return Puerteoffgrid.find({},{sort:{createdAt:-1}});
	},
	

	'formatDateOngrid': function(){
		var reportId = this._id,
				report = Puerteoffgrid.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	},
	
});