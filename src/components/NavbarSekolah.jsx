import { useState, useEffect } from "react";
import { RiMenu2Fill, RiCloseFill } from "@remixicon/react";
import logobinus from "../assets/logobinus.png";

function Navbar() {
	const menus = ["Home", "Guru", "Event", "Berita Sekolah"];
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<header className="absolute top-[30px] left-0 z-50 w-full">
			<div className="mx-auto flex h-[54px] max-w-[1275px] items-center justify-between px-5 xl:px-0">
				<div className="flex items-center gap-[14px]">
					<div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] bg-[#E5E7EB] md:h-[54px] md:w-[54px]">
						<img
							src={logobinus}
							alt="Logo SMK Bina Nusantara"
							className="h-[33px] w-[38px] object-contain"
						/>
					</div>

					<h1 className="hidden text-[18px] font-bold whitespace-nowrap text-gray-900 md:block">
						SMK Bina Nusantara
					</h1>
				</div>

				<nav className="hidden items-center gap-[34px] md:flex">
					{menus.map((menu, index) => (
						<a
							key={menu}
							href="#"
							className={`text-[15px] transition-all duration-300 ${
								index === 0
									? "rounded-full bg-[#BFDBFE] px-[16px] py-[6px] font-semibold text-[#1E3A8A]"
									: "font-medium text-gray-700 hover:text-blue-600"
							}`}
						>
							{menu}
						</a>
					))}
				</nav>

				<div className="hidden items-center gap-[22px] md:flex">
					<a
						href="#"
						className="text-[15px] font-medium whitespace-nowrap text-[#111827] transition hover:text-blue-600"
					>
						Kontak Kami
					</a>

					<button
						type="button"
						className="flex h-[48px] w-[141px] shrink-0 cursor-pointer items-center justify-center rounded-[45px] bg-[#2563EB] text-[15px] font-semibold text-white transition hover:bg-blue-700"
					>
						SPMB 2027
					</button>
				</div>

				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="flex h-[52px] w-[52px] shrink-0 cursor-pointer items-center justify-center rounded-[15px] bg-[#E5E7EB] text-[#111827] md:hidden md:h-[54px] md:w-[54px]"
					aria-label="Open menu"
				>
					<RiMenu2Fill size={22} />
				</button>
			</div>
			<div
				className={`fixed inset-0 z-[100] flex flex-col bg-white transition-opacity duration-300 ${
					isOpen
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				}`}
			>
				<div className="mt-[30px] flex h-[54px] items-center justify-between px-4">
					<div className="flex items-center gap-[14px]">
						<div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[15px] bg-[#E5E7EB]">
							<img
								src={logobinus}
								alt="Logo SMK Bina Nusantara"
								className="h-[33px] w-[38px] object-contain"
							/>
						</div>
						<h1 className="text-[18px] font-bold whitespace-nowrap text-gray-900">
							SMK Bina Nusantara
						</h1>
					</div>

					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="cursor-pointer text-[#111827]"
						aria-label="Close menu"
					>
						<RiCloseFill size={32} />
					</button>
				</div>

				<nav className="mt-10 flex flex-col items-start gap-2 px-6">
					{menus.map((menu, index) => (
						<a
							key={menu}
							href="#"
							onClick={() => setIsOpen(false)}
							className={`w-full border-b border-gray-100 py-3 text-[24px] transition-all duration-300 ${
								index === 0
									? "font-semibold text-[#1E3A8A]"
									: "font-medium text-gray-700"
							}`}
						>
							{menu}
						</a>
					))}
				</nav>

				<div className="mt-auto flex flex-col items-center gap-4 px-6 pb-10">
					<a
						href="#"
						onClick={() => setIsOpen(false)}
						className="py-3 text-[18px] font-medium text-[#111827]"
					>
						Kontak Kami
					</a>

					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="h-[52px] w-full max-w-[300px] cursor-pointer rounded-[45px] bg-[#2563EB] text-[17px] font-semibold text-white transition hover:bg-blue-700"
					>
						SPMB 2027
					</button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
