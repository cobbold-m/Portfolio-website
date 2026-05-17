import React from 'react';
import skills from '../data/skills.js';

function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#3b82f6]">What I Know</span>
          <div className="flex-1 h-px bg-[#e2e8f0]" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] tracking-tight mb-14">Skills</h2>

        <div className="divide-y divide-[#f1f5f9]">
          {skills.map((group) => (
            <div key={group.category} className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-8 items-center">
              <div className="sm:col-span-3">
                <span className="text-sm font-bold text-[#1e3a5f]">{group.category}</span>
              </div>
              <div className="sm:col-span-9 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-[#f8fafc] text-slate-600 rounded-lg border border-[#e2e8f0] hover:border-[#3b82f6] hover:text-[#1e3a5f] transition-colors duration-150">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
