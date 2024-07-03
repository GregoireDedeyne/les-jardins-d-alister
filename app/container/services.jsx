"use client";
import React from "react";
import { LayoutGridServices } from "../components/layoutGridServices.jsx";

export function Services() {
	return (
		<div
			id="Services"
			className="hidden md:block bg-repeat min-h-screen bg-white p-10"
			style={{
				backgroundImage: "url('/Pictures/logoMosaique.png')",
			}}
		>
			<div className="container mx-auto flex flex-col ">
				<h1 className="mb-5 pt-5 text-xl sm:text-3xl md:text-4xl text-transparent lg:text-[5rem] font-bold font-outline-2-secondary  self-end font-organic">
					SERVICES{" "}
				</h1>
				<div className="self-center font-cocomat w-2/3 text-black text-xl">
					{" "}
					<p className="m-2">
						{" "}
						Chez Les jardins d&#39;Alister, nous offrons une gamme
						complète de services pour transformer et entretenir vos
						espaces extérieurs, en répondant à vos besoins et en
						réalisant vos rêves d&#39;extérieur.{" "}
						<span className="my-2">
							{" "}
							Que vous ayez un projet d&#39;aménagement,
							d&#39;entretien ou de transformation de votre
							jardin, Les Jardins d&#39;Alister sont là pour vous
							accompagner à chaque étape, avec professionnalisme
							et passion. Contactez-nous pour donner vie à vos
							idées et créer des espaces extérieurs
							d&#39;exception.{" "}
						</span>{" "}
					</p>{" "}
				</div>
				<div className="h-screen w-full">
					<LayoutGridServices cards={cards} />
				</div>
			</div>
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div>
			<p className="font-bold text-4xl  text-white">
				Conception paysagère
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200 ">
				Nous proposons des services de conception sur mesure, incluant
				des plans détaillés et des projections 3D. Chaque projet est
				conçu en fonction de vos besoins et de vos désirs, en harmonie
				avec l&apos;environnement et le style souhaité.
			</p>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">
				Aménagement extérieur
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Nous créons des terrasses, installons des pergolas, aménageons
				parterres, plans d&apos;eau, clôtures, palissades, étangs et
				piscines naturelles. De A à Z, nous transformons votre espace
				extérieur en un lieu de détente et de bien-être.
			</p>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">Mise à blanc</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				La mise à blanc de terrain est essentielle pour démarrer tout
				projet d&apos;aménagement sur de bonnes bases. Elle comprend le
				nettoyage du sol, l&apos;élimination des débris et la
				préparation du terrain pour de futurs aménagements, assurant
				ainsi un espace propre et prêt à accueillir vos idées et
				projets.
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">Pose de gazon</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Nous proposons différentes solutions de gazon : semis, gazon en
				rouleau ou gazon synthétique. Chaque option est adaptée à vos
				besoins et à votre budget, garantissant un résultat impeccable
				et durable.
			</p>
		</div>
	);
};
const SkeletonFive = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">Entretien de jardin</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Un jardin bien conçu mérite un entretien de qualité. Nos
				services d&#39;entretien assurent que vos espaces verts restent
				toujours resplendissants.
			</p>
		</div>
	);
};
const SkeletonSix = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">Elagage et abattage</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Nous prenons soin de vos arbres avec des services d&#39;élagage
				et d&#39;abattage, assurant la santé et la sécurité de votre
				jardin.
			</p>
		</div>
	);
};
const SkeletonSeven = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">
				Plantation et palissade d&apos;arbres
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Nous réalisons des plantations diversifiées et installons des
				palissades d&#39;arbres pour structurer et embellir votre espace
				extérieur.
			</p>
		</div>
	);
};
const SkeletonEight = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">Terrasse et allée</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Nous créons et rénovons des terrasses et allées pour agrandir et
				embellir vos espaces de vie extérieure, tout en assurant une
				base solide et durable.
			</p>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: "md:col-span-1",
		thumbnail: "/Pictures/1.png",
		title: "Conception paysagère",
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: "col-span-1",
		thumbnail: "/Pictures/2.png",
		title: "Aménagement extérieur",
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: "col-span-1",
		thumbnail: "/Pictures/3.png",
		title: "Mise à blanc",
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: "col-span-1",
		thumbnail: "/Pictures/4.png",
		title: "Pose de gazon",
	},
	{
		id: 5,
		content: <SkeletonFive />,
		className: "md:col-span-1",
		thumbnail: "/Pictures/5.png",
		title: "Entretien de jardin",
	},

	{
		id: 6,
		content: <SkeletonSix />,
		className: "md:col-span-1",
		thumbnail: "/Pictures/6.png",
		title: "Elagage et Abattage",
	},

	{
		id: 7,
		content: <SkeletonSeven />,
		className: "col-span-1",
		thumbnail: "/Pictures/7.png",
		title: "Plantation et palissade d'arbres",
	},
	{
		id: 8,
		content: <SkeletonEight />,
		className: "md:col-span-1",
		thumbnail: "/Pictures/8.png",
		title: "Terrasse et terrassement",
	},
	{
		id: 9,
		content: <SkeletonEight />,
		className: "md:col-span-1",
		thumbnail: "/Pictures/9.png",
		title: "Terrasse et terrassement",
	},
];
