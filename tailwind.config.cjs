/** @type {import('tailwindcss').Config} */

const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const color = 'gray';

const backgrounds = weights.map((weight) => `bg-${color}-${weight}`);
const texts = weights.map((weight) => `text-${color}-${weight}`);

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [...backgrounds, ...texts],
	theme: {
		extend: {
			screens: {
				print: { raw: 'print' }
			}
		}
	},
	plugins: []
};
