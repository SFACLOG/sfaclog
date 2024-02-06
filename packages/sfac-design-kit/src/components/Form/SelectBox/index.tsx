'use client';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { cn } from '../../../utils';
import ImageWrapper from '../../common/ImageWrapper';
import UP_ARROW_ICON from '../../../../public/images/ic_up_arrow.svg';
import DOWN_ARROW_ICON from '../../../../public/images/ic_down_arrow.svg';

export interface SelectBoxOption {
  value: string;
  label: string;
}

export interface SelectBoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title: string;
  options: SelectBoxOption[];
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  className,
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
        `inline-flex flex-col items-center justify-center min-w-[140px] min-h-[38px] text-neutral-60 text-btn border border-netural-10 rounded-md text-center ${selectedOption && 'border-primary-100'} relative`,
        className,
      )}
    >
      <div
        onClick={toggleDropdown}
        className={cn(
          'flex justify-center items-center py-[10.5px] w-full',
          selectedOption && ' text-primary-100',
        )}
      >
        <div className='mr-[5px]'>
          {selectedOption ? selectedOption.label : title}
        </div>
        {!isOpen ? (
          <ImageWrapper path={UP_ARROW_ICON} alt='Dropdown Icon' />
        ) : (
          <ImageWrapper path={DOWN_ARROW_ICON} alt='Dropdown Icon' />
        )}
      </div>
      {isOpen && (
        <div className='w-full absolute top-[103%] left-0 z-50 bg-white border '>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={cn('py-[10.5px] border-t-[1px]', {
                ' text-primary-100': selectedOption === option,
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
