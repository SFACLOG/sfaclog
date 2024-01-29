import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button as RDButton } from '@radix-ui/themes';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: ReactNode;
}

const ButtonVariants = cva(``, {
  variants: {
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-6',
      large: 'text-lg py-3 px-6',
    },
    theme: {
      primary: 'text-blue-500 border border-blue-500 hover:bg-blue-300',
      neutral: 'text-gray-400 border border-gray-400 hover:bg-gray-500',
    },
  },
  defaultVariants: {
    size: 'small',
    theme: 'primary',
  },
});

export const Button = ({ children, size, theme }: ButtonProps) => {
  return (
    <RDButton className={cn(ButtonVariants({ size, theme }))}>
      {children}
    </RDButton>
  );
};
