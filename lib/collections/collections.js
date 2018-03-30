Waterreports = new Mongo.Collection('waterreports');

Poolreports = new Mongo.Collection('poolreports');

Ongridreports = new Mongo.Collection('ongridreports');

Offgridreports = new Mongo.Collection('offgridreports');

Puerteoffgrid = new Mongo.Collection('puerteoffgrid');

EmailConfigs = new Mongo.Collection('emailconfigs');

var Schemas = {};

Schemas.Ongridreports = new SimpleSchema({
    equipment: {
        type: String,
        label: "Valor de equipos"
    },
    instalation: {
        type: String,
        label: "Valor de instalacion"
    },
    caseNumber: {
        type: String,
        decimal: false,
        label: "Numero de Caso"
    },
    acSpend: {
        type: Number,
        decimal: true,
        label: "Gasto en AC"
    },
    montKwats: {
        type: Number,
        decimal: true,
        label: "Kwats Mensuales"
    },
    name: {
        type: String,
        label: "Nombre"
    },
    phone: {
        type: String,
        label: "Telefono",
        optional: false
    },
    comment: {
        type: String,
        label: "Comentario Adicional",
        optional: true
    },
    contactEmail: {
        type: String,
        label: "Email de Contacto",
        //regEx: /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/
    },
    zone: {
        type: String,
        label: "Zona"
    },
    comuna: {
        type: String,
        label: "Comuna",
        optional: true
    },
    dailyRequiredWattsGeneration: {
        type: Number,
        decimal: true,
        label: "Watts deseados"
    },
    zoneRad: {
        type: Number,
        decimal: true,
        label: "Watts diarios"
    },
    dayZoneRadGen: {
        type: Number,
        decimal: true,
        label: "Costo diario en zona"
    },
    suggestedPanels: {
        type: Number,
        decimal: true,
        label: "Paneles requeridos"
    },
    helped: {
        type: Boolean,
        label: "Pidio Asistencia"
    },
    createdAt: {
        type: Date,
        label: "Fecha de creacion"
    },
    userIp: {
        type: String,
        label: "IP de usuario"
    }
});

SimpleSchema.messages({
	required: "[label] es un campo obligatorio",
	minNumber: "El valor de [label] debe ser como minimo de [min]",
    maxNumber: "El valor de [label] debe ser como máximo de [max]",
	minString: "[label] debe tener como minimo [min] caracteres",
	maxString: "[label] debe tener como máximo [max] caracteres",
    expectedNumber: "[label] debe ser un número",
    regEx: [ {msg: "[label] acepta solo emails de Gmail"} ]

});
    



Ongridreports.attachSchema(Schemas.Ongridreports);