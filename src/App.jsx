import "./App.css";
import Navbar from "./components/NavbarSekolah";
import FooterSekolah from "./components/FooterSekolah";
import HeroSection from "./components/Hero";
import HeroBackground from "./components/HeroBackground";
import ProfilSekolah from "./components/ProfilSekolah";
import KerjasamaSekolah from "./components/KerjasamaSekolah";
import KeunggulanSekolah from "./components/KeunggulanSekolah";
import JurusanSekolah from "./components/JurusanSekolah";
import LulusanTerbaik from "./components/LulusanTerbaik";
import PrestasiTerkini from "./components/PrestasiTerkini";
import FaqSection from "./components/Faq";

function App() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                <HeroSection />
                <section id="profil">
                    <ProfilSekolah />
                </section>
                <section id="mitra">
                    <KerjasamaSekolah />
                </section>
                <section id="keunggulan">
                    <KeunggulanSekolah />
                </section>
                <section id="jurusan">
                    <JurusanSekolah />
                </section>
                <section id="alumni">
                    <LulusanTerbaik />
                </section>
                <section id="prestasi">
                    <PrestasiTerkini />
                </section>
                <FaqSection />
            </main>
            <FooterSekolah />
        </div>
    );
}

export default App;
