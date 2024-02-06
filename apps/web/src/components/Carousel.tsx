'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselArrowButton from './CarouselArrowButton';

interface CarouselProps {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  isPageButton?: boolean;
}

const Carousel = ({
  children,
  options,
  isPageButton = false,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [currentIdx, setCurrentIdx] = useState(0);
  const totalSlides = React.Children.count(children);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIdx(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className='relative'>
      <div
        className='overflow-hidden px-[22px] py-[27px] bg-[rgba(0,41,255,0.07)]'
        ref={emblaRef}
      >
        <div className={`flex`}>{children}</div>
      </div>
      {isPageButton ? (
        <div className='absolute flex px-[5px] py-2 gap-[21px] right-[7px] bottom-[9px] bg-white rounded-full items-center'>
          <CarouselArrowButton
            onClick={scrollPrev}
            src={'/images/ic_left_arrow.svg'}
            alt='prev'
            size={22}
          />
          {emblaApi && (
            <span className='text-neutral-60 text-title4'>
              {`${currentIdx + 1} | ${totalSlides}`}
            </span>
          )}
          <CarouselArrowButton
            onClick={scrollNext}
            src={'/images/ic_right_arrow.svg'}
            alt='next'
            size={22}
          />
        </div>
      ) : (
        <>
          <CarouselArrowButton
            className='absolute -left-16 top-[170px]'
            onClick={scrollPrev}
            src={'/images/main/prevButton.svg'}
            alt='prev'
            size={30}
          />
          <CarouselArrowButton
            className='absolute -right-16 top-[170px]'
            onClick={scrollNext}
            src={'/images/main/nextButton.svg'}
            alt='next'
            size={30}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
