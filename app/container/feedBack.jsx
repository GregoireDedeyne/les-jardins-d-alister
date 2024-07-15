import { CardFeedBack } from "../components/cardFeedBack";
import { RangeSlider } from "../components/rangeSlider";
export function FeedBack() {
	return (
		<div
			className="bg-repeat min-h-screen bg-white py-5"
			style={{
				backgroundImage: "url('/Pictures/logoMosaique.png')",
			}}
		>
			<div className="container mx-auto flex flex-col">
				<h1 className="font-organic uppercase mr-5 mb-5 py-5 text-3xl sm:text-3xl md:text-4xl text-transparent lg:text-[5rem] font-bold font-outline-2-secondary self-end			">
					{" "}
					Votre avis compte{" "}
				</h1>
				<p className="self-center w-2/3 text-black font-cocomat text-xl">
					{" "}
					Les retours de nos clients sont essentiels pour nous. Ils
					nous permettent de grandir et d&apos;améliorer constamment
					nos services. Voici ce que certains de nos clients disent de
					leur expérience avec Les jardins d&apos;Alister.{" "}
				</p>
				<div className="flex flex-col lg:flex-row">
					{" "}
					<div className="  lg:w-1/2">
						{" "}
						<CardFeedBack />{" "}
					</div>{" "}
					<div className="lg:w-1/2 md:h-[28rem] lg:h-[35rem] flex">
						{" "}
						<RangeSlider />{" "}
					</div>{" "}
				</div>
			</div>
		</div>
	);
}
