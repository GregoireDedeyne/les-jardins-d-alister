"use client";
import React from "react";
import { StickyScroll } from "./stickyScroll";
import Image from "next/image";
const content = [
	{
		title: "1. Prise de contact et devis gratuit",
		description:
			"Le premier pas vers la réalisation de votre projet commence par une prise de contact. Nous vous offrons un devis gratuit et sans engagement. Un rendez-vous sur place est organisé avec notre expert, qui discutera avec vous de vos besoins et de vos envies. Notre expert, grâce à son expérience et à sa formation, saura également vous proposer des solutions et des idées adaptées si vous manquez d'inspiration.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/Pictures/devis.png"
					width={500}
					height={500}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "2. Conception personnalisée",
		description:
			"En fonction de vos discussions et de vos désirs, nous élaborons une conception sur mesure. Cela inclut des plans détaillés et des projections 3D, afin que vous puissiez visualiser clairement le résultat final. Nous prenons en compte chaque aspect de votre espace extérieur pour créer un design harmonieux et fonctionnel.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/Pictures/conceptionPerso.png"
					width={500}
					height={500}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "3. Mise en œuvre",
		description:
			"Une fois la conception approuvée, notre équipe de professionnels commence la réalisation de votre projet. De l'installation de terrasses à la pose de gazon, en passant par la création de parterres et de plans d'eau, chaque étape est exécutée avec soin et précision. Nous utilisons des matériaux de haute qualité et des techniques éprouvées pour garantir la durabilité et l'esthétique de votre espace.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/Pictures/miseEnOeuvre.png"
					width={500}
					height={500}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "4. Suivi et entretien",
		description:
			"Après l'achèvement des travaux, nous restons à votre disposition pour assurer l'entretien de vos espaces verts. Nos services d'entretien régulier garantissent que votre jardin reste magnifique et bien entretenu tout au long de l'année. Nous sommes également disponibles pour toute question ou ajustement nécessaire après la fin du projet.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/Pictures/suiviPerso.png"
					width={500}
					height={500}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
];
export function StepsBySteps() {
	return (
		<div className=" pt-10 lg:p-10 font-cocomat">
			<StickyScroll content={content} />
		</div>
	);
}
