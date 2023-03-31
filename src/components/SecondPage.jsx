import englishProficiency from "../assets/SVG/secondpage/EnglishProficiency.svg";
import yearsExperience from "../assets/SVG/secondpage/TenYearsExperience.svg";
import specialisedResources from "../assets/SVG/secondpage/SpecialisedResources.svg";
import USTimeZone from "../assets/SVG/secondpage/USTimeZone.svg";
import integration from "../assets/SVG/secondpage/Integration.svg";
import update from "../assets/SVG/secondpage/Update.svg";

const whyChooseUsData = [
	{
		id: 0,
		title: "English proficiency",
		description:
			"We are fluent in English, which enables us to understand, comprehend and meet our clients' requirements.",
		svg: englishProficiency,
	},
	{
		id: 1,
		title: "+10 years of experience",
		description:
			"With more than 10 years of experience, we ensure that our customers get the best product in a short period of time.",
		svg: yearsExperience,
	},
	{
		id: 2,
		title: "Highly qualified staff",
		description:
			"We continuously train our staff to offer the best quality products to our customers.",
		svg: specialisedResources,
	},
	{
		id: 3,
		title: "Temporary overlap with the US",
		description:
			"We share a time zone with the United States, which makes communication with our customers much more fluid and constant.",
		svg: USTimeZone,
	},
	{
		id: 4,
		title: "Integrated Teams",
		description:
			"High levels of integration with our customers, enabling us to engage, participate and work as fully functional staff.",
		svg: integration,
	},
	{
		id: 5,
		title: "Updated technology",
		description:
			"We constantly update technologies, which makes our software more effective, efficient and secure.",
		svg: update,
	},
];
export const SecondPage = () => {
	return (
		<article id="why-us" className="pt-20 relative h-full px-4 md:px-8 lg:px-10 max-w-7xl mx-auto">
			<section className="flex flex-col items-center">
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center pb-2 text-white">
					Why choose us?
				</h2>
				<p className="text-base text-center italic max-w-2xl">
					Our highly trained staff can provide a significant boost to your company's development
					capabilities. We offer a seamless integration experience with our customers' tech teams to
					deliver high-quality software in a cost-efficient way.
				</p>
			</section>
			<article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center span gap-5 py-5">
				{whyChooseUsData.map(({ id, title, description, svg }) => (
					<Card key={id} title={title} description={description} svg={svg} />
				))}
			</article>
		</article>
	);
};

function Card({ title, description, svg }) {
	return (
		<section className="flex flex-col gap-y-4 p-8 overflow-hidden border-y-2 border-x rounded-xl border-neutral-800 w-full max-w-sm min-h-[64px] h-full hover:shadow-md hover:shadow-neutral-800/50 hover:backdrop-brightness-150 transition-all duration-300">
			<img src={svg} alt="" className="w-12 select-none" />
			<h4 className="font-bold text-white text-lg">{title}</h4>
			<p className="italic">{description}</p>
		</section>
	);
}
