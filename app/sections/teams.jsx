import { BlackCut } from "../components/blackCut";
import Swipper from "../components/swiper";
import { WhiteCut } from "../components/whiteCut";

export function Teams() {
	return (
		<div className=" flex flex-col flex-grow relative " id="teams">
			<div className="relative  grow bg-cover bg-[url('/Pictures/slider.jpg')]">
				{" "}
				<h1 className="xl:left-[50rem] right-10 absolute z-0 font-organic pt-[10rem]  text-3xl sm:text-3xl md:text-4xl text-transparent lg:text-[5rem] font-bold uppercase font-outline-2-primary ">
					{" "}
					équipe{" "}
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
