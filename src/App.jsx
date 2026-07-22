import "./App.css";
import Navbar from "./components/NavbarSekolah";
import ProfilSekolah from "./components/ProfilSekolah";
import KerjasamaSekolah from "./components/KerjasamaSekolah";
import KeunggulanSekolah from "./components/KeunggulanSekolah";

function App() {
	return (
		<div className="relative overflow-x-hidden">
			<Navbar />

			<main className="pt-24">
				<ProfilSekolah />
				<KerjasamaSekolah />
				<KeunggulanSekolah />
			</main>
		</div>
	);
}

export default App;