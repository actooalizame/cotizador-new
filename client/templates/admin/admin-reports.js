Template.adminReports.helpers({
	'onGridReports': function(){
		return Ongridreports.find({},{sort:{createdAt:-1}});
	},
	'offGridReports': function(){
		return Offgridreports.find({},{sort:{createdAt:-1}});
	},
	'acReports': function(){
		return Acreports.find({},{sort:{createdAt:-1}});
	},

	'formatDateOngrid': function(){
		var reportId = this._id,
				report = Ongridreports.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	},
	'formatDateOffgrid': function(){
		var reportId = this._id,
				report = Offgridreports.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	},
	'formatDateAc': function(){
		var reportId = this._id,
				report = Acreports.findOne({_id:reportId}),
				date = report.createdAt;
		return moment(date).format('DD/MM/YY')
	}
});