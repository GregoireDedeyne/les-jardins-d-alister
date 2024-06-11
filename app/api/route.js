import nodemailer from "nodemailer";

export async function POST(req) {
	const { name, email, message } = await req.json();

	const transporter = nodemailer.createTransport({
		host: "smtp-mail.outlook.com",
		port: "587",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
		tls: {
			// Ignorer la vérification du certificat
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: `Contact Form: ${name}`,
		text: message,
	};

	try {
		await transporter.sendMail(mailOptions);
		return new Response(
			JSON.stringify({ message: "Email sent successfully" }),
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return new Response(
			JSON.stringify({ message: "Error sending email", error }),
			{ status: 500 }
		);
	}
}
