import "./App.css";
import Navbar from "./components/NavbarSekolah";
import ProfilSekolah from "./components/ProfilSekolah";
import KerjasamaSekolah from "./components/KerjasamaSekolah";
import KeunggulanSekolah from "./components/KeunggulanSekolah";
import HeroSection from "./components/Hero";
import HeroBackground from "./components/HeroBackground";
import JurusanSekolah from "./components/JurusanSekolah";
import LulusanTerbaik from "./components/LulusanTerbaik";
import PrestasiTerkini from "./components/PrestasiTerkini";
import FaqSection from "./components/Faq";

function App() {
	return (
		<div className="relative overflow-x-hidden">
			{/* <Navbar />*/}

			<main>
				<HeroSection />
				<ProfilSekolah />
				<KerjasamaSekolah />
				<KeunggulanSekolah />
				<JurusanSekolah />
				<LulusanTerbaik />
				<PrestasiTerkini />
				<FaqSection />
			</main>
		</div>
	);
}

export default App;
