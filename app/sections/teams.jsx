import { BlackCut } from "../components/blackCut";
import Swipper from "../components/swiper";
import { WhiteCut } from "../components/whiteCut";

export function Teams() {
	return (
		<div
			className="min-h-screen flex flex-col flex-grow relative "
			id="teams"
		>
			<div className="relative grow z-10">
				{" "}
				<Swipper />{" "}
			</div>

			<div className="bg-slate-200 min-h-[50%] relative z-0">
				{" "}
				<WhiteCut />{" "}
			</div>

			<div className="bg-black min-h-[50%]">
				{" "}
				<BlackCut />{" "}
			</div>
		</div>
	);
}
