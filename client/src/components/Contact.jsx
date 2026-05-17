import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';

const INITIAL_FORM = { name: '', email: '', message: '' };

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_bntrl4v';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uw5adcb';
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '3ThcvKnDzgbOzO0H0';

function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          reply_to:   form.email,
        },
        PUBLIC_KEY
      );
      console.log('[EmailJS] Success:', result.status, result.text);
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      const reason = err?.text || err?.message || `status ${err?.status}` || 'Unknown error';
      setStatus('error');
      setErrorMsg(`Send failed: ${reason}. Please email ajobamushia@gmail.com directly.`);
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-[#d6d0c8] bg-white text-[#1a2332] text-sm placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40 focus:border-[#c9a84c] transition-all duration-200';

  const contactLinks = [
    {
      href: 'mailto:ajobamushia@gmail.com',
      label: 'ajobamushia@gmail.com',
      icon: (
        <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/in/adjoba-cobbold/',
      label: 'linkedin.com/in/adjoba-cobbold',
      external: true,
      icon: (
        <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      href: 'https://github.com/cobbold-m',
      label: 'github.com/cobbold-m',
      external: true,
      icon: (
        <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-section">

          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#1e3a5f] to-[#c9a84c]" />
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight">Contact Me</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl">

            {/* Left — info */}
            <div className="space-y-7">
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3">Let's connect</h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">
                  I'm open to full-time opportunities, freelance data projects, and collaborative work
                  in finance, fintech and data analytics. Drop me a message and I'll reply within 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-sm text-[#4b5563] hover:text-[#1e3a5f] transition-colors duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#fef9ec] border border-[#e8d5a0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#fdf2d0] transition-colors duration-200">
                      {link.icon}
                    </div>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[#15803d] mb-1">Message Sent!</h3>
                  <p className="text-sm text-[#166534]">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-5 text-sm text-[#c9a84c] hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1a2332] mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Kwaku Baron"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1a2332] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="kwakub@example.com"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1a2332] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message" name="message" rows={5} required
                      value={form.message} onChange={handleChange}
                      placeholder="Tell me about the role or project..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="px-4 py-3 rounded-xl bg-[#fef2f2] border border-[#fecaca] text-sm text-[#dc2626]">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3.5 bg-[#1e3a5f] text-white text-sm font-semibold rounded-full hover:bg-[#2a4f7f] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
