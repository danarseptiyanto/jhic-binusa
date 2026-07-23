import React from 'react';
import SinkronisasiKurikulum from '../assets/Sinkronisasi_Kurikulum.jpg';
import ProgramPrakerja from '../assets/Program_Prakerja.png';
import PenyaluranLulusan from '../assets/Penyaluran_Lulusan.jpg';
import { RiBookAiFill, RiBriefcase5Fill, RiServiceFill } from '@remixicon/react';

const KerjasamaSekolah = () => {
  return (
    <section className="max-w-[1280px] mx-auto py-10 px-5 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-5">
        <h2 className="text-[46px] font-medium tracking-[-0.03em] text-gray-900 w-full md:max-w-[492px] leading-tight">
          Kerja sama erat sekolah bersama industri
        </h2>
        <p className="text-[16px] font-normal leading-[1.62] text-gray-600 w-full md:max-w-[457px]">
          Kami menjembatani langkah siswa menuju dunia profesional melalui
          kemitraan strategis bersama berbagai perusahaan terkemuka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-zinc-100 rounded-[30px] p-8 flex flex-col h-[497px] transition-transform duration-300 hover:scale-105">
          <div className="mb-4">
            <RiServiceFill size={30} />
          </div>
          <h3 className="text-[20px] font-medium text-gray-900 mb-3 tracking-[-0.03em]">Sinkronisasi Kurikulum</h3>
          <p className="text-[14px] font-normal leading-[1.62] text-gray-500 w-[326px] mb-6 flex-grow">
            Sinkronisasi kurikulum antara sekolah dan mitra industri setiap jurusan
            agar tercipta kurikulum yang relevan dengan kebutuhan dunia industri.
          </p>
          <div className="mt-auto">
            <img src={SinkronisasiKurikulum} alt="Sinkronisasi Kurikulum" className="w-full h-[262px] object-cover rounded-[16px]" />
          </div>
        </div>

        <div className="bg-blue-600 rounded-[30px] pt-8 px-8 pb-0 flex flex-col h-[497px] overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="mb-4">
            <RiBookAiFill size={30} className='fill-white'  />
          </div>
          <h3 className="text-[20px] font-medium text-white mb-3 tracking-[-0.03em]">Program Prakerja</h3>
          <p className="text-[14px] font-normal leading-[1.62] text-white w-[326px] mb-6 flex-grow">
            Siswa SMK Bina Nusantara Semarang memiliki peluang untuk bekerja di industri
            mitra bahkan sebelum lulus sekolah, dan dengan gaji.
          </p>
          <div className="mt-auto flex justify-center">
            <img src={ProgramPrakerja} alt="Program Prakerja" className="w-full h-[306px] object-contain object-bottom" />
          </div>
        </div>

        <div className="bg-zinc-100 rounded-[30px] p-8 flex flex-col h-[497px] transition-transform duration-300 hover:scale-105">
          <div className="mb-4">
            <RiBriefcase5Fill  size={30}/>
          </div>
          <h3 className="text-[20px] font-medium text-gray-900 mb-3 tracking-[-0.03em]">Penyaluran Lulusan</h3>
          <p className="text-[14px] font-normal leading-[1.62] text-gray-500 w-[326px] mb-6 flex-grow">
            Sekolah melalui program BKK sekolah menjalin kerja sama dengan mitra industri agar siswa lulusan dapat langsung bekerja di industri
          </p>
          <div className="mt-auto">
            <img src={PenyaluranLulusan} alt="Penyaluran Lulusan" className="w-full h-[262px] object-cover rounded-[16px]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default KerjasamaSekolah;