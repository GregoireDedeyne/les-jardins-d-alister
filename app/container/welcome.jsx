export function Welcome() {
	return (
		<div className="flex min-h-screen justify-center lg:justify-between container mx-auto">
			<div className="hidden lg:flex items-center w-1/2"> </div>
			<div className="flex flex-col justify-center w-1/2 text-black text-m md:text-lg lg:text-xl font-cocomat">
				{" "}
				<img
					src="Pictures/bordureG.png"
					className="absolute xl:h-48 xl:w-48 lg:left-[35rem] xl:top-[8rem] top-5 sm:top-[8rem] sm:left-[10rem] w-20 h-20 left-[3rem] 2xl:left-[52rem] 2xl:w-64 2xl:h-64 2xl:top-24 "
				/>
				<p className="mb-5">
					{" "}
					Bienvenue chez Les jardins d&apos;Alister.{" "}
				</p>
				En tant que votre
				<p className="mb-5">
					{" "}
					partenaire privilégié pour la création et l&apos;aménagement
					d&apos;espaces extérieurs d&apos;exception, nous sommes
					basés à Tournai en Belgique et nous distinguons par notre
					expertise en architecture paysagère.{" "}
				</p>
				<p className="mb-5">
					{" "}
					Notre mission est de transformer vos rêves en réalité. Que
					vous souhaitiez un jardin privé, un parc d&apos;entreprise
					ou l&apos;embellissement d&apos;un espace public, notre
					équipe de professionnels expérimentés est là pour vous
					accompagner à chaque étape.{" "}
				</p>{" "}
				<p className="mt-24 text-2xl"> Alister Hennart</p>
				<p className="my-2 ">
					{" "}
					Dirigeant de l&apos;entreprise et architecte paysagiste{" "}
				</p>
				<img
					src="/Pictures/bordureD.png"
					className="absolute xl:h-48 xl:w-48 xl:right-[-2.2rem] lg:right-[1rem] sm:bottom-[21.5rem] sm:right-[10rem] bottom-[15rem] right-[4rem] w-20 h-20  2xl:w-64 2xl:h-64 xl:bottom-[20rem] 2xl:right-16"
				/>
			</div>
		</div>
	);
}
