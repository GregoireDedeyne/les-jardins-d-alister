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
				<h1 className="font-organic mb-5 pt-10 mr-5 uppercase text-3xl sm:text-3xl md:text-4xl text-transparent lg:text-[5rem] font-bold font-outline-2-secondary self-end			">
					{" "}
					Réalisations{" "}
				</h1>
				<p className="self-center w-2/3 text-black font-cocomat text-xl pt-5">
					{" "}
					Découvrez quelques-unes de nos plus belles créations. Chaque
					projet est une démonstration de notre savoir-faire et de
					notre passion pour l&apos;architecture paysagère. Que ce
					soit pour des résidences privées, des immeubles à
					appartements ou des espaces publics, nous apportons une
					touche unique à chaque aménagement.{" "}
				</p>
				<Pictures />

				<Link href={"/instagram"} className="text-center">
					{" "}
					<button className="btn p-8 mb-10 text-l">
						{" "}
						Voir plus{" "}
					</button>{" "}
				</Link>
			</div>
		</div>
	);
}
