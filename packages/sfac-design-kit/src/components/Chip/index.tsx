import { useState, ReactNode } from 'react';
import { cn } from '../../utils';

export interface ChipProps {
  image?: string;
  children: ReactNode;
}

export const Chip = ({ children }: ChipProps) => {
  return (
    <div
      className={cn(
        ' inline-block px-[15px] py-[5px] bg-primary-5 text-neutral-100 rounded-[30px] text-tag',
      )}
    >
      {children}
    </div>
  );
};

export const IconChip = ({ children, image }: ChipProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={cn(
        'inline-flex justify-center items-center px-[15px] py-[6px] text-neutral-100 rounded-[34px] border border-neutral-40 text-btn',
        isClicked && 'opacity-50',
      )}
      onClick={handleClick}
    >
      <img src={image} width={30} height={30} className='mr-[6.5px]' />
      {children}
    </div>
  );
};
