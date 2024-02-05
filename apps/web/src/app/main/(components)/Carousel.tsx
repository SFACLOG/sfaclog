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

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className='relative'>
      <button className='absolute -left-16 top-[170px]' onClick={scrollPrev}>
        <Image
          src={'/images/main/prevButton.svg'}
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
      <button className='absolute -right-16 top-[170px]' onClick={scrollNext}>
        <Image
          src={'/images/main/nextButton.svg'}
          alt='prev'
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default Carousel;
