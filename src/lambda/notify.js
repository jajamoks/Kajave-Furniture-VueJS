const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
	// your server-side functionality

	const API_KEY =
		"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";

	const headers = {
		"Access-Control-Allow-Origin": "*", // better change this for production
		"Access-Control-Allow-Methods": "POST",
		"Access-Control-Allow-Headers": "Content-Type"
	};

	if (event.httpMethod !== "POST") {
		return callback(null, {
			statusCode: 410,
			body: JSON.stringify({
				message: "Only POST requests allowed."
			})
		});
	}

	const payload = JSON.parse(event.body);

	// validate the form
	if (!payload.name || !payload.email || !payload.city || !payload.message) {
		return callback(null, {
			statusCode: 422,
			headers,
			body: JSON.stringify({
				message: "Required information is missing."
			})
		});
	}

	//send the email
	sgMail.setApiKey(API_KEY);
	const msg = {
		to: "itachimessi10@gmail.com",
		from: "FormecMedia-noreply@formecmedia.com",
		subject: "Your Website Has New Form Submission!",
		text: `Details of the forms are below: \n\nUser Name:${payload.name}\n\nEmail:${payload.email}\n\nCity:${payload.city}\nMessage:${payload.message}`
	};
	sgMail.send(msg).then(()=>{
		return callback(null, {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				message: "Message Sent"
			})
		});
	}).catch((err)=>{
		return callback(null, {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				message: "Error Sending Message"
			})
		});

	})

};
