import { NavBar } from "../components/navBar";
import { FloatingNavDemo } from "../components/navBar2";

export function Index() {
	return (
		<div
			className="bg-cover bg-center min-h-screen"
			style={{
				backgroundImage: "url('/Pictures/index.jpg')",
			}}
		>
			<NavBar />
			<FloatingNavDemo />
			<img
				src="/Pictures/logoMonoIndex.png"
				className="absolute top-0 md:top-[-5rem] w-[60%] h-[18%] md:h-1/3 right-0 xl:w-1/3 lg:w-[60%] lg:h-1/3"
			/>
			<img
				src="/Pictures/Architecte.png"
				className="absolute right-10 bottom-[0rem] sm:bottom-[-15rem] lg:bottom-[-20rem]"
			/>{" "}
			<img
				src="/Pictures/logoColorIndex.png"
				className="absolute right-0 sm:bottom-0 bottom-[9rem] lg:bottom-[5.5rem] w-[13rem] lg:w-[26rem]"
			/>
		</div>
	);
}
