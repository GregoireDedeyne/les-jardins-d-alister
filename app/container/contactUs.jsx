"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactUs() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const resetForm = () => {
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};
	useEffect(() => {
		// Initialiser EmailJS avec votre ID utilisateur
		emailjs.init("pj2b1Stj_DPO65PGL");
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Veuillez remplir tous les champs du formulaire.");
			return;
		}

		// Envoyer l'email via EmailJS
		emailjs
			.send("service_9kmzfkw", "template_j0v1lud", formData)
			.then((response) => {
				toast.success("Email envoyé avec succès!");
				resetForm();
			})
			.catch((err) => {
				toast.error("Erreur lors de l'envoi de l'email: " + err.text);
			});
	};

	return (
		<section
			className="min-h-screen bg-cover "
			style={{
				backgroundImage: "url('/Pictures/aboutUsImg.jpg')",
			}}
		>
			<div className="flex flex-col min-h-screen bg-black/60">
				<div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
					<div className="flex-1 lg:flex lg:items-center lg:-mx-6">
						<div className="text-white lg:w-1/2 lg:mx-6">
							<h1
								id="contacts"
								className="font-organic uppercase mb-5 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-[4.5rem] font-bold font-outline-2-primary			"
							>
								contactez-nous{" "}
							</h1>

							<p className="max-w-xl mt-6 font-cocomat">
								Prêt à transformer vos espaces extérieurs ?
								Contactez Les jardins d&apos;Alister dès
								aujourd&apos;hui pour discuter de votre projet.
								Que vous soyez en Belgique ou dans le nord de la
								France, notre équipe est à votre disposition
								pour répondre à vos questions et vous
								accompagner dans la réalisation de vos rêves
							</p>

							<div className="mt-6 md:mt-8">
								<div className="flex mt-4 -mx-1.5 ">
									<a
										className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500 flex"
										href="#"
									>
										<svg
											className="w-8 h-8 fill-current"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M6.62 10.79a15.051 15.051 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.27 2.33.41 3.57.41.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.33 21 3 13.67 3 4.5 3 3.95 3.45 3.5 4 3.5H7.5c.55 0 1 .45 1 1 0 1.24.14 2.45.41 3.57.09.35 0 .75-.27 1.02l-2.2 2.2z" />
										</svg>

										<p className="font-cocomat">
											{" "}
											+32 496 29 69 50{" "}
										</p>
									</a>

									<a
										className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500 flex"
										href="#"
									>
										<svg
											className="w-8 h-8 mx-2"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
												fill="currentColor"
											/>
										</svg>
										<p className="font-cocomat">
											{" "}
											info@lesjardinsdalister.com{" "}
										</p>
									</a>
								</div>
							</div>
						</div>

						<div className="mt-8 lg:w-1/2 lg:mx-6">
							<div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-slate-900 lg:max-w-xl">
								<h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
									Formulaire de contact
								</h1>

								<form className="mt-6" onSubmit={handleSubmit}>
									<div className="flex-1">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Nom complet
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="John Doe"
											className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
											required
										/>
									</div>

									<div className="flex-1 mt-6">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Adresse e-mail
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="johndoe@example.com"
											className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
											required
										/>
									</div>

									<div className="w-full mt-6">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Message
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
											placeholder="Message"
											required
										></textarea>
									</div>

									<button
										type="submit"
										className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
									>
										Envoyer
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
