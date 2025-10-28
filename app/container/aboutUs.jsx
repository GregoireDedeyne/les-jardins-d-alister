export function AboutUs() {
	return (
		<div className="hero relative container mx-auto p-10">
			<div className="relative z-10 flex flex-col items-center justify-center h-full">
				<div className="relative w-full whitespace-nowrap md:justify-start justify-center">
					<h2 className="mb-5 text-3xl sm:text-3xl md:text-4xl lg:text-[5rem] text-transparent font-bold font-outline-2-primary font-organic uppercase">
						{" "}
						à PROPOS DE NOUS{" "}
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
						<p className="mb-5 md:text-xl text-lg">
							Depuis notre création, Les jardins d&apos;Alister se
							sont imposés comme une référence dans le domaine de
							l&apos;architecture paysagère.
						</p>
						<p className="mb-5 md:text-xl text-lg">
							Fort de nombreuses années d&apos;expérience, nous
							sommes passionnés par l&apos;art de sublimer les
							espaces extérieurs. Notre approche repose sur
							l&apos;écoute, la créativité et l&apos;excellence.
						</p>
						<p className="mb-5 md:text-xl text-lg">
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
