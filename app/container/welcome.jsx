export function Welcome() {
	return (
		<div className="flex min-h-screen justify-center lg:justify-between container mx-auto">
			<div className="hidden lg:flex items-center w-1/2"> </div>
			<div className="flex flex-col justify-center w-1/2 text-black text-m md:text-lg lg:text-xl font-cocomat">
				{" "}
				<p className="mb-5"> Bienvenue chez Les jardins d'Alister. </p>
				En tant que votre
				<p className="mb-5">
					{" "}
					partenaire privilégié pour la création et l'aménagement
					d'espaces extérieurs d'exception, nous sommes basés à
					Tournai en Belgique et nous distinguons par notre expertise
					en architecture paysagère.{" "}
				</p>
				<p className="mb-5">
					{" "}
					Notre mission est de transformer vos rêves en réalité. Que
					vous souhaitiez un jardin privé, un parc d'entreprise ou
					l'embellissement d'un espace public, notre équipe de
					professionnels expérimentés est là pour vous accompagner à
					chaque étape.{" "}
				</p>{" "}
				<p className=""> Alister Hennart</p>
				<p className="mb-5">
					{" "}
					Dirigeant de l’entreprise et architecte paysagiste{" "}
				</p>
			</div>
		</div>
	);
}
