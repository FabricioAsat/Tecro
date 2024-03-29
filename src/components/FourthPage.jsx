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
				className="relative h-full px-4 md:px-8 lg:px-10 max-w-7xl mx-auto py-8 mb-12 overflow-x-hidden bg-[url(https://scontent.flpg3-1.fna.fbcdn.net/v/t1.6435-9/46513919_2688727941353354_6379248507374534656_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=dgIqha3VEUkAX-gH-lT&_nc_ht=scontent.flpg3-1.fna&oh=00_AfDTmSCdA4XpJ8pZRfuGzbicqK0l6NViItHv_6P3XImX4Q&oe=64116440)] bg-cover bg-center"
			>
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
