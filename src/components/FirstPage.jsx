import { useEffect, useState } from "react";

import bg from "../assets/tecro/mobilebg.webp";
import video from "../assets/video.mp4";
import logoTECRO from "../assets/SVG/logo_TECRO.svg";
import link from "../assets/SVG/footer/link.svg";

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
				<div className="flex flex-col gap-y-5 items-center justify-center absolute w-full h-full bg-black/75 z-10 px-10">
					<img src={logoTECRO} alt="Logo Tecro" className="w-full max-w-xs" />
					<p
						className={`text-background font-medium text-xl md:text-2xl xl:text-3xl text-center max-w-xl italic`}
					>
						{PHRASES[indexPhrase]}
					</p>
					<a
						href="https://www.tecro.dev/"
						target="_blank"
						rel="noreferrer nofollow"
						className="bg-[#0f0f0f] text-sky-400 font-extrabold px-5 py-2 my-2 rounded-lg"
					>
						Go to original page ⇒
					</a>
				</div>
				<video
					className="h-full w-full object-cover hidden md:block"
					autoPlay
					muted
					loop
					src={
						video || "https://www.tecro.dev/media/uploads/video/Tecro_web_video_1-baja_2n4iqAI.mp4"
					}
				></video>
				<img src={bg} alt="Tecro" className="object-cover md:hidden block w-full h-full" />
			</div>
		</article>
	);
};
