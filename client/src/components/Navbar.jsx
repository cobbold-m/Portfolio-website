import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-[#1a2a40] via-[#1e3a5f] to-[#162d4a] shadow-lg shadow-[#0d1825]/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className={`font-bold text-lg tracking-tight transition-colors duration-200 ${
              scrolled ? 'text-white hover:text-[#c9a84c]' : 'text-[#1e3a5f] hover:text-[#c9a84c]'
            }`}
          >
            Adjoba Mushia Cobbold
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  scrolled ? 'text-white/80 hover:text-white' : 'text-[#4b5563] hover:text-[#1e3a5f]'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#c9a84c] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`ml-2 px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 shadow-sm ${
                scrolled
                  ? 'bg-[#c9a84c] text-[#1a2332] hover:bg-[#d4b05a]'
                  : 'bg-[#1e3a5f] text-white hover:bg-[#2a4f7f]'
              }`}
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled ? 'bg-white' : 'bg-[#1e3a5f]'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled ? 'bg-white' : 'bg-[#1e3a5f]'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled ? 'bg-white' : 'bg-[#1e3a5f]'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        } ${scrolled ? 'bg-gradient-to-b from-[#1e3a5f] to-[#162d4a] border-t border-white/10' : 'bg-white border-t border-[#e8e4de]'} shadow-lg`}
      >
        <div className="px-4 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-white/80 hover:text-white' : 'text-[#4b5563] hover:text-[#1e3a5f]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`w-fit px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              scrolled
                ? 'bg-[#c9a84c] text-[#1a2332] hover:bg-[#d4b05a]'
                : 'bg-[#1e3a5f] text-white hover:bg-[#2a4f7f]'
            }`}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
