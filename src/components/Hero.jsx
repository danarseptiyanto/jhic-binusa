// import HeroBackground from "./HeroBackground";
import Navbar from "./NavbarSekolah";
//

function HeroSection() {
	return (
		<>
			<div className="absolute top-0 right-0 left-0 h-[823px] overflow-hidden border-b-zinc-200 md:border-b-2">
				<img
					src="/src/assets/hero.svg"
					className="absolute top-1/2 left-1/2 hidden h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 md:block"
				/>
			</div>
			<img
				src="/src/assets/hero-mobile-line.svg"
				className="absolute top-1 block w-auto md:hidden"
			/>
			<section className="relative flex flex-col items-center overflow-hidden pb-16 text-center">
				{/* <HeroBackground />*/}
				<Navbar />
				<img
					src="/src/assets/hero-mobile.svg"
					className="block px-5 pt-20 md:hidden"
					alt=""
				/>
				<div className="container mx-auto flex flex-col items-center px-5 pt-9 md:pt-53">
					<div className="mb-3 flex h-[37px] w-[173px] items-center justify-center rounded-[20.5px] bg-[#E4E4E7] md:mb-6">
						<span className="text-[16px] leading-none font-normal text-[#111827]">
							Selamat Datang 👋
						</span>
					</div>
					<h1 className="mb-2 max-w-[461px] text-[38px] leading-11 font-semibold tracking-[-0.03em] text-black md:mb-4 md:text-[48px] md:leading-[52px]">
						Sambut masa depan cemerlang bersama SMK Bina Nusantara
					</h1>

					<p className="mb-8 max-w-[456px] text-[15px] leading-[1.44] font-normal text-[#6B7280] md:text-[16px]">
						Kami berkomitmen memberikan pengalaman belajar terbaik
						dengan dukungan fasilitas dan program unggulan. Temukan
						passion-mu dan jadilah ahli di bidangnya.
					</p>

					<button
						type="button"
						className="flex h-[48px] w-[141px] cursor-pointer items-center justify-center rounded-[45px] bg-[#2563EB] text-[16px] font-medium text-white shadow-sm transition hover:bg-blue-700"
					>
						SPMB 2027
					</button>
					<img
						src="/src/assets/icon-siswa.svg"
						className="-mt-5 block px-5 md:hidden"
						alt=""
					/>
					<p className="max-w-[407px] pt-41 text-[20px] font-medium tracking-[-0.03em] text-black">
						Gabung dengan ribuan alumni sukses lainnya
					</p>
				</div>
			</section>
		</>
	);
}

export default HeroSection;
