import { BlackCut } from "../components/blackCut";
import Swipper from "../components/swiper";
import { WhiteCut } from "../components/whiteCut";

export function Teams() {
	return (
		<div className=" flex flex-col flex-grow relative " id="teams">
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
