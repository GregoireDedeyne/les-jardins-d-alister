export function AboutUs() {
	return (
		<div className="hero min-h-screen relative container mx-auto">
			<div className="relative z-10 flex flex-col items-center justify-center h-full">
				<div className="relative w-full whitespace-nowrap md:justify-start justify-center">
					<h2 className="mb-5 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary font-organic">
						{" "}
						A PROPOS DE NOUS{" "}
					</h2>
				</div>
				<div
					className="max-w-[50rem] z-0 flex items-center justify-center m-2 sm:hero-content relative text-zinc-300 border-4 border-white rounded-xl bg-cover bg-center p-16 "
					style={{
						backgroundImage: "url('/Pictures/aboutUsImg.jpg')",
					}}
				>
					<div className="hero-overlay absolute bg-opacity-60"></div>

					<div className="max-w-4/5 z-0  font-cocomat">
						<p className="mb-5 md:text-4xl text-lg">
							Depuis notre création, Les Jardins d'Alister se sont
							imposés comme une référence dans le domaine de
							l'architecture paysagère.
						</p>
						<p className="mb-5 md:text-4xl text-lg">
							Fort de nombreuses années d'expérience, nous sommes
							passionnés par l'art de sublimer les espaces
							extérieurs. Notre approche repose sur l'écoute, la
							créativité et l'excellence.
						</p>
						<p className="mb-5 md:text-4xl text-lg">
							Chaque projet est une nouvelle opportunité de
							repousser les limites du design paysager et de créer
							des lieux uniques, alliant esthétique,
							fonctionnalité et durabilité.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
