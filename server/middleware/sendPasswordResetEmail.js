import nodemailer from 'nodemailer';

export const sendPasswordResetEmail = (token, email, name) => {
	const html = `
    <html>
        <body>
          <h3>Dear ${name}</h3>
             <p>Please click on the link below to reset your password.</p>
             <a href="http://localhost:5173/password-reset/${token}">Click here!</a>
        </body>
    </html>`;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: email,
		subject: 'Shop by Sushi Bar: Reset your password request.',
		html: html,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log(`Email send to ${email}`);
			//console.log(info.response);
		}
	});
};