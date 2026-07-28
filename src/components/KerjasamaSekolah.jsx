import React from "react";
import SinkronisasiKurikulum from "../assets/kerjasama_sekolah/Sinkronisasi_Kurikulum.jpg";
import ProgramPrakerja from "../assets/kerjasama_sekolah/Program_Prakerja.png";
import PenyaluranLulusan from "../assets/kerjasama_sekolah/Penyaluran_Lulusan.jpg";
import {
    RiBookAiFill,
    RiBriefcase5Fill,
    RiServiceFill,
} from "@remixicon/react";

const KerjasamaSekolah = () => {
    return (
        <section className="mx-auto max-w-[1280px] px-5 py-10 font-sans">
            <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row">
                <h2 className="w-full text-[46px] font-medium leading-tight tracking-[-0.03em] text-gray-900 md:max-w-[492px]">
                    Kerja sama erat sekolah bersama industri
                </h2>
                <p className="w-full text-[16px] font-normal leading-[1.62] text-gray-600 md:max-w-[457px]">
                    Kami menjembatani langkah siswa menuju dunia profesional
                    melalui kemitraan strategis bersama berbagai perusahaan
                    terkemuka.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex h-auto flex-col rounded-[30px] bg-zinc-100 p-8 transition-transform duration-300 hover:scale-105 md:h-[497px]">
                    <div className="mb-4">
                        <RiServiceFill size={30} />
                    </div>
                    <h3 className="mb-3 text-[20px] font-medium tracking-[-0.03em] text-gray-900">
                        Sinkronisasi Kurikulum
                    </h3>
                    <p className="mb-6 w-full flex-grow text-[14px] font-normal leading-[1.62] text-gray-500">
                        Sinkronisasi kurikulum antara sekolah dan mitra industri
                        setiap jurusan agar tercipta kurikulum yang relevan
                        dengan kebutuhan dunia industri.
                    </p>
                    <div className="mt-auto">
                        <img
                            src={SinkronisasiKurikulum}
                            alt="Sinkronisasi Kurikulum"
                            className="h-[262px] w-full rounded-[16px] object-cover"
                        />
                    </div>
                </div>

                <div className="flex h-auto flex-col overflow-hidden rounded-[30px] bg-blue-600 px-8 pb-0 pt-8 transition-transform duration-300 hover:scale-105 md:h-[497px]">
                    <div className="mb-4">
                        <RiBookAiFill size={30} className="fill-white" />
                    </div>
                    <h3 className="mb-3 text-[20px] font-medium tracking-[-0.03em] text-white">
                        Program Prakerja
                    </h3>
                    <p className="mb-6 w-full flex-grow text-[14px] font-normal leading-[1.62] text-white">
                        Siswa SMK Bina Nusantara Semarang memiliki peluang untuk
                        bekerja di industri mitra bahkan sebelum lulus sekolah,
                        dan dengan gaji.
                    </p>
                    <div className="mt-auto flex justify-center">
                        <img
                            src={ProgramPrakerja}
                            alt="Program Prakerja"
                            className="h-[306px] w-full object-contain object-bottom"
                        />
                    </div>
                </div>

                <div className="flex h-auto flex-col rounded-[30px] bg-zinc-100 p-8 transition-transform duration-300 hover:scale-105 md:h-[497px]">
                    <div className="mb-4">
                        <RiBriefcase5Fill size={30} />
                    </div>
                    <h3 className="mb-3 text-[20px] font-medium tracking-[-0.03em] text-gray-900">
                        Penyaluran Lulusan
                    </h3>
                    <p className="mb-6 w-full flex-grow text-[14px] font-normal leading-[1.62] text-gray-500">
                        Sekolah melalui program BKK sekolah menjalin kerja sama
                        dengan mitra industri agar siswa lulusan dapat langsung
                        bekerja di industri
                    </p>
                    <div className="mt-auto">
                        <img
                            src={PenyaluranLulusan}
                            alt="Penyaluran Lulusan"
                            className="h-[262px] w-full rounded-[16px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KerjasamaSekolah;
