"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar";
import Image from "next/image";
export function FloatingNavDemo() {
	const navItems = [
		{
			name: "Accueil",
			link: "/",
			// icon: (
			// 	<img
			// 		src="/Pictures/Home.png"
			// 		className="h-4 w-4 text-neutral-500 dark:text-white"
			// 	/>
			// ),
		},
		{
			name: "Services",
			link: "#services",
			// icon: (
			// 	<IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
			// ),
		},
		{
			name: "Photos",
			link: "#achievements",
			// icon: (
			// 	<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
			// ),
		},
		{
			name: "Equipes",
			link: "#teams",
			// icon: (
			// 	<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
			// ),
		},
	];
	return (
		<div className="relative  w-full">
			<FloatingNav navItems={navItems} />
		</div>
	);
}
