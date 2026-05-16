import React from 'react';

function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#f8fafc] via-white to-[#eff6ff] pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Greeting tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="text-xs font-medium text-[#1e3a5f] tracking-wide uppercase">
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight mb-4">
            Hi, I'm{' '}
            <span className="text-[#3b82f6]">Adjoba Mushia Cobbold</span>
          </h1>

          {/* Headline */}
          <h2 className="text-lg sm:text-xl font-medium text-slate-500 mb-6 tracking-wide">
            MSc Finance &amp; FinTech &nbsp;|&nbsp; Aspiring Data Analyst / Technical Product Manager
          </h2>

          {/* Intro paragraph */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
            I bridge the gap between financial insight and data-driven decision making.
            Currently building expertise in SQL, Python, Power BI, and product analytics
            while applying my MSc Finance &amp; FinTech background to real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* View Projects */}
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-lg hover:bg-[#2a4f7f] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View Projects
            </a>

            {/* Download CV */}
            <a
              href="/cv/ADJOBA_COBBOLD_M.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] font-medium rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-all duration-200"
            >
              Download CV
            </a>

            {/* LinkedIn */}
            {/* TODO: Replace href with your LinkedIn profile URL e.g. 'https://linkedin.com/in/yourname' */}
            <a
              href="https://www.linkedin.com/in/adjoba-cobbold/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e2e8f0] text-slate-600 font-medium rounded-lg hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            {/* TODO: Replace href with your GitHub profile URL e.g. 'https://github.com/yourusername' */}
            <a
              href="https://github.com/cobbold-m"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e2e8f0] text-slate-600 font-medium rounded-lg hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-start">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, '#about')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#3b82f6] transition-colors duration-200"
            aria-label="Scroll to About"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
