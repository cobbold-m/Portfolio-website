import React from 'react';
import experience from '../data/experience.js';

function ExperienceCard({ item }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 py-10 border-b border-[#f1f5f9] last:border-0">
      <div className="sm:col-span-3">
        <span className="inline-block text-xs font-semibold text-[#3b82f6] bg-[#eff6ff] px-3 py-1.5 rounded-lg whitespace-nowrap">
          {item.period}
        </span>
      </div>
      <div className="sm:col-span-9">
        <h3 className="text-lg font-bold text-[#1e3a5f] mb-1">{item.role}</h3>
        <div className="flex items-center gap-2 mb-4">
          {item.companyUrl ? (
            <a href={item.companyUrl} target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-[#3b82f6] hover:underline">{item.company}</a>
          ) : (
            <span className="text-sm font-semibold text-slate-400">{item.company}</span>
          )}
          <span className="text-slate-300">·</span>
          <span className="text-sm text-slate-400">{item.location}</span>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.description}</p>
        <ul className="space-y-2.5">
          {item.highlights.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#3b82f6]">Career History</span>
          <div className="flex-1 h-px bg-[#e2e8f0]" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] tracking-tight mb-14">Experience</h2>

        <div className="max-w-4xl">
          {experience.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
