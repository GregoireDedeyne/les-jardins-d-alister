import { StepsBySteps } from "../components/stepsBySteps";

export function Steps() {
	return (
		<div className="bg-black">
			<div className=" container mx-auto">
				<div className="flex gap-5 font-organic">
					<h1 className="mb-5 pt-5 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-[9rem] font-bold dark:font-outline-2-primary font-outline-2-secondary self-end">
						{" "}
						votre projet{" "}
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
