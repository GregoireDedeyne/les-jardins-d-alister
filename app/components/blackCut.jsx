import { TextGenerateEffect } from "./text-generate-effect";

export function BlackCut() {
	const words = `Faites de votre jardin, un véritable havre de paix.`;

	return (
		<div className="container mx-auto p-16 text-center">
			<TextGenerateEffect words={words} />
		</div>
	);
}
