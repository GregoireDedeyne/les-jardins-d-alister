"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { cn } from "../lib/cn";

export const TextGenerateEffect = ({ words, className }) => {
	const [scope, animate] = useAnimate();
	const [ref, inView] = useInView({ triggerOnce: true });

	let wordsArray = words.split(" ");
	useEffect(() => {
		if (inView) {
			animate(
				"span",
				{
					opacity: 1,
				},
				{
					duration: 2,
					delay: stagger(0.2),
				}
			);
		}
	}, [inView, animate]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="dark:text-white text-black opacity-0 font-cocomat"
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4" ref={ref}>
				<div className=" dark:text-white text-black text-4xl leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
