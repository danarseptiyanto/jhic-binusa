import React from "react";

function ProfilSekolah() {
	return (
		<div className="max-w-[1285px] px-5 flex justify-between mx-auto">
			<div className="">
				<p className="font-medium text-[28px] text-gray-900">
					Profil Sekolah
				</p>
			</div>
			<div className="text-gray-900 font-medium text-[46px] max-w-[705px] tracking-tight leading-tight">
				Sekolah Menengah Kejuruan yang berprestasi{" "}
				<span className="text-zinc-500">
					dengan fasilitas kelas modern dan lulusan siap kerja.
				</span>
			</div>
		</div>
	);
}

export default ProfilSekolah;
