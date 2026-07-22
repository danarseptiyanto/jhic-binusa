function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Lingkaran paling luar */}
      <div
        className="
          absolute
          left-1/2
          top-[-320px]
          -translate-x-1/2
          w-[1700px]
          h-[1700px]
          rounded-full
          border
          border-[#bababb]
        "
      />

      {/* Lingkaran tengah */}
      <div
        className="
          absolute
          left-1/2
          top-[-170px]
          -translate-x-1/2
          w-[1250px]
          h-[1250px]
          rounded-full
          border
          border-[#bababb]
        "
      />

      {/* Lingkaran kecil */}
      <div
        className="
          absolute
          left-1/2
          top-[10px]
          -translate-x-1/2
          w-[820px]
          h-[820px]
          rounded-full
          border
          border-[#bababb]
        "
      />

      {/* Garis kiri */}
      <svg
        className="absolute left-0 top-[140px]"
        width="270"
        height="340"
        viewBox="0 0 270 340"
        fill="none"
      >
        <path
          d="M260 0
             C120 40,
             150 180,
             20 180
             C0 180,
             0 210,
             0 340"
          stroke="#E5E7EB"
          strokeWidth="1.5"
        />
      </svg>

      {/* Garis kanan */}
      <svg
        className="absolute right-0 top-[140px]"
        width="270"
        height="340"
        viewBox="0 0 270 340"
        fill="none"
      >
        <path
          d="M10 0
             C150 40,
             120 180,
             250 180
             C270 180,
             270 210,
             270 340"
          stroke="#bababb"
          strokeWidth="1.5"
        />
      </svg>

    </div>
  );
}

export default HeroBackground;