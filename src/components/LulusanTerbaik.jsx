import React, { useState } from "react";
import kizuna from "../assets/lulusan_terbaik/kizuna.jpg";
import abiansyah from "../assets/lulusan_terbaik/abiansyah.jpg";
import gaje from "../assets/lulusan_terbaik/gaje.jpg";
import moonton from "../assets/lulusan_terbaik/moonton.jpg";

const graduatesData = [
  {
    id: 1,
    name: "Abiansyah Fahri Nadif",
    company: "PT Kizuna Mitra Indonesia",
    photo: abiansyah,
    logo: kizuna,
    quote:
      '"Alhamdulillah, mimpi yang dulu terasa jauh, hari ini menjadi kenyataan. Terima kasih untuk semua yang telah percaya dan mendukung perjalanan saya."',
  },
  {
    id: 2,
    name: "Uzumaki Nabil",
    company: "Moonton Develop",
    photo: gaje, 
    logo: moonton,  
    quote:
      '"Jangan hanya push rank sampe modar, tapi ingat lah juga untuk tetap beribadah kepada tuhan yang maha kuasa"',
  },
];

function BestGraduatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === graduatesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? graduatesData.length - 1 : prevIndex - 1
    );
  };

  const currentGraduate = graduatesData[currentIndex];

  return (
    <section className="w-full py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1269px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-6">
          <h2 className="w-full md:max-w-[331px] text-[28px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] tracking-[-0.03em] text-[#111827]">
            Profil Lulusan Terbaik Sekolah
          </h2>

          <p className="w-full md:max-w-[457px] text-[14px] sm:text-[16px] font-normal leading-[1.62] text-[#6B7280]">
            Kami menjembatani langkah siswa menuju dunia profesional melalui
            kemitraan strategis bersama berbagai perusahaan terkemuka.
          </p>
        </div>
        <div className="w-full bg-[#F4F4F5] rounded-[20px] p-4 sm:p-6 md:p-8 relative">
          <div className="bg-white rounded-[20px] p-5 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-12 min-h-[409px] transition-all duration-300">
            <div className="w-full lg:w-[399px] h-[300px] sm:h-[340px] lg:h-auto min-h-[280px] sm:min-h-[340px] rounded-[20px] overflow-hidden flex-shrink-0 bg-[#155DFC]">
              <img
                src={currentGraduate.photo}
                alt={currentGraduate.name}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col justify-between h-full flex-grow w-full">
              <div>
                <div className="mb-4 sm:mb-6">
                  <img
                    src={currentGraduate.logo}
                    alt={currentGraduate.company}
                    className="w-[200px] sm:w-[280px] md:w-[337px] h-auto max-h-[53px] object-contain object-left"
                  />
                </div>
                <blockquote className="max-w-[611px] text-[16px] sm:text-[22px] md:text-[29px] font-medium leading-[1.35] text-black tracking-[0em] mb-6 sm:mb-8 transition-all">
                  {currentGraduate.quote}
                </blockquote>
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#155DFC] leading-tight">
                  {currentGraduate.name}
                </h3>
                <p className="text-[14px] sm:text-[18px] md:text-[20px] font-medium text-[#6B7280] leading-tight mt-1">
                  {currentGraduate.company}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 px-1 sm:px-2">
            <div className="flex items-center gap-2">
              {graduatesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-8 bg-[#155DFC]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-100 cursor-pointer transition text-xl select-none"
                aria-label="Previous Slide"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-100 cursor-pointer transition text-xl select-none"
                aria-label="Next Slide"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestGraduatesSection;