export function Welcome() {
	return (
		<div className="flex  justify-center lg:justify-between container mx-auto p-5">
			<div className="hidden lg:flex items-center w-1/2"> </div>
			<div className="flex flex-col justify-center w-1/2 p-10 text-black text-m md:text-lg lg:text-xl font-cocomat">
				{" "}
				<img
					src="Pictures/bordureG.png"
					className="hidden absolute  lg:left-[35rem] xl:left-[41rem] xl:top-0 top-5 sm:top-[8rem] sm:left-[10rem] w-20 h-20 left-[3rem] 2xl:left-[52rem] 2xl:w-28 2xl:h-28 2xl:top-0 "
				/>
				<p className="mb-5">
					{" "}
					Bienvenue chez Les jardins d&apos;Alister.{" "}
				</p>
				<p className="mb-5">
					{" "}
					En tant que votre partenaire privilégié pour la création et
					l&apos;aménagement d&apos;espaces extérieurs
					d&apos;exception, nous sommes basés à Tournai en Belgique et
					nous distinguons par notre expertise en architecture
					paysagère.{" "}
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
					className="absolute hidden xl:right-[5rem] lg:right-[1rem] sm:bottom-[21.5rem] sm:right-[10rem] bottom-[15rem] right-[4rem] w-20 h-20  2xl:w-28 2xl:h-28 xl:bottom-[10rem] 2xl:right-24"
				/>
			</div>
		</div>
	);
}
