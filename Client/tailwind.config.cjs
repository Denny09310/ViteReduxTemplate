/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ['src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ['dark', 'light'],
	},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('daisyui')],
};

