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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1e3a5f] ${
        scrolled ? 'shadow-lg shadow-[#1e3a5f]/20' : ''
      }`}
    >
      {/* Thin accent line at very top */}
      <div className="h-0.5 bg-gradient-to-r from-[#1e3a5f] via-[#3b82f6] to-[#1e3a5f]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-white font-bold text-lg tracking-tight hover:text-[#60a5fa] transition-colors duration-200"
          >
            Adjoba Mushia Cobbold
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-blue-100 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#60a5fa] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 px-4 py-2 border border-[#60a5fa] text-[#60a5fa] text-sm font-medium rounded-lg hover:bg-[#60a5fa] hover:text-[#1e3a5f] transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        } bg-[#152b47] border-t border-[#2a4f7f]`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-blue-100 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-fit px-4 py-2 border border-[#60a5fa] text-[#60a5fa] text-sm font-medium rounded-lg hover:bg-[#60a5fa] hover:text-[#1e3a5f] transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
