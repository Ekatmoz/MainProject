import nodemailer from 'nodemailer';

export const sendVerificationEmail = (token, email, name) => {
	const html = `
    <!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h3 {
            color: #333;
        }
        p {
            color: #666;
            font-size: 16px;
            line-height: 1.5;
        }
        .verify-button {
            display: inline-block;
            padding: 12px 20px;
            margin-top: 20px;
            background-color: #00bcd4;
            color: #ffffff;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;
        }
        .verify-button:hover {
            background-color: #008c9e;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h3>Dear ${name},</h3>
        <p>Thank you for signing up at <strong>Shop by Sushi Bar!</strong></p>
        <p>Please click the button below to verify your email address:</p>
        <a class="verify-button" href="http://localhost:5173/email-verify/${token}">Verify Email</a>
        <p class="footer">If you did not sign up for this account, you can ignore this email.</p>
    </div>
</body>
</html>
    `;

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
		subject: 'Verify your email address',
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