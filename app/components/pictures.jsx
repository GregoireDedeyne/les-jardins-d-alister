"use client";
import React from "react";
import { LayoutGrid } from "./layoutGrid.jsx";

export function Pictures() {
	return (
		<div className="h-screen py-20 w-full">
			<LayoutGrid cards={cards} />
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">
				Réalisation d&apos;une cloture
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Installation d'une clôture en bois durable et esthétique pour
				assurer l'intimité et l'intégration harmonieuse dans l'espace
				paysager. Un projet alliant fonctionnalité et design pour un
				résultat impeccable.
			</p>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">
				Création d'un espace détente
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Création complète d'un espace détente : conception, aménagement
				paysager, et installation de la terrasse avec mobilier,
				plantations, et foyer extérieur. Un projet clé en main pour un
				jardin accueillant et convivial.
			</p>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">
				Création d'un espace détente
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Conception et réalisation d'un espace détente avec terrasse,
				bassin aquatique, et aménagement paysager. Un projet complet
				pour un cadre apaisant et élégant, intégrant nature et confort.
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div>
			<p className="font-bold text-4xl text-white">
				Réalisation d&apos;une cloture
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Installation d'une clôture en bois durable et esthétique pour
				assurer l'intimité et l'intégration harmonieuse dans l'espace
				paysager. Un projet alliant fonctionnalité et design pour un
				résultat impeccable.
			</p>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: "md:col-span-2",
		thumbnail: "/Pictures/haie.jpg",
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: "col-span-1",
		thumbnail: "/Pictures/DSC_3846.jpg",
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: "col-span-1",
		thumbnail: "/Pictures/DSC_3755.jpg",
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: "md:col-span-2",
		thumbnail: "/Pictures/DSC_0069.jpg",
	},
];
