import Link from "next/link";
import { Pictures } from "../components/pictures";

export function Achievements() {
	return (
		<div
			id="achievements"
			className="bg-cover min-h-screen bg-white "
			style={{
				backgroundImage: "url('/Pictures/logoMosaique.png')",
			}}
		>
			<div className="container mx-auto flex flex-col">
				<h1 className="font-organic mb-5 pt-5 text-4xl mr-5 uppercase sm:text-5xl md:text-6xl text-transparent lg:text-[9rem] font-bold dark:font-outline-2-secondary font-outline-2-primary self-end			">
					{" "}
					Réalisations{" "}
				</h1>
				<p className="self-center w-2/3 text-black font-cocomat text-xl">
					{" "}
					Découvrez quelques-unes de nos plus belles créations. Chaque
					projet est une démonstration de notre savoir-faire et de
					notre passion pour l'architecture paysagère. Que ce soit
					pour des résidences privées, des immeubles à appartements ou
					des espaces publics, nous apportons une touche unique à
					chaque aménagement.{" "}
				</p>
				<Pictures />

				<Link href={"/instagram"} className="text-center">
					{" "}
					<button className="btn mb-10"> Voir plus </button>{" "}
				</Link>
			</div>
		</div>
	);
}
