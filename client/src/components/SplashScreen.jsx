import React, { useState, useEffect } from 'react';

function SplashScreen() {
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('visible'), 50);
    const t2 = setTimeout(() => setPhase('leaving'), 2300);
    const t3 = setTimeout(() => setPhase('done'), 2950);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === 'done') return null;

  const overlayVisible = phase === 'visible';
  const contentVisible = phase === 'visible';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: '#0d1825',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: overlayVisible ? 1 : 0,
        transition: 'opacity 0.65s ease',
        pointerEvents: phase === 'leaving' ? 'none' : 'all',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s',
        }}
      >
        {/* Decorative gold rule */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '22px' }}>
          <div style={{ width: '48px', height: '1px', background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#c9a84c', opacity: 0.7 }} />
          <div style={{ width: '48px', height: '1px', background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
        </div>

        {/* Name label */}
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#c9a84c',
          fontWeight: 600,
          marginBottom: '18px',
          fontFamily: 'inherit',
        }}>
          Adjoba Mushia Cobbold
        </p>

        {/* Main welcome text */}
        <h1 style={{
          fontSize: 'clamp(26px, 4.5vw, 46px)',
          fontWeight: 300,
          color: '#ffffff',
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          fontFamily: 'inherit',
          margin: 0,
        }}>
          Welcome to my Portfolio
        </h1>
      </div>
    </div>
  );
}

export default SplashScreen;
