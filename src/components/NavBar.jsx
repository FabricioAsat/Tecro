import { useEffect, useState } from "react";

import mail from "../assets/SVG/navbar/mail.svg";
import linkedin from "../assets/SVG/navbar/linkedin.svg";
import instagram from "../assets/SVG/navbar/instagram.svg";
import hambOn from "../assets/SVG/navbar/hambOn.svg";
import hambOff from "../assets/SVG/navbar/hambOff.svg";
import whyUs from "../assets/SVG/navbar/whyUs.svg";
import ourClients from "../assets/SVG/navbar/ourClients.svg";
import ourValues from "../assets/SVG/navbar/ourValues.svg";
import contactUs from "../assets/SVG/navbar/contactUs.svg";
import upToPage from "../assets/SVG/navbar/upToPage.svg";
import logoTECRO from "../assets/SVG/logo_TECRO.svg";

export const NavBar = () => {
	const [hambButton, setHambButton] = useState(false);
	const [yPosition, setYPosition] = useState(0);

	useEffect(() => {
		window.onscroll = function () {
			setYPosition(window.scrollY);
		};
	}, []);

	return (
		<>
			<header className="fixed z-50 top-0 left-0 w-full h-full max-h-16 bg-[#0f0f0f] border-b border-neutral-800">
				<div className="flex items-center justify-between py-3 px-5 w-full h-full max-w-7xl mx-auto">
					<a href="#root" className="flex items-center px-2 py-1">
						<picture className="w-24">
							<img src={logoTECRO} alt="Logo Tecro" className="w-full" />
						</picture>
					</a>

					<span className="flex items-center gap-x-3">
						<Links
							setHambButton={setHambButton}
							className={"hidden md:flex flex-row text-white justify-center items-center text-sm"}
						/>
						<a
							href="mailto:info@tecro.dev"
							className="w-10 p-1 h-full hover:brightness-75 transition-all duration-200"
						>
							<img src={mail} alt="Mail" className="select-none" />
						</a>

						<a
							href="https://www.linkedin.com/company/tecro-dev/"
							target={"_blank"}
							rel="noreferrer nofollow"
							className="w-10 p-1 h-full hover:brightness-75 transition-all duration-200"
						>
							<img src={linkedin} alt="Linkedin" className="select-none" />
						</a>

						<a
							href="https://www.instagram.com/tecro_dev/"
							target={"_blank"}
							rel="noreferrer nofollow"
							className="w-10 p-1 h-full hover:brightness-75 transition-all duration-200"
						>
							<img src={instagram} alt="Instagram" className="select-none" />
						</a>

						<HambButton hambButton={hambButton} setHambButton={setHambButton} />
					</span>
				</div>
			</header>
			<Links
				setHambButton={setHambButton}
				className={`flex flex-col gap-y-2 md:hidden fixed top-16 left-0 text-white text-lg backdrop-blur z-40 h-[calc(100vh-64px)] bg-[#0f0f0f75] w-full py-5 px-5 transition-transform ease-in-out duration-500 ${
					hambButton ? "translate-y-0" : "-translate-y-[calc(100%+64px)]"
				}`}
			/>
			{/* Go to y=0 */}
			<a
				href="#root"
				className={`fixed z-30 bottom-4 right-4 w-12 ${yPosition > 60 ? "block" : "hidden"}`}
			>
				<img src={upToPage} alt="Up to page" />
			</a>
		</>
	);
};

function HambButton({ hambButton, setHambButton }) {
	return (
		<button
			onClick={() => {
				setHambButton(!hambButton);
			}}
			className="w-10 p-2 rounded-lg hover:brightness-200 transition-all duration-500 block md:hidden"
		>
			{hambButton ? <img src={hambOff} alt="HambOff" /> : <img src={hambOn} alt="HambOn" />}
		</button>
	);
}

function Links({ className, setHambButton }) {
	return (
		<nav className={className}>
			<a
				onClick={() => setHambButton(false)}
				href="#why-us"
				className="flex gap-x-2 items-center py-1 px-3 hover:text-[#ccc] transition-all duration-200 font-bold"
			>
				<picture className="block md:hidden w-5">
					<img src={whyUs} alt="Why us" className="select-none" />
				</picture>
				Why us
			</a>
			<a
				onClick={() => setHambButton(false)}
				href="#our-values"
				className="flex gap-x-2 items-center py-1 px-3 hover:text-[#ccc] transition-all duration-200 font-bold"
			>
				<picture className="block md:hidden w-5">
					<img src={ourValues} alt="Our values" className="select-none" />
				</picture>
				Our values
			</a>
			<a
				onClick={() => setHambButton(false)}
				href="#our-clients"
				className="flex gap-x-2 items-center py-1 px-3 hover:text-[#ccc] transition-all duration-200 font-bold"
			>
				<picture className="block md:hidden w-5">
					<img src={ourClients} alt="Our clients" className="select-none" />
				</picture>
				Our clients
			</a>
			<a
				onClick={() => setHambButton(false)}
				href="#contacts"
				className="flex gap-x-2 items-center py-1 px-3 hover:text-[#ccc] transition-all duration-200 font-bold"
			>
				<picture className="block md:hidden w-5">
					<img src={contactUs} alt="Contact us" className="select-none" />
				</picture>
				Contact us
			</a>
		</nav>
	);
}
