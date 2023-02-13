import agilegator from "../assets/clients/agilegator.webp";
import incomm from "../assets/clients/incomm.webp";
import speedgauge from "../assets/clients/speedgauge.webp";

const images = [
	{ img: agilegator, webpage: "http://agilegator.com/" },
	{ img: incomm, webpage: "https://www.incomm.com/" },
	{ img: speedgauge, webpage: "https://www.speedgauge.net/" },
];

export const FourthPage = () => {
	return (
		<>
			<h2
				id="our-clients"
				className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-white pt-20 pb-6"
			>
				Our clients
			</h2>
			<article
				id="our-clients"
				className="relative h-full px-4 md:px-8 lg:px-10 max-w-7xl mx-auto py-8 mb-12 overflow-x-hidden bg-[url(src/assets/tecro/clientsbg.webp)] bg-cover bg-center"
			>
				<span className="absolute top-0 left-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f75] to-[#0f0f0f] w-full h-full"></span>
				<span className="absolute top-0 left-0 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f50] to-[#0f0f0f] w-full h-full"></span>
				<picture className="flex items-center justify-center gap-x-10 animate-mobileCarousel md:animate-tabletCarousel lg:animate-desktopCarousel w-[calc(160px*3) md:w-[calc(208px*3) lg:w-[calc(288px*3)]">
					{images.map(({ img, webpage }, index) => (
						<a key={index} href={webpage} target="_blank" rel="noreferrer nofollow">
							<img src={img} className="w-40 md:w-52 lg:w-72 brightness-200" />
						</a>
					))}
				</picture>
			</article>
		</>
	);
};
