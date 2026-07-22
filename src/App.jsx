import "./App.css";
import Navbar from "./components/NavbarSekolah";
import ProfilSekolah from "./components/ProfilSekolah";
import KerjasamaSekolah from "./components/KerjasamaSekolah";

function App() {
	return (
		<div className="relative overflow-x-hidden">
			<Navbar />

			<main className="pt-24">
				<ProfilSekolah />
				<KerjasamaSekolah />
			</main>
		</div>
	);
}

export default App;