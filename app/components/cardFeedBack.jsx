"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobble-card";

export function CardFeedBack() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-5">
			<WobbleCard
				imageUrl={`bg-[url('/Pictures/photoAvis1.jpg')]`}
				containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
				className=""
			></WobbleCard>
			<WobbleCard
				imageUrl={`bg-[url('/Pictures/photoAvis2.jpg')]`}
				containerClassName="col-span-1 min-h-[300px]"
			></WobbleCard>
			<WobbleCard
				imageUrl={`bg-[url('/Pictures/photoAvis3.jpg')]`}
				containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
			></WobbleCard>
		</div>
	);
}
