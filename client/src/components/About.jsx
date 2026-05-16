import React from 'react';

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    label: 'MSc Finance & FinTech',
    detail: 'Graduate-level grounding in financial theory, digital finance, and emerging technology.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: 'Data & Analytics',
    detail: 'Hands-on skills in SQL, Python, Power BI, and machine learning pipelines.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Finance & FinTech',
    detail: 'Practical background in portfolio management, financial markets, and blockchain.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Product Mindset',
    detail: 'Experience with A/B testing, user research, and data-driven product thinking.',
  },
];

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#3b82f6]" />
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3b82f6]">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f]">Background &amp; Mission</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Text content — takes 3 cols */}
          <div className="lg:col-span-3 space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              I hold an <strong className="text-[#1e3a5f]">MSc in Finance &amp; FinTech</strong> and
              have built my career across finance, real estate operations, and customer-facing
              advisory roles. That breadth of experience has given me a strong instinct for what
              problems actually matter and how data can help solve them.
            </p>
            <p>
              I am now channelling that experience into{' '}
              <strong className="text-[#1e3a5f]">data analytics and technical product management</strong>,
              building hands-on skills in SQL, Python, Power BI, machine learning, and product analytics.
              I enjoy working at the intersection of finance and technology, where rigorous thinking
              meets practical impact.
            </p>
            <p>
              Whether it is uncovering patterns in financial data, building machine learning models,
              or digging into the research behind financial innovation, I approach every project with
              curiosity, structure, and a focus on clear communication of results.
            </p>
            <p>
              My goal is to use data, technology, and financial insight to build practical solutions,
              uncover meaningful patterns, and communicate ideas clearly across finance and business contexts.
            </p>

            {/* Availability banner */}
            <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-[#f0f7ff] border border-[#bfdbfe]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] animate-pulse flex-shrink-0" />
              <p className="text-sm text-[#1e3a5f] font-medium">
                Open to Data Analyst, Business Analyst, and Technical PM roles — ideally in FinTech or financial services.
              </p>
            </div>
          </div>

          {/* Highlight cards — takes 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#3b82f6] hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-[#1e3a5f] text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1e3a5f] mb-0.5">{item.label}</h3>
                  <p className="text-xs text-slate-500 leading-snug">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
