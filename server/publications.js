Meteor.publish('WaterReports', function(){
  return Waterreports.find({});
});

Meteor.publish('PoolReports', function(){
  return Poolreports.find({});
});

Meteor.publish('OnGridReports', function(){
  return Ongridreports.find({});
});

Meteor.publish('OffGridReports', function(){
  return Offgridreports.find({});
});

Meteor.publish('appliances', function(){
	return Appliances.find({});
});

Meteor.publish('singleWaterReport', function(reportId){
	return Waterreports.find({_id:reportId});
});

Meteor.publish('singleOngridReport', function(caseNumber){
  return Ongridreports.find({caseNumber:caseNumber});
});

Meteor.publish('singleOffGridReport', function(caseNumber){
  return Offgridreports.find({caseNumber:caseNumber});
});

Meteor.publish('singlePuerteOffGridReport', function(caseNumber){
  return Puerteoffgrid.find({caseNumber:caseNumber});
});

Meteor.publish('singleAcReport', function(caseNumber){
  return Acreports.find({caseNumber:caseNumber});
});

Meteor.publish('searchWaterReport', function(){
  return Waterreports.find({},{fields: {'caseNumber': 1}});
});

Meteor.publish('searchPoolReport', function(){
  return Poolreports.find({},{fields: {'caseNumber': 1}});
});

Meteor.publish('searchOnGridReport', function(){
  return Ongridreports.find({},{fields: {'caseNumber': 1}});
});

Meteor.publish('searchOffGridReport', function(){
  return Offgridreports.find({},{fields: {'caseNumber': 1}});
});

Meteor.publish('searchPuerteOffGridReport', function(){
  return Puerteoffgrid.find({},{fields: {'caseNumber': 1}});
});

Meteor.publish('searchAcReport', function(){
  return Acreports.find({},{fields: {'caseNumber': 1}});
});

Meteor.publish('adminSearch', function(){
  return [
    Ongridreports.find({},{fields: {'name':1,'caseNumber': 1,'createdAt':1}}),
    Offgridreports.find({},{fields: {'cName':1,'caseNumber': 1,'createdAt':1}}),
    Acreports.find({},{fields: {'name':1,'caseNumber': 1,'createdAt':1}})
  ]
});

Meteor.publish('adminPuertekuyaSearch', function(){
  return Puerteoffgrid.find({},{fields: {'cName':1,'caseNumber': 1,'createdAt':1}});
});

Meteor.publish('singleAdminOffGridReport', function(caseNumber){
  var dataFields = {
    'cName':1,
    'caseNumber': 1,
    'email': 1,
    'phone': 1,
    'comuna': 1,
    'comment': 1,
    'userIp': 1,
    'createdAt':1
  } 
  return Offgridreports.find({caseNumber:caseNumber},{fields: dataFields});
});

Meteor.publish('singleAdminOffGridReportPuerte', function(caseNumber){
  var dataFields = {
    'cName':1,
    'caseNumber': 1,
    'email': 1,
    'userIp': 1,
    'createdAt':1
  } 
  return Puerteoffgrid.find({caseNumber:caseNumber},{fields: dataFields});
});

Meteor.publish('emailConfigs', function(category){
  return EmailConfigs.find({category});
});
/*
Meteor.publish('singleOngridReport', function(reportId){
  return Ongridreports.find({_id:reportId});
});
*/
/*
Meteor.publish('singleOffGridReport', function(reportId){
  return Offgridreports.find({_id:reportId});
});
*/
/*
Meteor.publish('singleAcReport', function(reportId){
  return Acreports.find({_id:reportId});
});
*/