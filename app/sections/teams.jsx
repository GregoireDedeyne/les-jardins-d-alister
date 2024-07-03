import { BlackCut } from "../components/blackCut";
import Swipper from "../components/swiper";
import { WhiteCut } from "../components/whiteCut";

export function Teams() {
	return (
		<div className=" flex flex-col flex-grow relative " id="teams">
			<div className="relative  grow bg-cover bg-[url('/Pictures/slider.jpg')]">
				{" "}
				<h1 className="xl:left-[40rem] right-10 absolute z-0 font-organic pt-[10rem]  text-4xl md:text-7xl text-transparent xl:text-[11rem] font-bold dark:font-outline-2-primary font-outline-2-secondary">
					{" "}
					Equipe{" "}
				</h1>
				<img
					src="/Pictures/logoWhite.png"
					className="hidden lg:flex absolute top-0 left-[-15rem] w-1/2"
				/>{" "}
				<Swipper />{" "}
			</div>

			<div className="bg-black min-h-[50%] relative z-0">
				{" "}
				<WhiteCut />{" "}
			</div>

			<div className="bg-black min-h-[50%]">
				{" "}
				<BlackCut
					text={"Faites de votre jardin, un véritable havre de paix."}
				/>{" "}
			</div>
		</div>
	);
}
