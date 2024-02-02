'use client';
import { ReactNode, useState } from 'react';
import { cn } from '../../../utils';

export interface SelectBoxOption {
  value: string;
  label: string;
}

export interface SelectBoxProps {
  children?: ReactNode;
  title: string;
  options: SelectBoxOption[];
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  title,
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectBoxOption | null>(
    null,
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectBoxOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center min-w-[140px] min-h-[38px] text-neutral-60 text-btn border border-netural-10 rounded-md text-center',
      )}
    >
      <div
        onClick={toggleDropdown}
        className={cn(
          'flex justify-center py-[10.5px] w-full',
          selectedOption && 'bg-primary-10',
        )}
      >
        <div className='mr-[5px]'>
          {selectedOption ? selectedOption.label : title}
        </div>
        {!isOpen ? (
          <img src='/images/ic_down_arrow.svg' alt='Dropdown Icon' />
        ) : (
          <img src='/images/ic_up_arrow.svg' alt='Dropdown Icon' />
        )}
      </div>
      {isOpen && (
        <div className='w-full'>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={cn('py-[10.5px] border-t-[1px]', {
                'bg-primary-10': selectedOption === option,
              })}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
