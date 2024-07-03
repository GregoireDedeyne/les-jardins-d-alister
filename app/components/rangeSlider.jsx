// pages/index.js
"use client";
import React, { useState, useEffect } from "react";

export function RangeSlider() {
	const [value, setValue] = useState(0);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const getTextForValue = (val) => {
		const texts = [
			"Un bon travail de qualité avec un personnel à l’écoute de ses clients, je recommande fortement cette entreprise ! ",
			"Patron disponible et à l'écoute de son client afin de fournir un travail soigné et esthétique. Son personnel est efficace, soigneux et professionnel. ",
			"Travaux et services réalisés par une équipe de professionnels et toujours à l’écoute des clients. Terrasse en composite et nouvelles plantations, pelouse qui répondent à nos demandes. Merci ",
			"Alister a fait mon aménagement, nous avons été extrêmement contents! Réponse rapide, disponibilité et honnêteté! Merci Alister ",
			"J'ai eu l'occasion de faire appel à la société les jardins D’Alister et je tiens à partager mon expérience extrêmement positive. L'équipe s'est montrée très à l'écoute de mes besoins, toujours disponible pour répondre à mes questions et d'un grand professionnalisme tout au long du projet. Je suis pleinement satisfait du service reçu et je recommande sans hésiter les jardins D’Alister à tous ceux qui cherchent un service de qualité + + dans ce domaine. En bref, que du positif Merci Alister 😀👌🌿 🍀🌴 ",
		];
		return texts[val] || "Valeur hors de portée";
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((prevValue) => (prevValue < 4 ? prevValue + 1 : 0));
		}, 5000); // Change the review every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const getSubtitleForValue = (val) => {
		const texts = [
			"Aspects positifs : Qualité, Rapport qualité-prix",
			"Aspects positifs : Professionnalisme, Qualité",
			"Aspects positifs : Professionnalisme, Qualité ",
			"Aspects positifs : Professionnalisme, Qualité",
			"Aspects positifs : Professionnalisme, Qualité",
		];
		return texts[val] || "Valeur hors de portée";
	};

	const getTitleForValue = (val) => {
		const texts = [
			"Jonas D",
			"Martine D",
			"Christine L.",
			"Thomas G.",
			"Xavier D.",
		];
		return texts[val] || "Valeur hors de portée";
	};

	return (
		<div className="p-6 flex text-black">
			<input
				type="range"
				min="0"
				max="4"
				value={value}
				onChange={handleChange}
				className="self-center rotate-90"
			/>
			<div className="mt-6   self-center p-4 bg-gray-100 rounded shadow w-2/3 font-cocomat">
				<h2 className="text-2xl"> {getTitleForValue(value)} </h2>
				<img src="/Pictures/rating.png" />
				<h3 className="py-5"> {getSubtitleForValue(value)} </h3>
				<p className="text-sm h-[10rem] font-bold overflow-hidden text-ellipsis">
					{getTextForValue(value)}
				</p>
			</div>
		</div>
	);
}
