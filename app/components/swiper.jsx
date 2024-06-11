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
				className="mySwiper h-[47.5rem] flex"
			>
				<SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col">
					<SwiperSlider
						text={"Directeur opérationnel"}
						name={"Martin"}
						url={"/Pictures/Martin.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col">
					<SwiperSlider
						text={"Directeur"}
						name={"Alister"}
						url={"/Pictures/AlisterP.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col">
					<SwiperSlider
						text={"Directeur financier"}
						name={"Anthony"}
						url={"/Pictures/18.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col">
					<SwiperSlider
						text={"Directeur opérationnel"}
						name={"Martin"}
						url={"/Pictures/19.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col">
					<SwiperSlider
						text={"Assistante de direction"}
						name={"Estelle"}
						url={"/Pictures/20.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col">
					<SwiperSlider
						text={"Directeur opérationnel"}
						name={"Martin"}
						url={"/Pictures/22.png"}
					/>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col">
					<SwiperSlider
						text={"Directeur opérationnel"}
						name={"Martin"}
						url={"/Pictures/23.png"}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
