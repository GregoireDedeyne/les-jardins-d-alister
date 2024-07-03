import { StepsBySteps } from "../components/stepsBySteps";

export function Steps() {
	return (
		<div className="bg-black">
			<div className=" container mx-auto p-10">
				<div className="flex gap-5 font-organic">
					<h1 className="mb-5 pt-5 text-2xl sm:text-3xl md:text-4xl text-transparent xl:text-[5rem] font-bold font-outline-2-primary  self-end">
						{" "}
						VOTRE PROJET{" "}
					</h1>{" "}
					<h2 className="mb-5 pt-5 text-sm sm:text-lg md:text-xl text-transparent lg:text-[4rem] font-bold text-white self-end">
						{" "}
						en 4 étapes
					</h2>
				</div>
				<StepsBySteps />{" "}
			</div>
		</div>
	);
}
