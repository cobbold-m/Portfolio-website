import React from 'react';
import experience from '../data/experience.js';

function ExperienceCard({ item, index }) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-[#c9a84c]/30">
          {index + 1}
        </div>
        {index < experience.length - 1 && (
          <div className="flex-1 w-0.5 bg-gradient-to-b from-[#1e3a5f] to-[#e2e8f0] mt-2" />
        )}
      </div>

      <div className="pb-8 flex-1">
        <div className="bg-white rounded-xl border border-[#e2e8f0] hover:border-[#3b82f6] hover:shadow-md transition-all duration-200 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-[#1e3a5f] via-[#3b82f6] to-[#c9a84c]" />
          <div className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-[#1e3a5f]">{item.role}</h3>
              <span className="text-xs font-medium text-white bg-[#1e3a5f] px-2.5 py-1 rounded-full whitespace-nowrap">
                {item.period}
              </span>
            </div>

            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-sm font-semibold text-[#3b82f6]">{item.company}</span>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-400">{item.location}</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>

            <ul className="space-y-2">
              {item.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#c9a84c]" />
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3b82f6]">Career History</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f]">Experience</h2>
          </div>
        </div>

        <div className="max-w-3xl">
          {experience.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
