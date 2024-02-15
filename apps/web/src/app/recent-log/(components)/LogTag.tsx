'use client';
import React from 'react';

interface LogTagProps {
  tag: string;
  isClickable?: boolean;
}

const LogTag = ({ tag, isClickable = false }: LogTagProps) => {
  return (
    <div
      className={`w-fit text-body1 bg-neutral-10 text-neutral-40 rounded-full py-[5px] px-[15px] ${isClickable && 'cursor-pointer'}`}
    >
      {`# ${tag}`}
    </div>
  );
};

export default LogTag;
