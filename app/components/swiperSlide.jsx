import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SwiperSlider({ url, text, name }) {
	return (
		<div className="">
			<img
				src={url}
				className="absolute h-[100%] bottom-0 left-0 lg:left-auto lg:right-[1%]"
			/>

			<div className="bg-black w-full lg:w-2/3 xl:w-1/2 lg:h-24 xl:h-32 absolute bottom-5 sm:flex flex-col text-center md:flex-row md:justify-center md:gap-[5rem] xl:gap-[10rem] py-2 md:py-10 lg:rounded-r-full font-cocomat">
				{" "}
				<p className="text-4xl xl:text-3xl 2xl:text-5xl"> {text} </p>
				<p className="text-4xl xl:text-3xl 2xl:text-6xl"> {name} </p>
			</div>
		</div>
	);
}
