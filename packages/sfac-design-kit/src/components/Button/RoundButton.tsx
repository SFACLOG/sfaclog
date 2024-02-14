import React, { ButtonHTMLAttributes } from 'react';
import { Button as RDButton } from '@radix-ui/themes';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

export interface RoundButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof RoundButtonVariants> {
  children: React.ReactNode;
  headIcon?: string;
}

const RoundButtonVariants = cva(
  `flex justify-center items-center rounded-full gap-[5px]`,
  {
    variants: {
      size: {
        xs: 'px-[15px] py-[6.5px] text-sm font-semibold',
        sm: 'px-5 py-[11.5px] text-sm font-semibold',
        md: 'px-5 py-[15px] text-sm font-semibold',
        lg: 'px-[54px] py-[22px] text-xl font-semibold',
      },
      theme: {
        primary: 'text-white bg-primary-100',
        secondary: 'text-primary-100 border border-primary-100 box-border',
        tertiary: 'text-neutral-60 bg-neutral-10',
        disable: 'text-neutral-40 bg-neutral-10 cursor-default',
        disableSecondary:
          'text-neutral-40 bg-white-10 border border-neutral-20 cursor-default',
      },
    },
    defaultVariants: {
      size: 'sm',
      theme: 'primary',
    },
  },
);

const RoundButton = ({
  children,
  size,
  theme,
  headIcon,
  className,
  onClick,
}: RoundButtonProps) => {
  return (
    <RDButton
      className={cn(RoundButtonVariants({ size, theme }), className)}
      onClick={onClick}
    >
      {headIcon && <img src={headIcon} alt='icon' className='w-4 h-4' />}
      {children}
    </RDButton>
  );
};

export default RoundButton;
