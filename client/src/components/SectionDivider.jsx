import React from 'react';

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#bfdbfe]" />
      <div className="mx-3 w-1.5 h-1.5 rounded-full bg-[#3b82f6] opacity-60" />
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#bfdbfe]" />
    </div>
  );
}

export default SectionDivider;
