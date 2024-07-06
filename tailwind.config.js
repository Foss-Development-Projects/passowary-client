/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				accent: {
					primary: "var(--primary-accent) / <alpha-value>",
					secondary: "var(--secondary-accent) / <alpha-value>",
				},
				fg: "var(--background-color) / <alpha-value>",
				bg: "var(--foreground-color) / <alpha-value>",
				sc: "var(--surface-color) / <alpha-value>",
			}
		},
	},
	plugins: [],
}