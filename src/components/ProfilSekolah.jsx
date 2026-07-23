import React from "react";

const logos = [
  "/src/assets/logo_kerjasama/image ahm.png",
  "/src/assets/logo_kerjasama/image aoi.png",
  "/src/assets/logo_kerjasama/image ex.png",
  "/src/assets/logo_kerjasama/image intel.png",
  "/src/assets/logo_kerjasama/image 02.png",
  "/src/assets/logo_kerjasama/image alfa.png",
];

function ProfilSekolah() {
  return (
    <section className="max-w-[1280px] mx-auto py-10 px-5 font-sans">
      <div className="grid grid-cols-12 ">
        <div className="col-span-5">
          <h2 className="text-[28px] font-medium tracking-[-0.03em] text-gray-900 mw-full md:max-w-[172px]">
            Profil Sekolah
          </h2>
        </div>
        <div className="col-span-7">
          <span className="text-[16px] font-reguler text-gray-900 w-full max-w-[141px]  bg-zinc-200 rounded-2xl p-1 px-3">
            Selamat Datang 👋
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="flex items-center col-span-5 ">
          <div className=" bg-zinc-100 rounded-2xl p-4 max-w-[325]">
            <div className="flex justify-between items-center">
              <span className="bg-blue-500 text-white text-[13px] font-reguler px-4 py-1 rounded-full">
                Prestasi di 2026
              </span>

              <h3 className="text-[48px] font-semibold text-gray-900">
                12<span className="text-[48px]">+</span>
              </h3>
            </div>

            <div className="flex justify-center items-start relative w-[325px] h-[190px] ">
              <img
                src="/src/assets/prestasi/prestasi1.png"
                alt=""
                className="absolute top-0 left-1/2 -translate-x-1/2
               w-[175px] h-[98px]
               object-cover rounded-[28px]
               opacity-15"
              />

              <img
                src="/src/assets/prestasi/prestasi1.png"
                alt=""
                className="absolute top-4 left-1/2 -translate-x-1/2
               w-[221px] h-[125px]
               object-cover rounded-[28px]
               opacity-30"
              />

              <img
                src="/src/assets/prestasi/prestasi1.png"
                alt=""
                className="absolute top-8 left-1/2 -translate-x-1/2
               w-[273] h-[153px]
               object-cover rounded-[28px]
               shadow-lg"
              />
            </div>

            <button className="w-full mt-5 font-medium text-gray-700">
              Selengkapnya →
            </button>
          </div>
        </div>

        <div className="col-span-7">
          <div className="w-[704px]">
            <h1 className="mt-5 text-[46px] leading-tight font-bold text-gray-900">
              Sekolah Menengah Kejuruan yang berprestasi{" "}
              <span className="font-normal text-gray-500">
                dengan fasilitas kelas modern dan lulusan siap kerja.
              </span>
            </h1>
          </div>

          <p className="mt-6 text-gray-500 leading-8">
            Kami berkomitmen memberikan pengalaman belajar terbaik dengan
            dukungan fasilitas dan program unggulan. Temukan passion-mu dan
            jadilah ahli di bidangnya.
          </p>

          <div className="grid grid-cols-3 gap-10 mt-12">
            <div>
              <h3 className="text-5xl font-bold text-gray-900">8</h3>
              <p className="text-gray-500 mt-2">Tahun Berdiri</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-gray-900">300+</h3>
              <p className="text-gray-500 mt-2">Peserta Didik</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-gray-900">2000+</h3>
              <p className="text-gray-500 mt-2">Alumni Sukses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-16 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt="logo"
                className="h-10 object-contain opacity-50 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfilSekolah;
