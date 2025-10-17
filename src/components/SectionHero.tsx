const SectionHero = () => {
  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="relative h-[60vh] bg-butter-100 flex items-center"
    >
      <BackgroundDots />
      <EdgeDoodles />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
        <h1
          id="hero-title"
          className="mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-normal"
        >
          <span className="text-red-600">The Future of </span>
          <span className="text-outline">Accessible Storefront </span>
          <span className="text-red-600">Is Here</span>
        </h1>

        <p className="mt-6 sm:mt-7 text-sm sm:text-xl text-slate-800/80 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco.
        </p>

        <div className="mt-8 sm:mt-9">
          <a
            href="#products"
            className="p-4 border-olive-600 border-2 bg-white font-semibold text-slate-600 rounded-4xl shadow-xl hover:bg-gray-100 hover:shadow-2xl"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  )
}

const BackgroundDots = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
    >
      <defs>
        <pattern
          x="0"
          y="0"
          width="28"
          height="28"
          id="dotgrid"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <g className="text-slate-900/10">
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </g>
    </svg>
  )
}

const EdgeDoodles = () => {
  return (
    <>
      {/* Top-left starburst */}
      <svg
        fill="none"
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute top-6 left-6 h-12 w-12 text-slate-900/15 max-sm:hidden"
      >
        <path
          strokeWidth="2"
          className="stroke-current"
          d="M32 4 L37 24 L60 24 L41 36 L48 58 L32 44 L16 58 L23 36 L4 24 L27 24 Z"
        />
      </svg>

      {/* Top-right plus grid */}
      <svg
        fill="none"
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute top-6 right-8 h-12 w-12 text-slate-900/15 max-sm:hidden"
      >
        <path
          strokeWidth="2"
          className="stroke-current"
          d="M12 12 H52 M12 32 H52 M12 52 H52"
        />
        <path
          strokeWidth="2"
          className="stroke-current"
          d="M12 12 V52 M32 12 V52 M52 12 V52"
        />
      </svg>

      {/* Left-center chevrons (side, not beside text area) */}
      <svg
        fill="none"
        aria-hidden="true"
        viewBox="0 0 120 40"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-10 w-20 text-slate-900/15 max-md:hidden"
      >
        <path
          strokeWidth="2"
          className="stroke-current"
          d="M10 30 L30 10 L50 30 L70 10 L90 30 L110 10"
        />
      </svg>

      {/* Bottom-left zigzag */}
      <svg
        fill="none"
        aria-hidden="true"
        viewBox="0 0 140 40"
        className="pointer-events-none absolute bottom-8 left-10 h-10 w-28 text-slate-900/15"
      >
        <path
          strokeWidth="2"
          className="stroke-current"
          d="M0 30 L20 10 L40 30 L60 10 L80 30 L100 10 L120 30 L140 10"
        />
      </svg>

      {/* Bottom-right concentric rings */}
      <svg
        fill="none"
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="pointer-events-none absolute bottom-6 right-8 h-16 w-16 text-slate-900/15"
      >
        <circle cx="50" cy="50" r="40" className="stroke-current" strokeWidth="2" />
        <circle cx="50" cy="50" r="22" className="stroke-current" strokeWidth="2" />
      </svg>
    </>
  )
}

export default SectionHero
