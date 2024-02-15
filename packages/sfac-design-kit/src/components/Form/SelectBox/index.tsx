'use client';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils';
import ImageWrapper from '../../common/ImageWrapper';
import UP_ARROW_ICON from '../../../../public/images/ic_up_arrow.svg';
import DOWN_ARROW_ICON from '../../../../public/images/ic_down_arrow.svg';
export interface SelectBoxOption {
  value: string;
  label: string;
}

export interface SelectBoxProps {
  options: SelectBoxOption[];
  title: string;
  className?: string;
  onChange?: (selectedOption: SelectBoxOption) => void;
  defaultValue?: SelectBoxOption;
}

export const SelectBox = ({
  className,
  options,
  title,
  onChange,
  defaultValue,
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectBoxOption | null>(
    defaultValue || null,
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onChange && defaultValue) {
      onChange(defaultValue);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectBoxOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={cn(
        ` inline-flex items-center justify-center min-w-[140px] min-h-[38px] text-neutral-60 text-btn border border-neutral-40  rounded-md text-center ${selectedOption && 'border-primary-100'} relative`,
        className,
      )}
    >
      <div
        onClick={toggleDropdown}
        className={cn(
          'flex justify-between items-center p-[10px] w-full',
          selectedOption && ' text-primary-100',
        )}
      >
        <div className=' text-center mx-auto'>
          {selectedOption ? selectedOption.label : title}
        </div>
        {!isOpen ? (
          <ImageWrapper path={UP_ARROW_ICON} alt='Dropdown Icon' />
        ) : (
          <ImageWrapper path={DOWN_ARROW_ICON} alt='Dropdown Icon' />
        )}
      </div>
      {isOpen && (
        <div className='w-full absolute top-[103%] left-0 z-50 bg-white border  border-netural-40'>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={cn('py-[10.5px] border border-netural-40', {
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

export default SelectBox;
