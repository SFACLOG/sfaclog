import React from 'react';
import Image from 'next/image';

interface CarouselArrowButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  size: number;
  alt: string;
}

const CarouselArrowButton = ({
  src,
  size,
  alt,
  ...props
}: CarouselArrowButton) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <Image src={src} alt={alt} width={size} height={size} />
    </button>
  );
};

export default CarouselArrowButton;
