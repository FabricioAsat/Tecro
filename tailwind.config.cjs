/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lato: "Lato",
			},
			keyframes: {
				mobileCarousel: {
					"0%": { transform: "translateX(100vw)" },
					"100%": { transform: "translateX(calc(-160px*4))" },
				},
				tabletCarousel: {
					"0%": { transform: "translateX(100vw)" },
					"100%": { transform: "translateX(calc(-208px*5))" },
				},
				desktopCarousel: {
					"0%": { transform: "translateX(1280px)" },
					"100%": { transform: "translateX(calc(-288px*5))" },
				},
			},
			animation: {
				mobileCarousel: "mobileCarousel 25s linear infinite",
				tabletCarousel: "tabletCarousel 25s linear infinite",
				desktopCarousel: "desktopCarousel 25s linear infinite",
			},
		},
	},
	plugins: [],
};
