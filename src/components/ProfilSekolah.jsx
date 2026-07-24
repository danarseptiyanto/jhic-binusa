import React from "react";

const logos = [
  "/src/assets/logo_kerjasama/Logo-AHM.jpg",
  "/src/assets/logo_kerjasama/Logo-ApparelOne.jpg",
  "/src/assets/logo_kerjasama/Logo-Excellent.jpg",
  "/src/assets/logo_kerjasama/Logo-intel.jpg",
  "/src/assets/logo_kerjasama/Logo-G2academy.jpg",
  "/src/assets/logo_kerjasama/Logo-alfamart.jpg",
];

function ProfilSekolah() {
  const extendedLogos = [...logos, ...logos];

  return (
    <section className="max-w-[1280px] mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 font-sans overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mb-6 lg:mb-8 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-[24px] sm:text-[28px] font-medium tracking-[-0.03em] text-gray-900 w-full">
            Profil Sekolah
          </h2>
        </div>
        <div className="lg:col-span-7">
          <span className="inline-block text-[14px] sm:text-[16px] font-normal text-gray-900 bg-zinc-200 rounded-2xl py-1 px-3.5">
            Selamat Datang 👋
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-5 flex justify-center lg:justify-start w-full">
          <div className="bg-zinc-100 rounded-2xl p-4 sm:p-5 w-full max-w-[325px]">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-500 text-white text-[12px] sm:text-[13px] font-normal px-3.5 py-1 rounded-full">
                Prestasi di 2026
              </span>
              <h3 className="text-[36px] sm:text-[48px] font-semibold text-gray-900 leading-none">
                12<span className="text-[36px] sm:text-[48px]">+</span>
              </h3>
            </div>
            <div className="flex justify-center items-start relative w-full h-[170px] sm:h-[190px]">
              <img
                src="/src/assets/prestasi/prestasi1.png"
                alt=""
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] sm:w-[175px] h-[85px] sm:h-[98px] object-cover rounded-[20px] sm:rounded-[28px] opacity-15"
              />
              <img
                src="/src/assets/prestasi/prestasi1.png"
                alt=""
                className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[190px] sm:w-[221px] h-[105px] sm:h-[125px] object-cover rounded-[20px] sm:rounded-[28px] opacity-30"
              />
              <img
                src="/src/assets/prestasi/prestasi1.png"
                alt=""
                className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 w-[230px] sm:w-[273px] h-[130px] sm:h-[153px] object-cover rounded-[20px] sm:rounded-[28px] shadow-lg"
              />
            </div>
            <button className="w-full mt-5 font-medium text-gray-700 hover:text-black transition">
              Selengkapnya →
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 w-full">
          <div className="w-full max-w-full lg:max-w-[704px]">
            <h1 className="text-[26px] sm:text-[36px] lg:text-[46px] leading-[1.25] font-bold text-gray-900 break-words">
              Sekolah Menengah Kejuruan yang berprestasi{" "}
              <span className="font-normal text-gray-500">
                dengan fasilitas kelas modern dan lulusan siap kerja.
              </span>
            </h1>
          </div>
          <p className="mt-4 sm:mt-6 text-gray-500 text-[14px] sm:text-[16px] leading-6 sm:leading-8">
            Kami berkomitmen memberikan pengalaman belajar terbaik dengan
            dukungan fasilitas dan program unggulan. Temukan passion-mu dan
            jadilah ahli di bidangnya.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-8 lg:gap-10 mt-8 sm:mt-12">
            <div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">8</h3>
              <p className="text-gray-500 text-[12px] sm:text-[16px] mt-1">Tahun Berdiri</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">300+</h3>
              <p className="text-gray-500 text-[12px] sm:text-[16px] mt-1">Peserta Didik</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">2000+</h3>
              <p className="text-gray-500 text-[12px] sm:text-[16px] mt-1">Alumni Sukses</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-12 sm:mt-16 pt-8 sm:pt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] w-max gap-12 sm:gap-20">
          {extendedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex justify-center items-center">
              <img
                src={logo}
                alt="logo"
                className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfilSekolah;