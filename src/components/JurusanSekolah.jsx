import React from 'react';
import tkj1 from '../assets/jurusan_tkj1.jpg';
import tkj2 from '../assets/jurusan_tkj2.jpg';
import tsm1 from '../assets/jurusan_tsm1.jpg';
import tsm2 from '../assets/jurusan_tsm2.jpg';
import tb1 from '../assets/jurusan_tb1.jpg';
import tb2 from '../assets/jurusan_tb2.jpg';
import akl1 from '../assets/jurusan_akl1.jpg';
import akl2 from '../assets/jurusan_akl2.jpg';
import { RiMacbookLine, RiSettingsLine, RiScissorsCutFill, RiCalculatorLine } from '@remixicon/react';

const JurusanSekolah = () => {
  const dataJurusan = [
    {
      id: 1,
      nama: "Teknik Komputer dan Jaringan",
      deskripsi: "Mengelola, merancang, dan memelihara sistem jaringan komputer, serta troubleshooting perangkat keras dan perangkat lunak.",
      iconBg: "bg-blue-600", 
      icon: (
        <RiMacbookLine size={24} className="fill-white" />
      ),
      img1: tkj1,
      img2: tkj2
    },
    {
      id: 2,
      nama: "Teknik Sepeda Motor",
      deskripsi: "Mempersiapkan siswa untuk menjadi teknisi yang ahli dalam perbaikan dan perawatan sepeda motor.",
      iconBg: "bg-red-600",
      icon: (
        <RiSettingsLine size={24} className="fill-white" />
      ),
      img1: tsm1,
      img2: tsm2
    },
    {
      id: 3,
      nama: "Desain Produksi Busana", 
      deskripsi: "Keterampilan dalam mendesain, membuat pola, menjahit, hingga menghasilkan produk fashion yang kreatif dan sesuai tren.",
      iconBg: "bg-green-600",
      icon: (
        <RiScissorsCutFill size={24} className="fill-white" />
      ),
      img1: tb1,
      img2: tb2
    },
    {
      id: 4,
      nama: "Akuntansi",
      deskripsi: "Pengembangan kemampuan dalam pencatatan keuangan, penyusunan laporan, serta analisis keuangan.",
      iconBg: "bg-purple-600",
      icon: (
        <RiCalculatorLine size={24} className="fill-white" />
      ),
      img1: akl1,
      img2: akl2
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-[36px] md:text-[46px] font-medium text-gray-900 tracking-[-0.03em] mb-4">
            Kompetensi Keahlian
          </h2>
          <p className="text-[14px] md:text-[16px] font-normal leading-[1.3] text-gray-500 w-full max-w-[541px] text-center mx-auto">
            Jelajahi berbagai pilihan Kompetensi Kejuruan yang dilayani SMK Bina Nusantara Semarang berikut ini
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataJurusan.map((jurusan) => (
            <div 
              key={jurusan.id} 
              className="bg-zinc-100 p-6 md:p-8 rounded-[30px] h-auto md:h-[361px] flex flex-col justify-between transition-transform duration-300 hover:scale-105 gap-6 md:gap-0"
            >
              <div className="flex items-start gap-4">
                <div className={`w-[57px] h-[57px] rounded-[9px] flex items-center justify-center ${jurusan.iconBg} flex-shrink-0`}>
                  {jurusan.icon}
                </div>
                <div className="flex flex-col w-full">
                  <h3 className="text-[20px] md:text-[24px] font-medium text-black leading-[1.16] mb-2">
                    {jurusan.nama}
                  </h3>
                  <p className="text-[14px] font-normal text-gray-500 leading-[1.5] w-full md:max-w-[485px] h-auto md:h-[45px]">
                    {jurusan.deskripsi}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <img 
                  src={jurusan.img1} 
                  alt={`Kegiatan ${jurusan.nama} 1`} 
                  className="w-full h-[120px] sm:h-[160px] md:h-[204px] object-cover rounded-[16px]"
                />
                <img 
                  src={jurusan.img2} 
                  alt={`Kegiatan ${jurusan.nama} 2`} 
                  className="w-full h-[120px] sm:h-[160px] md:h-[204px] object-cover rounded-[16px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JurusanSekolah;