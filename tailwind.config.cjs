/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		},
		extend: {},
	},
	plugins: [],
};
