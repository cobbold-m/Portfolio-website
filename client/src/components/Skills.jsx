import React from 'react';
import skills from '../data/skills.js';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categoryBorder = {
  'Data & Analytics':   'border-l-[#1e3a5f]',
  'Finance & FinTech':  'border-l-[#0f4c81]',
  'Product & Business': 'border-l-[#334155]',
  'Tools':              'border-l-[#475569]',
};

const categoryIcons = {
  'Data & Analytics': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  'Finance & FinTech': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'Product & Business': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  'Tools': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-20 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-section">

          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#c9a84c]" />
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">What I Know</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight">Skills</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((group) => (
              <div key={group.category}
                className={`bg-white rounded-xl border border-[#e8e4de] border-l-4 ${categoryBorder[group.category] || 'border-l-[#1e3a5f]'} overflow-hidden hover:shadow-lg hover:shadow-amber-100/40 transition-all duration-300`}>
                <div className="px-5 pt-5 pb-3 flex items-center gap-2.5">
                  <span className="text-[#1e3a5f]">{categoryIcons[group.category]}</span>
                  <h3 className="text-sm font-bold text-[#1e3a5f] leading-tight">{group.category}</h3>
                </div>
                <div className="px-5 pb-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill}
                      className="px-3 py-1 text-xs font-medium bg-[#fef9ec] text-[#92710a] rounded-full border border-[#e8d5a0]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
