"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperSlider } from "./swiperSlide";

export default function Swipper() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="h-[30rem] lg:h-[40rem] flex z-50"
			>
				<SwiperSlide className="flex flex-col">
					<SwiperSlider
						text={"Directeur opérationnel"}
						name={"Martin"}
						url={"/Pictures/Martin.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className=" flex flex-col">
					<SwiperSlider
						text={"Directeur"}
						name={"Alister"}
						url={"/Pictures/AlisterP.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className=" flex flex-col">
					<SwiperSlider
						text={"Directeur financier"}
						name={"Anthony"}
						url={"/Pictures/18.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className=" flex flex-col">
					<SwiperSlider
						text={"Machiniste et expert maçonnerie"}
						name={"Anthony"}
						url={"/Pictures/19.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className=" flex flex-col">
					<SwiperSlider
						text={"Assistante de direction"}
						name={"Estelle"}
						url={"/Pictures/20.png"}
					/>
				</SwiperSlide>

				<SwiperSlide className=" flex flex-col">
					<SwiperSlider
						text={"Horticulteur"}
						name={"George"}
						url={"/Pictures/23.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className=" flex flex-col">
					<SwiperSlider
						text={"Rémy"}
						name={"Menuisier"}
						url={"/Pictures/remy.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className=" flex flex-col">
					<SwiperSlider
						text={"Benjamin"}
						name={"Jardinier"}
						url={"/Pictures/benjamin.png"}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
