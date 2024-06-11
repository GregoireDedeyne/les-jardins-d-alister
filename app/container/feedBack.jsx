export function FeedBack() {
	return (
		<div
			className="bg-repeat min-h-screen bg-slate-200"
			style={{
				backgroundImage: "url('/Pictures/logoWhite.png')",
			}}
		>
			<div className="container mx-auto flex flex-col">
				<h1 className="font-organic mb-5 pt-5 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-[9rem] font-bold dark:font-outline-2-secondary font-outline-2-primary self-end			">
					{" "}
					Votre avis compte{" "}
				</h1>
				<p className="self-center w-1/3 text-black font-cocomat">
					{" "}
					Les retours de nos clients sont essentiels pour nous. Ils
					nous permettent de grandir et d'améliorer constamment nos
					services. Voici ce que certains de nos clients disent de
					leur expérience avec Les jardins d'Alister.{" "}
				</p>
			</div>
		</div>
	);
}
