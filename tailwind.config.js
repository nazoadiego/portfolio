const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"flowerblue-50": "#eef0ff",
				"flowerblue-100": "#e0e3ff",
				"flowerblue-200": "#c7ccfe",
				"flowerblue-300": "#a5adfc",
				"flowerblue-400": "#818cf8",
				"flowerblue-500": "#6370f1",
				"flowerblue-600": "#4655e5",
				"flowerblue-700": "#3845ca",
				"flowerblue-800": "#303ba3",
				"flowerblue-900": "#2e3681",
			},
			animation: {
				appear: "appear 1s ease",
				appear2: "appear2 1s ease",
				appear3: "appear3 1s ease",
				appear4: "appear4 1s ease",
			},
			keyframes: {
				appear: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				appear2: {
					"0%": { opacity: "0" },
					"25%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				appear3: {
					"0%": { opacity: "0" },
					"50%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				appear4: {
					"0%": { opacity: "0" },
					"75%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
	],
};
