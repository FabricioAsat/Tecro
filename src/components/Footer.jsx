import logo from "../assets/SVG/logo_TECRO.svg";

import location from "../assets/SVG/footer/location.svg";
import contactus from "../assets/SVG/navbar/contactUs.svg";
import mail from "../assets/SVG/navbar/mail.svg";
import link from "../assets/SVG/footer/link.svg";

export const Footer = () => {
	return (
		<footer id="contacts" className="pt-16 pb-3 flex flex-col max-w-7xl w-full mx-auto px-10">
			<picture className="">
				<img src={logo} alt="Logo" className="w-24 brightness-50" />
			</picture>

			<nav className="grid grid-cols-1 md:grid-cols-3 gap-y-5 py-5 max-w-3xl">
				<a href={algo} target="_blank" rel="noreferrer nofollow">
					<picture className="flex gap-x-1">
						<img src={location} alt="Location" className="w-4" />
						<b className="font-extrabold text-base text-white">Office</b>
					</picture>
					<small className="italic text-sky-400 text-sm block">
						Jose Viscardis 1085, Zona Franca
					</small>
					<small className="italic text-sky-400 text-sm block">General Pico - La Pampa</small>
					<small className="italic text-sky-400 text-sm block font-bold">Argentina</small>
				</a>

				<section>
					<picture className="flex gap-x-1">
						<b className="font-extrabold text-base text-white">Contact us</b>
					</picture>

					<aside className="flex items-center gap-x-1 my-1">
						<img src={contactus} alt="Contact us" className="w-4" />
						<a
							href="tel:+542302322601"
							className="italic hover:text-sky-400 text-sm transition-colors duration-300"
						>
							+542302322601
						</a>
					</aside>
					<aside className="flex items-center gap-x-1 my-1">
						<img src={mail} alt="Mail" className="w-4" />
						<a
							href="mailto:info@tecro.dev"
							className="italic hover:text-sky-400 text-sm transition-colors duration-300"
						>
							info@tecro.dev
						</a>
					</aside>
				</section>

				<section>
					<picture className="flex gap-x-1">
						<b className="font-extrabold text-base text-white">Company</b>
					</picture>

					<aside className="flex items-center gap-x-1 my-1">
						<img src={mail} alt="Contact us" className="w-4" />
						<a
							href="mailto:rrhh@tecro.dev"
							className="italic hover:text-sky-400 text-sm transition-colors duration-300"
						>
							Work with us
						</a>
					</aside>
					<button disabled className="flex items-center gap-x-1 my-1 cursor-not-allowed">
						<img src={link} alt="Mail" className="w-4 opacity-50" />
						<b className="italic opacity-50">FAQ's</b>
					</button>

					<button disabled className="flex items-center gap-x-1 my-1 cursor-not-allowed">
						<img src={link} alt="Mail" className="w-4 opacity-50" />
						<b className="italic opacity-50">Our services</b>
					</button>
				</section>
			</nav>

			<aside className="flex flex-col italic text-sm pb-5">
				<small>Privacy Policy | Terms of Service</small>
				<small>© 2023 Tecro. All rights reserved</small>
			</aside>
		</footer>
	);
};

const algo =
	"https://www.google.com/maps/place/TECRO/@-35.680987,-63.7766572,17.75z/data=!4m6!3m5!1s0x0:0x95e8d677ddb22bc3!8m2!3d-35.6808557!4d-63.7759242!15sCgVURUNST5IBEHNvZnR3YXJlX2NvbXBhbnk?shorturl=1";
