import { Card } from "../components/card";

export function Services() {
	return (
		<div className="bg-white min-h-screen pb-5">
			<div id="services" className="container mx-auto flex flex-col">
				<h1 className="mb-5 pt-5 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-[9rem] font-bold dark:font-outline-2-secondary font-outline-2-primary self-end font-organic">
					{" "}
					Services{" "}
				</h1>
				<div className="flex h-full w-full pt-6">
					<div className="w-1/3 content-top font-cocomat text-black">
						<p className="text-2xl mb-10	">
							{" "}
							Chez Les jardins d&#39;Alister, nous offrons une
							gamme complète de services pour transformer et
							entretenir vos espaces extérieurs, en répondant à
							vos besoins et en réalisant vos rêves
							d&#39;extérieur.{" "}
						</p>

						<p className="text-2xl">
							{" "}
							Que vous ayez un projet d&#39;aménagement,
							d&#39;entretien ou de transformation de votre
							jardin, Les Jardins d&#39;Alister sont là pour vous
							accompagner à chaque étape, avec professionnalisme
							et passion. Contactez-nous pour donner vie à vos
							idées et créer des espaces extérieurs
							d&#39;exception.{" "}
						</p>
					</div>{" "}
					<div className="w-full grid grid-cols-3 grid-rows-3">
						<div>
							{" "}
							<Card
								url={"/Pictures/Conception.JPG"}
								text={
									"Nous proposons des services de conception sur mesure, incluant des plans détaillés et des projections 3D. Chaque projet est conçu en fonction de vos besoins et de vos désirs, en harmonie avec l'environnement et le style souhaité."
								}
								title={"Conception paysagère"}
							/>
						</div>
						<div className="mt-10">
							<Card
								url={"/Pictures/amenagementExterieur.JPG"}
								text={
									"De la création de terrasses à l'installation de pergolas, en passant par l'aménagement de parterres etde plans d'eau, nous réalisons des espaces extérieurs qui invitent à la détente et au bien-être. Nousnous occupons de l'aménagement de A à Z, y compris des clôtures, palissades, étangs et piscines naturelles."
								}
								title={"Aménagement extérieur"}
							/>
						</div>
						<div className="mt-20">
							<Card
								url={"/Pictures/emenagementEx.JPG"}
								text={
									"Nous proposons des services de conception sur mesure, incluant des plans détaillés et des projections 3D. Chaque projet est conçu en fonction de vos besoins et de vos désirs, en harmonie avec l'environnement et le style souhaité."
								}
								title={"Aménagement extérieur"}
							/>
						</div>
						<div className="col-start-2 row-start-2 mt-10">
							<Card
								url={"/Pictures/entretienDeJardin.JPG"}
								text={
									"Un jardin bien conçu mérite un entretien de qualité. Nos services d'entretien assurent que vos espaces verts restent toujours resplendissants."
								}
								title={"Entretien de jardin"}
							/>
						</div>
						<div className="col-start-3 row-start-2 mt-20">
							<Card
								url={"/Pictures/elagage.JPG"}
								text={
									"Nous prenons soin de vos arbres avec des services d'élagage et d'abattage, assurant la santé et la sécurité de votre jardin."
								}
								title={"Elagage et abattage"}
							/>
						</div>
						<div className="col-start-1 row-start-2">
							<Card
								url={"/Pictures/poseDeGazon.JPG"}
								text={
									"Nous proposons différentes solutions de gazon : semis, gazon en rouleau ou gazon synthétique. Chaque option est adaptée à vos besoins et à votre budget, garantissant un résultat impeccable et durable."
								}
								title={"Pose de gazon"}
							/>
						</div>
						<div className="col-start-2 row-start-3 mt-10">
							<Card
								url={"/Pictures/Plantation.JPG"}
								text={
									"Nous réalisons des plantations diversifiées et installons des palissades d'arbres pour structurer et embellir votre espace extérieur."
								}
								title={"Plantation et palissade d'arbres"}
							/>
						</div>
						<div className="col-start-3 row-start-3 mt-20">
							<Card
								url={"/Pictures/terrasse.JPG"}
								text={
									"Nous créons et rénovons des terrasses pour agrandir et embellir votre espace de vie extérieur, tout en assurant un terrassement de qualité pour une base solide et durable."
								}
								title={"Terrasse et terrassement"}
							/>
						</div>
					</div>{" "}
				</div>
			</div>
		</div>
	);
}
