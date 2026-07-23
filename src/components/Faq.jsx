import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

const faqData = [
  {
    id: 1,
    question: "Apa kegunaan web ini?",
    answer:
      "Website ini dirancang untuk memberikan informasi resmi seputar kegiatan, keunggulan, serta prestasi siswa-siswi sekolah secara transparan dan mudah diakses.",
  },
  {
    id: 2,
    question: "Apa kegunaan web ini?",
    answer:
      "Memudahkan calon siswa dan orang tua untuk melihat profil sekolah, program keahlian, serta pendaftaran secara online.",
  },
  {
    id: 3,
    question: "Apa kegunaan web ini?",
    answer:
      "Sebagai sarana dokumentasi resmi seluruh kegiatan sekolah, ekstrakurikuler, dan kompetisi yang diikuti.",
  },
  {
    id: 4,
    question: "Apa kegunaan web ini?",
    answer:
      "Menyediakan pusat informasi FAQ dan bantuan teknis bagi seluruh warga sekolah.",
  },
  {
    id: 5,
    question: "Apa kegunaan web ini?",
    answer:
      "Menghubungkan alumni dengan siswa aktif untuk membagikan pengalaman dunia kerja dan perkuliahan.",
  },
  {
    id: 6,
    question: "Apa kegunaan web ini?",
    answer:
      "Menampilkan pengumuman penting, jadwal akademik, dan agenda kegiatan mendatang secara real-time.",
  },
  {
    id: 7,
    question: "Apa kegunaan web ini?",
    answer:
      "Memfasilitasi komunikasi antara pihak sekolah, guru, dan wali murid.",
  },
  {
    id: 8,
    question: "Apa kegunaan web ini?",
    answer:
      "Sebagai media portofolio digital prestasi dan keunggulan yang dimiliki sekolah.",
  },
];

function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white font-sans py-10 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-[1240px] flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-[#F3F4F6] px-3 py-1.5 rounded-[8px] mb-3 sm:mb-4 shadow-sm">
          <div className="w-[18px] h-[18px] bg-[#155DFC] rounded-full flex items-center justify-center text-white text-[10px] font-semibold">
            i
          </div>
          <span className="text-[12px] font-semibold text-black tracking-wide">
            FAQ
          </span>
        </div>

        <div className="text-center max-w-[650px] mb-8 sm:mb-12">
          <h2 className="text-[26px] sm:text-[36px] md:text-[45px] font-bold text-black leading-tight tracking-tight mb-2 sm:mb-3">
            Frequently Asked Quetions
          </h2>
          <p className="text-[14px] sm:text-[18px] md:text-[20px] font-bold text-[#9CA3AF] leading-snug">
            Everything you to know, answerd clearly in one place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full max-w-[1200px] items-start">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-[#D1D5DB] rounded-[10px] p-4 sm:p-5 transition-all duration-200 cursor-pointer shadow-sm hover:border-[#155DFC]"
                onClick={() => toggleFaq(item.id)}
              >
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-4">
                    <span className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black shrink-0">
                      {item.id}.
                    </span>
                    <h3 className="text-[14px] sm:text-[17px] md:text-[20px] font-bold text-black leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="text-black hover:text-[#155DFC] transition-colors shrink-0 ml-2"
                    aria-label="Toggle answer"
                  >
                    {isOpen ? (
                      <RiSubtractLine className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <RiAddLine className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-gray-100 text-[13px] sm:text-[15px] text-gray-600 font-normal leading-relaxed pl-6 sm:pl-9">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
