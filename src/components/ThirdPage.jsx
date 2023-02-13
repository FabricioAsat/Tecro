import { useState } from "react";

import proximityImg from "../assets/img/proximity.webp";
import passion from "../assets/img/passion.webp";
import customer_focused from "../assets/img/customer_focused.webp";
import agility from "../assets/img/agility.webp";
import teamwork from "../assets/img/teamwork.webp";
import improvement from "../assets/img/improvement.webp";

const ourValuesData = [
	{
		id: 0,
		title: "Proximity",
		description: "Close relationship with our clients through fluid and consistent communication",
		img: proximityImg,
		keywords: ["Understanding", "No delays"],
	},
	{
		id: 1,
		title: "Passion",
		description: "The motivation and commitment that we share it's all about loving what we do.",
		img: passion,
		keywords: ["Always attentive", "New paths"],
	},
	{
		id: 2,
		title: "Customer Focused",
		description: "We develop around our customer's needs and preferences.",
		img: customer_focused,
		keywords: ["All your problems solved"],
	},
	{
		id: 3,
		title: "Teamwork",
		description:
			"Workplace synergy based on mutual support, shared goals, encouragement and cooperation.",
		img: teamwork,
		keywords: ["Togetherness", "Cooperativism"],
	},
	{
		id: 4,
		title: "Improvement",
		description:
			"Constantly evaluating our performance and products in order to improve and provide the most intelligent and updated solution",
		img: improvement,
		keywords: ["New technologies", "Constant learning"],
	},
	{
		id: 5,
		title: "Agility",
		description: "Willingness to embrace change. Determination to solve problems and innovate",
		img: agility,
		keywords: ["Meetings", "Brainstorming"],
	},
];

export const ThirdPage = () => {
	return (
		<article id="our-values" className="h-full px-4 md:px-8 lg:px-10 max-w-7xl mx-auto pt-20 pb-6">
			<h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-white">
				Our values
			</h2>

			<article className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center py-6">
				{ourValuesData.map(({ id, title, description, img, keywords }) => (
					<Card key={id} title={title} description={description} img={img} keywords={keywords} />
				))}
			</article>
		</article>
	);
};

function Card({ title, description, img, keywords }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`flex flex-col max-w-md pt-5 px-5 w-full bg-neutral-900 rounded-lg pb-3 brightness-90 hover:brightness-100 transition-all duration-300 ease-out`}
		>
			<img
				src={img}
				alt=""
				className={`w-full mx-auto rounded-md h-64 max-h-64 object-cover transition-all duration-300 ease-out ${
					isHovered
						? "hover:brightness-100 hover:saturate-[1.2] hover:contrast-[1.05]"
						: "brightness-75 saturate-[0.9] contrast-[0.95]"
				}`}
			/>

			<h4
				className={`bg-[#0f0f0f] w-full max-w-[210px] transition-colors duration-300 ease-out text-center px-5 py-1 text-xl font-bold rounded-lg mx-auto -translate-y-1/2 shadow-lg shadow-[#0f0f0f95] ${
					isHovered ? "text-white" : ""
				}`}
			>
				{title}
			</h4>
			<p className="text-sm">{description}</p>

			{keywords && (
				<nav className="flex items-center justify-start gap-x-5 pt-2 mt-auto">
					{keywords.map((word, index) => (
						<span
							key={index}
							className="bg-neutral-800 rounded-md flex gap-x-1 items-center px-2 py-1"
						>
							<h6 className="font-bold italic text-sm text-[#f28c00]">{word}</h6>
						</span>
					))}
				</nav>
			)}
		</div>
	);
}
