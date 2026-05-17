import React from 'react';

const highlights = [
  { icon: '🎓', label: 'MSc Finance & FinTech', detail: 'Graduate-level grounding in financial theory, digital finance, and emerging technology.' },
  { icon: '📊', label: 'Data & Analytics', detail: 'Hands-on experience in SQL, Python, Power BI, and machine learning pipelines.' },
  { icon: '🏢', label: 'Finance & Real Estate', detail: 'Practical background in tax advisory, portfolio management, and real estate operations.' },
  { icon: '🚀', label: 'Product Mindset', detail: 'Experience with A/B testing, user research, and data-driven product thinking.' },
];

function About() {
  return (
    <section id="about" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#3b82f6]">About Me</span>
          <div className="flex-1 h-px bg-[#e2e8f0]" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] tracking-tight mb-14">
          Background &amp; Mission
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-5 text-slate-500 leading-relaxed text-base">
            <p>
              I hold an <strong className="text-[#1e3a5f] font-semibold">MSc in Finance &amp; FinTech</strong> and have built my career across finance, real estate operations, and customer-facing advisory roles. That breadth of experience has given me a strong instinct for what problems actually matter and how data can help solve them.
            </p>
            <p>
              I am now channelling that experience into{' '}
              <strong className="text-[#1e3a5f] font-semibold">data analytics and technical product management</strong>,
              building hands-on skills in SQL, Python, Power BI, machine learning, and product analytics. I enjoy working at the intersection of finance and technology, where rigorous thinking meets practical impact.
            </p>
            <p>
              Whether it is uncovering patterns in financial data, building machine learning models, or digging into the research behind financial innovation, I approach every project with curiosity, structure, and a focus on clear communication of results.
            </p>
            <p>
              My goal is to use data, technology, and financial insight to build practical solutions, uncover meaningful patterns, and communicate ideas clearly across finance and business contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.label}
                className="bg-white border border-[#e2e8f0] rounded-xl p-5 hover:border-[#3b82f6] hover:shadow-sm transition-all duration-200">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-[#1e3a5f] mb-1.5">{item.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
