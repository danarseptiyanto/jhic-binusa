import HeroBackground from "./HeroBackground";

function HeroSection() {
  return (
    <section className="relative pt-[140px] pb-16 overflow-hidden flex flex-col items-center text-center">
      <HeroBackground />

      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-[173px] h-[37px] rounded-[20.5px] bg-[#E4E4E7] flex items-center justify-center mb-6">
          <span className="text-[16px] text-[#111827] font-normal leading-none">
            Selamat Datang 👋
          </span>
        </div>

        <h1 className="max-w-[461px] text-[48px] font-semibold leading-[52px] tracking-[-0.03em] text-black mb-4">
          Sambut masa depan cemerlang bersama SMK Bina Nusantara
        </h1>

        <p className="max-w-[456px] text-[16px] font-normal leading-[1.44] text-[#6B7280] mb-8">
          Kami berkomitmen memberikan pengalaman belajar terbaik dengan dukungan
          fasilitas dan program unggulan. Temukan passion-mu dan jadilah ahli di
          bidangnya.
        </p>

        <button
          type="button"
          className="w-[141px] h-[48px] rounded-[45px] bg-[#2563EB] text-white text-[16px] font-medium transition hover:bg-blue-700 cursor-pointer flex items-center justify-center mb-16 shadow-sm"
        >
          SPMB 2027
        </button>

        <p className="max-w-[407px] text-[20px] font-medium leading-[52px] tracking-[-0.03em] text-black">
          Gabung dengan ribuan alumni sukses lainnya
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
