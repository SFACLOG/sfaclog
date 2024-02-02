import Link from 'next/link';
import React from 'react';

interface SectionTitleProps {
  title: string;
  linkText?: string;
  linkHref?: string;
}

const SectionHeader = ({ title, linkText, linkHref }: SectionTitleProps) => {
  return (
    <div className='flex justify-between items-center mb-[35px]'>
      <h2 className={`text-primary-100 text-h2`}>{title}</h2>
      {linkText && (
        <Link
          className='text-neutral-50 text-caption1'
          href={{ pathname: linkHref }}
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
