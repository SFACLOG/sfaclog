import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '../../utils';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  isClicked?: boolean;
  children: ReactNode;
}

export const Chip = ({ children }: ChipProps) => {
  return (
    <div
      className={cn(
        ' inline-block px-[15px] py-[5px] bg-primary-10 text-neutral-100 rounded-[30px] text-tag',
      )}
    >
      {children}
    </div>
  );
};

export const IconChip = ({
  children,
  image,
  isClicked,
  ...rest
}: ChipProps) => {
  return (
    <div
      className={cn(
        'inline-flex justify-center items-center px-[15px] py-[6px] text-neutral-100 rounded-[34px] border border-neutral-40 text-btn',
        isClicked && 'opacity-50',
      )}
      {...rest}
    >
      <img src={image} width={30} height={30} className='mr-[6.5px]' />
      {children}
    </div>
  );
};
