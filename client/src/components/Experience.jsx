import React from 'react';
import experience from '../data/experience.js';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ExperienceCard({ item, index }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-[#c9a84c]/40 ring-offset-2 ring-offset-[#faf9f7]">
          {index + 1}
        </div>
        {index < experience.length - 1 && (
          <div className="flex-1 w-0.5 bg-gradient-to-b from-[#c9a84c]/60 to-transparent mt-3" />
        )}
      </div>

      {/* Card */}
      <div className="pb-10 flex-1">
        <div className="bg-white rounded-2xl border border-[#e8e4de] hover:shadow-xl hover:shadow-amber-100/40 transition-all duration-300 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-[#1e3a5f] via-[#3b82f6] to-[#c9a84c]" />
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-[#1a2332]">{item.role}</h3>
              <span className="text-xs font-semibold text-white bg-[#1e3a5f] px-3 py-1 rounded-full whitespace-nowrap">
                {item.period}
              </span>
            </div>

            <div className="flex items-center gap-1.5 mb-4">
              {item.companyUrl ? (
                <a href={item.companyUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#c9a84c] hover:underline">
                  {item.company}
                </a>
              ) : (
                <span className="text-sm font-semibold text-[#c9a84c]">{item.company}</span>
              )}
              <span className="text-[#d1c9be]">·</span>
              <span className="text-sm text-[#6b7280]">{item.location}</span>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed mb-4">{item.description}</p>

            <ul className="space-y-2.5">
              {item.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#4b5563]">
                  <span className="w-5 h-5 rounded-full bg-[#fef9ec] border border-[#e8d5a0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
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
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-20 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-section">

          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#c9a84c]" />
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">Career History</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight">Experience</h2>
            </div>
          </div>

          <div>
            {experience.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
