import React from 'react';

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
      <div className="mx-3 w-1.5 h-1.5 rounded-full bg-[#c9a84c] opacity-75" />
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
    </div>
  );
}

export default SectionDivider;
