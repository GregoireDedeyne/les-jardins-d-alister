import { Index } from "../container";
import { AboutUs } from "../container/aboutUs";
import { Welcome } from "../container/welcome";

export function HomePage() {
	return (
		<div id="home" className="">
			<Index />
			<div className="bg-white z-1 relative">
				<img
					className="bg-white hidden lg:block absolute w-[30rem]  2xl:w-[33rem] bottom-0 z-0"
					src="/Pictures/alisterWelcome.png"
				/>{" "}
				<Welcome />
			</div>

			<div className="relative z-20">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-75"
					style={{
						backgroundImage: "url('/Pictures/aboutUsImg.jpg')",
						filter: "blur(5px)",
						zIndex: -1,
					}}
				></div>

				<AboutUs />
			</div>
		</div>
	);
}
