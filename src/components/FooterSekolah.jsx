function FooterSekolah() {
    return (
        <footer className="bg-blue-900 px-6 pt-24 pb-12 text-white">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                    <h2 className="mb-4 text-2xl font-bold">
                        SMK Bina Nusantara Semarang
                    </h2>
                    <p className="text-base text-blue-100 leading-relaxed">
                        Jl. Kemantren Raya No.5, RT.02/RW.04 <br />
                        Wonosari, Kec. Ngaliyan, Kota Semarang <br />
                        Jawa Tengah 50186
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold">Link Cepat</h3>
                    <ul className="space-y-3 text-base text-blue-100">
                        <li className="cursor-pointer transition-colors hover:text-white">PPDB 2026</li>
                        <li className="cursor-pointer transition-colors hover:text-white">Galeri Foto</li>
                        <li className="cursor-pointer transition-colors hover:text-white">Kontak Kami</li>
                    </ul>
                </div>

                <div className="h-56 overflow-hidden rounded-lg bg-blue-950 shadow-md">
                    <iframe
                        title="Lokasi Sekolah"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2858744642517!2d110.29887327499692!3d-6.975559193025152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fdc0235654d%3A0x97b3afe1b2104e70!2sSMK%20Bina%20Nusantara%20Semarang!5e0!3m2!1sid!2sid!4v1785246293600!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="mt-16 text-center text-sm text-blue-200">
                © 2026 SMK Bina Nusantara. All rights reserved.
            </div>
        </footer>
    );
}

export default FooterSekolah;
