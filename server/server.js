process.env.MAIL_URL="smtp://cotizadorenef%40gmail.com:sdnjsffetnldbglz@smtp.gmail.com:25/";

Meteor.startup(function () {
  Acreports._ensureIndex({caseNumber: 1});
  Ongridreports._ensureIndex({caseNumber: 1});
  Offgridreports._ensureIndex({caseNumber: 1});
});