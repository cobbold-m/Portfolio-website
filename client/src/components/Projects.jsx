import React from 'react';
import projects from '../data/projects.js';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
      <div className="h-1 bg-gradient-to-r from-[#1e3a5f] via-[#3b82f6] to-[#c9a84c]" />

      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-base font-bold text-[#1a2332] mb-3 leading-snug group-hover:text-[#1e3a5f] transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-sm text-[#4b5563] leading-relaxed mb-4">{project.description}</p>

        <div className="mb-5 p-3.5 rounded-2xl bg-[#fef9ec] border border-[#e8d5a0]">
          <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1.5">Problem Solved</p>
          <p className="text-xs text-[#6b5a2a] leading-relaxed">{project.problem}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span key={tool}
              className="px-3 py-1 text-xs font-medium bg-[#faf9f7] text-[#4b5563] rounded-full border border-[#e8e4de]">
              {tool}
            </span>
          ))}
        </div>

        {project.inProgress && (
          <div className="mt-auto mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                In Progress
              </span>
              <span className="text-xs font-medium text-[#6b7280]">{project.progress}%</span>
            </div>
            <div className="h-2 w-full bg-[#f0ece6] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#c9a84c] transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}

        <div className={`flex gap-3 ${project.inProgress ? '' : 'mt-auto'}`}>
          <a
            href={project.githubUrl || '#'}
            target={project.githubUrl ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={!project.githubUrl ? (e) => e.preventDefault() : undefined}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 ${
              project.githubUrl
                ? 'border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white'
                : 'border-[#e8e4de] text-[#9ca3af] cursor-not-allowed'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {project.githubUrl ? 'View Code' : 'Coming Soon'}
          </a>

          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-[#c9a84c] text-white hover:bg-[#b8943d] transition-all duration-200">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-section">

          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#c9a84c]" />
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">My Work</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight">Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
