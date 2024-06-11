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
				className="absolute top-0 right-10 w-[26rem] h-36"
			/>
			<img
				src="/Pictures/Architecte.png"
				className="absolute right-10 bottom-[-20rem]"
			/>{" "}
			<img
				src="/Pictures/logoColorIndex.png"
				className="absolute right-0 bottom-[5.5rem] w-[26rem]"
			/>
		</div>
	);
}
