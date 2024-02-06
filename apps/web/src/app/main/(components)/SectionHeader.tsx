import Link from 'next/link';
import React from 'react';

interface SectionTitleProps {
  title: string;
  expandText?: string;
  expandHref?: string;
}

const SectionHeader = ({
  title,
  expandText,
  expandHref,
}: SectionTitleProps) => {
  return (
    <div className='flex justify-between items-center'>
      <h2 className={`text-primary-100 text-h2`}>{title}</h2>
      {expandText && (
        <Link
          className='text-neutral-50 text-caption1'
          href={{ pathname: expandHref }}
        >
          {expandText}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
