import React from 'react';
import projects from '../data/projects.js';

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#bfdbfe] transition-all duration-300 flex flex-col group">
      <div className="p-7 flex flex-col flex-1">

        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl font-bold text-[#e8eef4] group-hover:text-[#bfdbfe] transition-colors duration-300 leading-none mt-1 select-none flex-shrink-0">{num}</span>
          <h3 className="text-lg font-bold text-[#1e3a5f] leading-snug group-hover:text-[#3b82f6] transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-5">{project.description}</p>

        <div className="mb-5 pl-4 border-l-2 border-[#3b82f6]">
          <p className="text-xs font-semibold text-[#3b82f6] uppercase tracking-wide mb-1">Problem Solved</p>
          <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tools.map((tool) => (
            <span key={tool} className="px-2.5 py-1 text-xs font-medium bg-[#f8fafc] text-slate-500 rounded-md border border-[#e2e8f0]">
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          <a
            href={project.githubUrl || '#'}
            target={project.githubUrl ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={!project.githubUrl ? (e) => e.preventDefault() : undefined}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 ${
              project.githubUrl
                ? 'border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white'
                : 'border-[#e2e8f0] text-slate-300 cursor-not-allowed'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            {project.githubUrl ? 'View on GitHub' : 'Coming Soon'}
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors duration-200">
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
    <section id="projects" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#3b82f6]">My Work</span>
          <div className="flex-1 h-px bg-[#e2e8f0]" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] tracking-tight mb-14">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
