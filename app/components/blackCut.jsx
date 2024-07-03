import { TextGenerateEffect } from "./text-generate-effect";

export function BlackCut({ text }) {
	const words = text;

	return (
		<div className="container mx-auto p-16 text-center text-slate-300">
			<TextGenerateEffect words={words} />
		</div>
	);
}
