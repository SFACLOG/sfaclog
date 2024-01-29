import { forwardRef, InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  styles?: string;
  description?: string;
}

const inputVariants = cva(
  `w-full px-6 py-4 text-caption2 border rounded-[5px] placeholder:text-neutral-20`,
  {
    variants: {
      status: {
        normal: 'text-neutral-80 border-neutral-20',
        success:
          'text-system-success border-system-success placeholder:text-system-success',
        error:
          'text-system-warning border-system-warning placeholder:text-system-warning',
      },
    },
    defaultVariants: {
      status: 'normal',
    },
  },
);

const descriptionVariants = cva(`text-xs border-none`, {
  variants: {
    status: {
      normal: 'text-neutral-80',
      success: 'text-system-success',
      error: 'text-system-warning',
    },
    defaultVariants: {
      status: 'normal',
    },
  },
});

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ status, label, required, styles, description, ...rest }, ref) => {
    return (
      <div className='flex flex-col gap-[10px]'>
        {label && (
          <label htmlFor={`${label}`} className='text-title4'>
            {label}
            {required && <span className='text-primary-100 font-bold'> *</span>}
          </label>
        )}
        <input
          id={`${label}`}
          className={cn(inputVariants({ status }), styles)}
          ref={ref}
          {...rest}
        />
        {description && (
          <div className={cn(descriptionVariants({ status }))}>
            <span>* </span>
            {description}
          </div>
        )}
      </div>
    );
  },
);
