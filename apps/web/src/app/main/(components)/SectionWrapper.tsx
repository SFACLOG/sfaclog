import React from 'react';
import SectionHeader from './SectionHeader';

export interface SectionWrapperProps {
  title: string;
  headerExpandText?: string;
  headerExpandHref?: string;
  children: React.ReactNode;
  isCarousel?: boolean;
}
const SectionWrapper = ({
  title,
  headerExpandText,
  headerExpandHref,
  children,
  isCarousel = false,
}: SectionWrapperProps) => {
  return (
    <div className='flex flex-col gap-[35px]'>
      <SectionHeader
        title={title}
        expandText={headerExpandText}
        expandHref={headerExpandHref}
      />
      <section
        className={!isCarousel ? 'flex justify-between items-center' : ''}
      >
        {children}
      </section>
    </div>
  );
};

export default SectionWrapper;
