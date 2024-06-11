/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./app/pages/**/*.{js,ts,jsx,tsx}", // Chemins aux pages Next.js
		"./app/components/**/*.{js,ts,jsx,tsx}", // Chemins aux composants
		"./app/**/*.{js,ts,jsx,tsx}", // Chemins pour l'arborescence app,
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				opensans: ["Open Sans", "sans-serif"],
				cocomat: ["Cocomat", "sans-serif"],
				organic: ["Organic", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui"), addVariablesForColors],
};

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
