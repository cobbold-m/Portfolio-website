import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Adjoba is one of the most driven and analytical people I have worked with. On our project together, she brought structure and clarity to every problem we tackled, always thinking two steps ahead. Her ability to translate complex data into clear insights is genuinely impressive.",
    name: 'Maame Cobbold',
    role: 'Freelance Collaborator',
  },
];

function Testimonials() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Toggle button */}
        <div className="flex justify-center">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#e8e4de] bg-white text-sm font-semibold text-[#1e3a5f] hover:border-[#c9a84c] hover:shadow-md hover:shadow-amber-100/50 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Testimonials
            <svg
              className={`w-4 h-4 text-[#6b7280] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Collapsible content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? 'max-h-[600px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.id}
                className="relative bg-[#fdf9f4] rounded-3xl p-7 shadow-sm hover:shadow-lg hover:shadow-amber-100/40 hover:-translate-y-0.5 transition-all duration-300">
                {/* Large quote mark */}
                <span className="absolute top-5 right-6 text-6xl leading-none text-[#c9a84c]/20 font-serif select-none" aria-hidden="true">“</span>

                <p className="text-sm text-[#4b5563] leading-relaxed italic mb-6 relative z-10">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a4f7f] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a2332]">{t.name}</p>
                    <p className="text-xs text-[#c9a84c] font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
