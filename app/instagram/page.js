"use client";
import Link from "next/link";
import React from "react";

import { ElfsightWidget } from "react-elfsight-widget";

export default function Instagram() {
	return (
		<div className="min-h-screen bg-white">
			{" "}
			<Link href={"/"} className="flex justify-center top-10">
				{" "}
				<button className="btn m-10"> Page d'accueil </button>{" "}
			</Link>
			<ElfsightWidget widgetId="fb497fff-66f1-402e-9822-cf094f3fc9dc" />{" "}
		</div>
	);
}
