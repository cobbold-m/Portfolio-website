import React, { useState } from 'react';

const stats = [
  { value: '2+', label: 'Projects' },
  { value: 'MSc', label: 'Finance & FinTech' },
  { value: '3', label: 'Industries', detail: ['Finance', 'Real Estate', 'FinTech'] },
  { value: 'SQL · Python · BI', label: 'Core Stack' },
];

const nowItems = [
  { dot: '#c9a84c', text: 'Applying ML to financial datasets' },
  { dot: '#1e3a5f', text: 'Deepening SQL, Python & Power BI skills' },
  { dot: '#6b7280', text: 'Open to data analyst & TPM roles' },
];

function ProfilePhoto() {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative flex justify-center">
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#fdf3da] via-[#fdf8f2] to-[#e8f0f8] blur-md" />
        {!errored ? (
          <img
            src="/5ddaea74-b56b-432a-b76e-a91ac8f89159.PNG"
            alt="Adjoba Mushia Cobbold"
            onError={() => setErrored(true)}
            className="relative w-44 h-44 rounded-full object-cover object-top shadow-2xl ring-4 ring-white"
          />
        ) : (
          <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a4f7f] flex items-center justify-center shadow-2xl ring-4 ring-white">
            <span className="text-3xl font-black text-white/90 tracking-tight">AMC</span>
          </div>
        )}
        <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-white shadow-sm" title="Open to work" />
      </div>
    </div>
  );
}

function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#fdf8f2] via-[#faf9f7] to-[#eef2f8] pt-16 relative overflow-hidden"
    >
      {/* Dot grid — bottom-left, very subtle */}
      <div className="absolute bottom-20 left-0 w-52 h-52 pointer-events-none opacity-[0.04]" aria-hidden="true">
        <svg viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={16 + col * 34} cy={16 + row * 34} r="3" fill="#1e3a5f" />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#c9a84c]/40 rounded-full mb-7 animate-fade-in delay-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-xs font-medium text-[#1e3a5f] tracking-wide uppercase">Open to opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1a2332] tracking-tight leading-[1.05] mb-5 animate-fade-up delay-200">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Adjoba</span>
                <span
                  className="absolute bottom-1 left-0 w-full h-2 bg-[#c9a84c]/25 rounded-sm -z-0"
                  aria-hidden="true"
                />
              </span>
              {' '}Mushia Cobbold
            </h1>

            <h2 className="text-base sm:text-lg font-normal text-[#6b7280] mb-5 leading-relaxed animate-fade-up delay-300">
              MSc Finance &amp; FinTech &nbsp;·&nbsp; Aspiring Data Analyst / Technical Product Manager
            </h2>

            <p className="text-base text-[#4b5563] leading-relaxed mb-9 max-w-lg animate-fade-up delay-400">
              I bridge the gap between financial insight and data-driven decision making —
              building expertise in SQL, Python, Power BI, and product analytics while
              applying my MSc background to real-world problems.
            </p>

            <div className="flex flex-nowrap gap-3 overflow-x-auto pb-1 animate-fade-up delay-500">
              <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                className="flex-shrink-0 px-5 py-2.5 bg-[#1e3a5f] text-white font-medium rounded-full hover:bg-[#2a4f7f] transition-all duration-200 shadow-sm hover:shadow-md text-sm">
                View Projects
              </a>
              <a href="/cv/ADJOBA_COBBOLD_M.pdf" target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 px-5 py-2.5 border-2 border-[#1e3a5f] text-[#1e3a5f] font-medium rounded-full hover:bg-[#1e3a5f] hover:text-white transition-all duration-200 text-sm">
                Download CV
              </a>
              <a href="https://www.linkedin.com/in/adjoba-cobbold/" target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 px-4 py-2.5 border border-[#e8e4de] text-[#4b5563] font-medium rounded-full hover:border-[#c9a84c] hover:text-[#1e3a5f] transition-all duration-200 flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/cobbold-m" target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 px-4 py-2.5 border border-[#e8e4de] text-[#4b5563] font-medium rounded-full hover:border-[#c9a84c] hover:text-[#1e3a5f] transition-all duration-200 flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="hidden lg:flex flex-col gap-5 animate-slide-right delay-300">

            <ProfilePhoto />

            {/* Currently card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-[#f0ece6]">
              <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest mb-3.5">Currently</p>
              <ul className="space-y-2.5">
                {nowItems.map((item) => (
                  <li key={item.text} className="flex items-center gap-2.5 text-sm text-[#4b5563]">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.dot }} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label}
                  className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md hover:shadow-amber-100/50 hover:-translate-y-0.5 transition-all duration-200">
                  <p className="text-xl font-bold text-[#1e3a5f]">{s.value}</p>
                  <p className="text-xs text-[#6b7280] mt-0.5 font-medium leading-tight">{s.label}</p>
                  {s.detail && (
                    <ul className="mt-1.5 space-y-0.5">
                      {s.detail.map((d) => (
                        <li key={d} className="text-xs text-[#9ca3af] leading-none">{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <a href="#about" onClick={(e) => handleScroll(e, '#about')}
              className="flex items-center gap-2 text-[#4b5563] hover:text-[#c9a84c] transition-colors duration-200 text-xs font-medium tracking-widest uppercase">
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Scroll to explore
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
