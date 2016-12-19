Template.contact.events({
	'submit .form-contacto': function(e){
		e.preventDefault();
		var name = e.target.firstName.value,
				phone = e.target.phone.value,
				email = e.target.email.value,
				comment = e.target.comment.value;
		var message = "Una solicitud de contacto ha sido enviada a través del cotizador online, sección Contacto." + "\n\n" +
									"Nombre: " + name + "\n" +
									"Teléfono: " + phone + "\n" +
									"Email de contacto: " + email + "\n" +
									"Mensaje: " + comment;
		var to = "enefchile@gmail.com",
        from = email,
        subject = "Solicitud de contacto Online Enef",
        text = message;
    Meteor.call('sendEmail', to,from,subject,text);
    var msg = "Email Recibido",
					title = "Exito!";
		toastr.success(msg, title);
		Router.go('home');
	}
});