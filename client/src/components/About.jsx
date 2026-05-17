import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { icon: '🎓', label: 'MSc Finance & FinTech', detail: 'Graduate-level grounding in financial theory, digital finance, and emerging technology.' },
  { icon: '📊', label: 'Data & Analytics', detail: 'Hands-on experience in SQL, Python, Power BI, and machine learning pipelines.' },
  { icon: '🏢', label: 'Finance & Real Estate', detail: 'Practical background in tax advisory, portfolio management, and real estate operations.' },
  { icon: '🚀', label: 'Product Mindset', detail: 'Experience with A/B testing, user research, and data-driven product thinking.' },
];

function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-section">

          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#c9a84c]" />
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">About Me</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight">About Me</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div className="space-y-4 text-[#4b5563] leading-relaxed text-base">
              <p>
                I hold an <strong className="text-[#1e3a5f]">MSc in Finance &amp; FinTech</strong> and
                have worked across finance, real estate, and customer-facing advisory roles — giving me
                a strong instinct for what problems actually matter and how data can help solve them.
              </p>
              <p>
                I'm now channelling that into <strong className="text-[#1e3a5f]">data analytics and
                technical product management</strong>, building hands-on skills in SQL, Python, Power BI,
                and machine learning at the intersection of finance and technology.
              </p>
              <p>
                I approach every project with curiosity, structure, and a focus on communicating results
                clearly — to technical and non-technical audiences alike.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label}
                  className="p-5 rounded-2xl bg-[#fdf9f4] shadow-sm hover:shadow-lg hover:shadow-amber-100/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-sm font-semibold text-[#1e3a5f] mb-1.5">{item.label}</h3>
                  <p className="text-sm text-[#4b5563] leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
