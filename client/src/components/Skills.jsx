import React from 'react';
import skills from '../data/skills.js';

const categoryStyle = {
  'Data & Analytics': { bg: 'bg-[#1e3a5f]', light: 'bg-[#eff6ff]', text: 'text-[#1e3a5f]' },
  'Finance & FinTech': { bg: 'bg-[#0f4c81]', light: 'bg-[#e0f0ff]', text: 'text-[#0f4c81]' },
  'Product & Business': { bg: 'bg-[#1e4d7b]', light: 'bg-[#e8f4fd]', text: 'text-[#1e4d7b]' },
  'Tools':             { bg: 'bg-[#2a4f7f]', light: 'bg-[#eef4fb]', text: 'text-[#2a4f7f]' },
};

const categoryIcons = {
  'Data & Analytics': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  'Finance & FinTech': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'Product & Business': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  'Tools': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#3b82f6]" />
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3b82f6]">What I Know</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f]">Skills</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group) => {
            const style = categoryStyle[group.category] || categoryStyle['Tools'];
            return (
              <div
                key={group.category}
                className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:shadow-md hover:border-[#3b82f6] transition-all duration-200"
              >
                {/* Card header — navy */}
                <div className={`${style.bg} px-5 py-4 flex items-center gap-3`}>
                  <div className="text-white opacity-90">
                    {categoryIcons[group.category]}
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="p-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-xs font-medium ${style.light} ${style.text} rounded-full border border-[#dbeafe]`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
