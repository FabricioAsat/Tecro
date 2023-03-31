import { useEffect, useState } from "react";

import bg from "../assets/tecro/mobilebg.webp";
import video from "../assets/video.mp4";
import logoTECRO from "../assets/SVG/logo_TECRO.svg";

import poster from "../assets/tecro/mobilebg.webp";

const PHRASES = [
	"Our clients cover a wide range of activities, from payment industry to geolocation processing.",
	"We create high valued products and services for our customers.",
	"An autonomous expert team that delivers technology solutions and value.",
];

export const FirstPage = () => {
	const [indexPhrase, setIndexPhrase] = useState(0);

	useEffect(() => {
		const phrasesInterval = setInterval(() => {
			startCarousel();
		}, 5000);

		function startCarousel() {
			indexPhrase >= PHRASES.length - 1 ? setIndexPhrase(0) : setIndexPhrase(indexPhrase + 1);
		}

		return () => clearInterval(phrasesInterval);
	}, [indexPhrase]);

	return (
		<article className="flex items-center justify-center h-screen">
			<div className="absolute h-full w-full">
				<div className="flex flex-col gap-y-5 items-center justify-center absolute w-full h-full bg-black/75 z-20 px-10">
					<img src={logoTECRO} alt="Logo Tecro" className="w-full max-w-xs" />
					<p
						className={`text-white font-medium text-xl md:text-2xl xl:text-3xl text-center max-w-xl italic`}
					>
						{PHRASES[indexPhrase]}
					</p>
				</div>
				<video
					className="h-full w-full object-cover hidden md:block select-none"
					autoPlay
					muted
					loop
					poster={poster}
					src={
						video || "https://www.tecro.dev/media/uploads/video/Tecro_web_video_1-baja_2n4iqAI.mp4"
					}
				></video>
				<img src={bg} alt="Tecro" className="object-cover md:hidden block w-full h-full" />
			</div>
		</article>
	);
};
