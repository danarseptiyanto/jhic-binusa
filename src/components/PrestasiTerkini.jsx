import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
import bgKeunggulan from "../assets/bg-keunggulan-sekolah.jpg";
import prestasi_terkini from "../assets/prestasi_terkini.jpg";

function StudentAchievementSection() {
  return (
    <section className="relative w-full bg-blue-600 font-sans py-12 md:py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-screen invert pointer-events-none"
        style={{ backgroundImage: `url(${bgKeunggulan})` }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1269px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 gap-4 sm:gap-6">
          <h2 className="text-[32px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] tracking-[-0.03em] text-white max-w-[300px]">
            Siswa Siswi Berprestasi
          </h2>

          <p className="max-w-[420px] text-[14px] sm:text-[16px] font-normal leading-[1.62] text-gray-50">
            Beragam prestasi terbaru berhasil diraih sebagai wujud semangat,
            dedikasi, dan komitmen untuk terus mengharumkan nama sekolah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-6 xl:col-span-6 relative w-full h-[280px] sm:h-[320px] md:h-[365px] rounded-[20px] overflow-hidden">
            <img
              src={prestasi_terkini}
              alt="Juara II Videografi Plano Competition"
              className="w-full h-full object-cover"
            />

            <button
              type="button"
              className="absolute bottom-3 right-3 sm:bottom-0 sm:right-0 bg-[#BEDBFF] hover:bg-white text-black text-[12px] sm:text-[14px] font-medium pl-3.5 sm:pl-4 pr-2.5 sm:pr-3 py-1 sm:py-1.5 rounded-full shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Slide</span>
              <RiArrowRightLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
            </button>
          </div>

          <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-6">
            <div className="bg-white rounded-[20px] sm:rounded-[30px] p-5 sm:p-6 md:p-8 shadow-md w-full max-w-[651px]">
              <h3 className="text-[20px] sm:text-[25px] font-medium text-[#155DFC] leading-snug mb-3">
                Juara II Videografi Plano Competition
              </h3>
              <p className="text-[14px] sm:text-[15px] font-normal leading-[1.62] text-gray-700">
                Berhasil meraih Juara 2 Plano Competition Tingkat Provinsi Jawa
                Tengah sebagai bentuk prestasi dalam kompetisi yang
                mengedepankan kreativitas, inovasi, dan kemampuan berpikir
                kritis. Pencapaian ini menjadi bukti dedikasi, kerja keras,
                serta semangat untuk terus berkembang dan berprestasi.
              </p>
            </div>

            <div className="pl-2 pt-2">
              <h4 className="text-[20px] sm:text-[24px] font-normal leading-[0.95] text-orange-400 mb-3">
                Nama Siswa
              </h4>
              <ul className="space-y-1.5 text-[14px] sm:text-[16px] text-white/80 font-normal">
                <li className="flex items-center gap-1.5">
                  <span>&gt;</span> Saiful Efendy (XII TKJ)
                </li>
                <li className="flex items-center gap-1.5">
                  <span>&gt;</span> Daffa Zakaria Ibnu (XII TKJ)
                </li>
                <li className="flex items-center gap-1.5">
                  <span>&gt;</span> Sidiq Nurwahidin (XII TKJ)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentAchievementSection;
