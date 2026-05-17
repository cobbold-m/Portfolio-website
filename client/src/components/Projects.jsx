import React from 'react';
import projects from '../data/projects.js';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e8f0] hover:border-[#3b82f6] hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Card top accent */}
      <div className="h-1 bg-gradient-to-r from-[#1e3a5f] to-[#3b82f6]" />

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-base font-bold text-[#1e3a5f] mb-3 leading-snug group-hover:text-[#3b82f6] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>

        {/* Problem solved */}
        <div className="mb-4 p-3 rounded-lg bg-[#f8fafc] border border-[#e2e8f0]">
          <p className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wide mb-1">
            Problem Solved
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">{project.problem}</p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 text-xs font-medium bg-[#eff6ff] text-[#1e3a5f] rounded-full border border-[#bfdbfe]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Spacer to push buttons to bottom */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.githubUrl || '#'}
            target={project.githubUrl ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border transition-all duration-200 ${
              project.githubUrl
                ? 'border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white'
                : 'border-[#e2e8f0] text-slate-400 cursor-not-allowed'
            }`}
            onClick={!project.githubUrl ? (e) => e.preventDefault() : undefined}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {project.githubUrl ? 'GitHub' : 'Coming Soon'}
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#3b82f6]" />
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3b82f6]">My Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f]">Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
