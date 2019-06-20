const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
	// your server-side functionality

	// EMAILS
	// kolhapur@kajavefurniture.com


	const API_KEY =
		process.env.MAIL_API_KEY;

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
		to: ['kolhapur@kajavefurniture.com'],
		from: "WebSubmission@formecmedia.com",
		subject: "Your Website Has New Form Submission!",
		text: `Submission Details: \n\nUser Name: ${payload.name}\n\nEmail: ${payload.email}\n\nCity: ${payload.city}\n\nMessage: ${payload.message}`
	};

	switch (payload.city) {
		case 'Pune':
			msg.to.push('pune@kajavefurniture.com')
			break;
		case 'Satara':
			msg.to.push('satara@kajavefurniture.com')
			break;
		default:
			break;
	}




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
