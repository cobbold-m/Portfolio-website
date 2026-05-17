import React from 'react';

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-1">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/30" />
      <div className="mx-3 w-1 h-1 rounded-full bg-[#c9a84c]/60" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/30" />
    </div>
  );
}

export default SectionDivider;
