import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SwiperSlider({ url, text, name }) {
	return (
		<div>
			<h1 className="font-organic mb-5 pt-[10rem] text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-[12rem] font-bold dark:font-outline-2-primary font-outline-2-secondary text-center pr-20">
				{" "}
				Equipe{" "}
			</h1>
			<img
				src="/Pictures/logoWhite.png"
				className="absolute top-0 left-[-15rem] w-1/2"
			/>
			<img src={url} className="absolute top-0 right-[-5rem]" />

			<div className="bg-black w-1/2 h-32 absolute bottom-0 flex justify-center gap-[10rem] pt-10 rounded-r-full font-cocomat">
				{" "}
				<p className="text-5xl"> {text} </p>
				<p className="text-6xl"> {name} </p>
			</div>
		</div>
	);
}
