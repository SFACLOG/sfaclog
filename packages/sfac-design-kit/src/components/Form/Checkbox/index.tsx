import { cn } from '@/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputStyles?: string;
  labelStyles?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, inputStyles, labelStyles, ...rest }, ref) => (
    <div className='flex items-center gap-[10px]'>
      <input
        id={label}
        className={cn('cursor-pointer', inputStyles)}
        type='checkbox'
        ref={ref}
        {...rest}
      />
      {label && (
        <label
          className={cn('text-xs text-neutral-60 cursor-pointer', labelStyles)}
          htmlFor={label}
        >
          {label}
        </label>
      )}
    </div>
  ),
);
