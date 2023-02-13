import { FirstPage } from "./components/FirstPage";
import { Footer } from "./components/Footer";
import { FourthPage } from "./components/FourthPage";
import { NavBar } from "./components/NavBar";
import { SecondPage } from "./components/SecondPage";
import { ThirdPage } from "./components/ThirdPage";

import react from "./assets/SVG/footer/react.svg";
import tailwind from "./assets/SVG/footer/tailwind.svg";
import vite from "./assets/SVG/footer/vite.svg";

function App() {
	return (
		<>
			<NavBar />

			<FirstPage />
			<hr className={`w-full border border-neutral-800`} />
			<SecondPage />
			<hr className={`w-full border border-neutral-800`} />
			<ThirdPage />
			<hr className={`w-full border border-neutral-800`} />
			<FourthPage />
			<hr className={`w-full border border-neutral-800`} />
			<Footer />
			<aside className="flex justify-start gap-x-4 text-xs max-w-7xl mx-auto px-10 py-2">
				<a
					href="https://vitejs.dev/"
					target={"_blank"}
					rel="noreferrer nofollow"
					className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 px-2 py-1"
				>
					<img src={vite} className="w-5" />
					<b className="italic">Vite</b>
				</a>
				<a
					href="https://es.reactjs.org/"
					target={"_blank"}
					rel="noreferrer nofollow"
					className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 px-2 py-1"
				>
					<img src={react} className="w-5" />
					<b className="italic">React</b>
				</a>
				<a
					href="https://tailwindcss.com/"
					target={"_blank"}
					rel="noreferrer nofollow"
					className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 px-2 py-1"
				>
					<img src={tailwind} className="w-5" />
					<b className="italic">Tailwind</b>
				</a>
			</aside>
		</>
	);
}

export default App;
