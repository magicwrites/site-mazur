/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			spacing: {
				'screen-1/10': '10vh',
				'screen-8/10': '80vh'
			},
			screens: {
				print: { raw: 'print' }
			}
		}
	},
	plugins: []
};
