Acreports = new Mongo.Collection('acreports');

var Schemas = {};

Schemas.Acreports = new SimpleSchema({
    caseNumber: {
        type: String,
        decimal: false,
        label: "Numero de Caso"
    },
    ancho: {
        type: Number,
        decimal: true,
        max: 30,
        label: "Ancho"
    },
    largo: {
        type: Number,
        decimal: true,
        max: 30,
        label: "Largo"
    },
    alto: {
        type: Number,
        decimal: true,
        max: 15,
        label: "Alto"
    },
    people: {
        type: Number,
        decimal: false,
        label: "Cantidad de personas",
    },
    building: {
        type: String,
        label: "Zona"
    },
    name: {
        type: String,
        label: "Nombre",
        min: 7,
        max: 45
    },
    phone: {
        type: String,
        label: "Telefono",
        max: 15
    },
    email: {
        type: String,
        label: "Email de Contacto",
        regEx: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    },
    comment: {
        type: String,
        label: "Comentario adicional",
        optional: true
    },
    calculation: {
        type: Number,
        decimal: true,
        label: "Calc",    
    },
    equipment: {
        type: String,
        label: "Valor de equipos"
    },
    instalation: {
        type: String,
        label: "Valor de instalacion"
    },
    percentage: {
        type: String,
        label: "Porcentaje de descuento"
    },
    totalDiscounted: {
        type: String,
        label: "Precio total con descuento"
    },
    category: {
        type: String,
        label: "Categoria"
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
    },
});

SimpleSchema.messages({
	required: "[label] es un campo obligatorio",
	minNumber: "El valor de [label] debe ser como minimo de [min]",
  maxNumber: "El valor de [label] debe ser como máximo de [max]",
	minString: "[label] debe tener como minimo [min] caracteres",
	maxString: "[label] debe tener como máximo [max] caracteres",
  expectedNumber: "[label] debe ser un número",
  regEx: [ {msg: "Formato de [label] erroneo"} ]

});

Acreports.attachSchema(Schemas.Acreports);