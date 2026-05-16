import React from 'react';

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#3b82f6]">
            About Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
            Background &amp; Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className="space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>
              I hold an <strong className="text-[#1e3a5f]">MSc in Finance &amp; FinTech</strong> and
              have built my career across finance, real estate operations, and customer-facing
              advisory roles. That breadth of experience has given me a strong instinct for what
              problems actually matter and how data can help solve them.
            </p>
            <p>
              I am now channelling that experience into <strong className="text-[#1e3a5f]">data
              analytics and technical product management</strong>, building hands-on skills in SQL,
              Python, Power BI, machine learning, and product analytics. I enjoy working at the
              intersection of finance and technology, where rigorous thinking meets practical
              impact.
            </p>
            <p>
              Whether it is uncovering patterns in financial data, building machine learning models,
              or digging into the research behind financial innovation, I approach every project with
              curiosity, structure, and a focus on clear communication of results.
            </p>
            <p>
              My goal is to use data, technology, and financial insight to build practical solutions,
              uncover meaningful patterns, and communicate ideas clearly across finance and business
              contexts.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#3b82f6] hover:shadow-sm transition-all duration-200"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-[#1e3a5f] mb-1">{item.label}</h3>
                <p className="text-sm text-slate-500 leading-snug">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const highlights = [
  {
    icon: '🎓',
    label: 'MSc Finance & FinTech',
    detail: 'Graduate-level grounding in financial theory, digital finance, and emerging technology.',
  },
  {
    icon: '📊',
    label: 'Data & Analytics',
    detail: 'Hands-on experience in SQL, Python, Power BI, and machine learning pipelines.',
  },
  {
    icon: '🏢',
    label: 'Finance & Real Estate',
    detail: 'Practical background in tax advisory, ESG analysis, and real estate operations.',
  },
  {
    icon: '🚀',
    label: 'Product Mindset',
    detail: 'Experience with A/B testing, user research, and data-driven product thinking.',
  },
];

export default About;
