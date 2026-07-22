import React from 'react';

const KeunggulanSekolah = () => {
  const keunggulanData = [
    {
      id: 1,
      title: "SMK Pusat Keunggulan",
      desc: "Jurusan DPB merupakan Program SMK Pusat Keunggulan sejak Tahun 2022.",
      isActive: true
    },
    {
      id: 2,
      title: "Lab Berstandar Internasional",
      desc: "Lab praktik semua jurusan sudah sangat memadai dan berstandar internasional.",
      isActive: false
    },
    {
      id: 3,
      title: "Program Pra-Kerja",
      desc: "Siswa SMK Binusa memiliki peluang untuk bekerja bahkan sebelum lulus sekolah.",
      isActive: false
    },
    {
      id: 4,
      title: "Bootcamp Web Developer",
      desc: "Program untuk siswa yang memiliki keterampilan pemrograman web.",
      isActive: false
    },
    {
      id: 5,
      title: "Penyaluran Kerja lewat BKK",
      desc: "Penyaluran pekerjaan kepada lulusan karena bekerja sama dengan banyak industri.",
      isActive: false
    },
    {
      id: 6,
      title: "Sekolah Sambil Mondok",
      desc: "Terdapat program Pondok Pesantren dengan beasiswa bagi siswa luar kota.",
      isActive: false
    }
  ];

  return (
    <section className="w-full bg-blue-600 font-sans py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5">
        <h2 className="text-white text-[29px] font-semibold leading-[1.29] tracking-normal mb-12 w-full md:max-w-[477px]">
          SMK Bina Nusantara hadir dengan berbagai keunggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keunggulanData.map((item) => (
            <div 
              key={item.id}
              className={`p-6 rounded-[15px] transition-transform duration-300 hover:scale-105 flex flex-col h-[246px] shadow-md ${
                item.isActive 
                  ? 'bg-blue-200 text-gray-900' 
                  : 'bg-blue-800 text-white' 
              }`}
            >
              <span className={`text-[64px] font-bold leading-[0.95] tracking-normal mb-4 inline-block bg-clip-text text-transparent ${
                item.isActive 
                  ? 'bg-gradient-to-b from-gray-900 to-gray-400' 
                  : 'bg-gradient-to-b from-white to-white/30'
              }`}>
                {item.id}
              </span>
              <div className="mt-auto">
                <h3 className={`text-[20px] font-semibold mb-2 leading-[1.35] tracking-normal ${
                  item.isActive ? 'text-black' : 'text-white'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-[16px] font-normal leading-[1.35] tracking-normal max-w-[341px] mb-6 flex-grow ${
                  item.isActive ? 'text-black/[.57]' : 'text-[#C3C3C3]'
                }`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeunggulanSekolah;