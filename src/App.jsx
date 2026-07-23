import "./App.css";
import Navbar from "./components/NavbarSekolah";
import ProfilSekolah from "./components/ProfilSekolah";
import KerjasamaSekolah from "./components/KerjasamaSekolah";
import KeunggulanSekolah from "./components/KeunggulanSekolah";
import HeroSection from "./components/Hero";
import HeroBackground from "./components/HeroBackground";
import JurusanSekolah from "./components/JurusanSekolah";

function App() {
	return (
		<div className="relative overflow-x-hidden">
			<Navbar />

			<main className="pt-24">
				<HeroSection />
				<ProfilSekolah />
				<KerjasamaSekolah />
				<KeunggulanSekolah />
				<JurusanSekolah />
			</main>
		</div>
	);
}

export default App;