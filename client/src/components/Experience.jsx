import React from 'react';
import experience from '../data/experience.js';

function ExperienceCard({ item, index }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#eff6ff] border-2 border-[#3b82f6] flex items-center justify-center text-[#3b82f6] font-bold text-sm">
          {index + 1}
        </div>
        {index < experience.length - 1 && (
          <div className="flex-1 w-0.5 bg-[#e2e8f0] mt-2" />
        )}
      </div>

      {/* Card content */}
      <div className="pb-10 flex-1">
        <div className="bg-white rounded-xl border border-[#e2e8f0] hover:border-[#3b82f6] hover:shadow-md transition-all duration-200 p-6">
          {/* Role & period */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-[#1e3a5f]">{item.role}</h3>
            <span className="text-xs font-medium text-[#3b82f6] bg-[#eff6ff] px-2.5 py-1 rounded-full whitespace-nowrap">
              {item.period}
            </span>
          </div>

          {/* Company & location */}
          <div className="flex items-center gap-1.5 mb-4">
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500 hover:text-[#3b82f6] transition-colors duration-200"
              >
                {item.company}
              </a>
            ) : (
              <span className="text-sm font-medium text-slate-500">{item.company}</span>
            )}
            <span className="text-slate-300">·</span>
            <span className="text-sm text-slate-400">{item.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>

          {/* Highlights */}
          <ul className="space-y-2">
            {item.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <svg
                  className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#3b82f6]">
            Career History
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">Experience</h2>
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
