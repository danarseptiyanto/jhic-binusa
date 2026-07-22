import logobinus from "../assets/logobinus.png";

function Navbar() {
  const menus = ["Home", "Guru", "Event", "Berita Sekolah"];

  return (
    <header className="fixed top-[30px] left-0 w-full z-50">
      <div className="mx-auto max-w-[1275px] h-[54px] flex items-center justify-between px-4 xl:px-0">
        <div className="flex items-center gap-[14px]">
          <div className="w-[54px] h-[54px] rounded-[15px] bg-[#E5E7EB] flex items-center justify-center shrink-0">
            <img
              src={logobinus}
              alt="Logo SMK Bina Nusantara"
              className="w-[38px] h-[33px] object-contain"
            />
          </div>

          <h1 className="text-[18px] font-bold text-gray-900 whitespace-nowrap">
            SMK Bina Nusantara
          </h1>
        </div>

        <nav className="flex items-center gap-[34px]">
          {menus.map((menu, index) => (
            <a
              key={menu}
              href="#"
              className={`transition-all duration-300 text-[15px] ${
                index === 0
                  ? "bg-[#BFDBFE] px-[16px] py-[6px] rounded-full font-semibold text-[#1E3A8A]"
                  : "font-medium text-gray-700 hover:text-blue-600"
              }`}
            >
              {menu}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[22px]">
          <a
            href="#"
            className="text-[15px] font-medium text-[#111827] hover:text-blue-600 transition whitespace-nowrap"
          >
            Kontak Kami
          </a>

          <button
            type="button"
            className="w-[141px] h-[48px] rounded-[45px] bg-[#2563EB] text-white text-[15px] font-semibold transition hover:bg-blue-700 cursor-pointer flex items-center justify-center shrink-0"
          >
            SPMB 2027
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
