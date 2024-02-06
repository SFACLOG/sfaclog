'use client';
import React, { useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import UseEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface CarouselProps {
  children: React.ReactNode;
  options?: EmblaOptionsType;
}

const Carousel = ({ children, options }: CarouselProps) => {
  const [emblaRef, emblaApi] = UseEmblaCarousel(options);

  const handlePrevAndNext = useCallback(
    (direction: 'prev' | 'next') => {
      if (emblaApi) {
        if (direction === 'prev') {
          emblaApi.scrollPrev();
        } else if (direction === 'next') {
          emblaApi.scrollNext();
        }
      }
    },
    [emblaApi],
  );

  return (
    <div className='relative'>
      <button
        className='absolute top-[170px] left-1/2 transform -translate-x-1/2'
        onClick={() => handlePrevAndNext('prev')}
      >
        <Image
          src='/images/ic_left_arrow.svg'
          alt='prev'
          width={30}
          height={30}
        />
      </button>
      <div
        className='overflow-hidden px-[22px] py-[27px] bg-[rgba(0,41,255,0.07)]'
        ref={emblaRef}
      >
        <div className='flex gap-[25px]'>{children}</div>
      </div>
      <button
        className='absolute right-0 top-[170px]'
        onClick={() => handlePrevAndNext('next')}
      >
        <Image
          src='/images/ic_right_arrow.svg'
          alt='prev'
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default Carousel;
