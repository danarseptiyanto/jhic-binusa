import React from "react"; 
import kizuna from "../assets/kizuna.jpg";
import abiansyah from "../assets/abiansyah.jpg";

function BestGraduatesSection() {
  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1269px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-6">
          <h2 className="w-full md:max-w-[331px] text-[32px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] tracking-[-0.03em] text-[#111827]">
            Profil Lulusan Terbaik Sekolah
          </h2>

          <p className="w-full md:max-w-[457px] text-[14px] sm:text-[16px] font-normal leading-[1.62] text-[#6B7280]">
            Kami menjembatani langkah siswa menuju dunia profesional melalui
            kemitraan strategis bersama berbagai perusahaan terkemuka.
          </p>
        </div>

        <div className="w-full bg-[#F4F4F5] rounded-[20px] p-4 sm:p-6 md:p-8 relative">
          <div className="bg-white rounded-[20px] p-5 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-12 min-h-[409px]">
            <div className="w-full lg:w-[399px] h-[410px] sm:h-[340px] lg:h-auto min-h-[340px] rounded-[20px] overflow-hidden flex-shrink-0 bg-[#155DFC]">
              <img
                src={abiansyah}
                alt="Abiansyah Fahri Nadif"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-between h-full flex-grow w-full">
              <div className="mb-4 sm:mb-6">
                <img
                  src={kizuna}
                  alt="Kizuna Mitra Indonesia"
                  className="w-[240px] sm:w-[280px] md:w-[337px] h-auto max-h-[53px] object-contain object-left"
                />
              </div>
              <blockquote className="max-w-[611px] text-[18px] sm:text-[22px] md:text-[29px] font-medium leading-[1.35] text-black tracking-[0em] mb-6 sm:mb-8">
                "Alhamdulillah, mimpi yang dulu terasa jauh, hari ini menjadi
                kenyataan. Terima kasih untuk semua yang telah percaya dan
                mendukung perjalanan saya."
              </blockquote>

              <div>
                <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#155DFC] leading-tight">
                  Abiansyah Fahri Nadif
                </h3>
                <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#6B7280] leading-tight mt-1">
                  Nama perusahaan
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end gap-2 mt-4 pr-0 sm:pr-2">
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-black cursor-pointer transition text-lg"
              aria-label="Previous Slide"
            >
              ‹
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-black cursor-pointer transition text-lg"
              aria-label="Next Slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestGraduatesSection;
