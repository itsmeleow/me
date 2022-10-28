const defaults = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontFamily: {
			mono: ['"JetBrains Mono"', ...defaults.fontFamily.mono],
			sans: ['"GeneralSans-Variable"', ...defaults.fontFamily.sans],
		},
	},
	plugins: [],
};
