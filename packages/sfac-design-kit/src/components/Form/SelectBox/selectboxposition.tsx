'use client';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils';
import ImageWrapper from '../../common/ImageWrapper';
import UP_ARROW_ICON from '../../../../public/images/ic_up_arrow.svg';
import DOWN_ARROW_ICON from '../../../../public/images/ic_down_arrow.svg';

export interface SelectBoxPostionOption {
  value: string;
  label: string;
}

export interface SelectBoxPositionProps {
  options: SelectBoxPostionOption[];
  title: string;
  className?: string;
  onChange?: (selectedOption: SelectBoxPostionOption[]) => void;
  defaultValue?: SelectBoxPostionOption[];
}
const positions = [
  { label: '프론트엔드', value: '프론트엔드' },
  { label: '백엔드', value: '백엔드' },
  { label: '디자이너', value: '디자이너' },
  { label: 'IOS', value: 'IOS' },
  { label: 'Android', value: 'Android' },
  { label: '데브옵스', value: '데브옵스' },
];

export const SelectBoxPosition = ({
  className,
  options,
  title,
  onChange,
  defaultValue,
}: SelectBoxPositionProps) => {
  useEffect(() => {
    if (onChange && defaultValue) {
      onChange(defaultValue);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<
    SelectBoxPostionOption[]
  >(defaultValue || []);
  const [clickedChipIndexes, setClickedChipIndexes] = useState<number[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const newClickedChipIndexes = selectedOptions.map(option =>
      positions.findIndex(chip => chip.label === option.label),
    );
    setClickedChipIndexes(newClickedChipIndexes);
  }, [selectedOptions]);

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

  const handleOptionClick = (option: SelectBoxPostionOption, index: number) => {
    const selectedIndex = selectedOptions.findIndex(
      selectedOption => selectedOption.label === option.label,
    );
    let updatedOptions: SelectBoxPostionOption[];

    if (selectedIndex === -1) {
      updatedOptions = [...selectedOptions, option];
    } else {
      updatedOptions = selectedOptions.filter(
        selectedOption => selectedOption.label !== option.label,
      );
    }

    setSelectedOptions(updatedOptions);

    const isClicked = clickedChipIndexes.includes(index);
    const updatedClickedChipIndexes = isClicked
      ? clickedChipIndexes.filter(clickedIndex => clickedIndex !== index)
      : [...clickedChipIndexes, index];
    setClickedChipIndexes(updatedClickedChipIndexes);

    if (onChange) {
      onChange(updatedOptions);
    }
  };

  const handleDeleteOption = (index: number) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);

    const updatedClickedChipIndexes = [...clickedChipIndexes];
    updatedClickedChipIndexes.splice(index, 1);
    setClickedChipIndexes(updatedClickedChipIndexes);

    if (onChange) {
      onChange(updatedOptions);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={cn(
        `inline-flex flex-col items-center justify-center min-w-[140px] min-h-[42px] text-neutral-60 text-btn border border-neutral-40  rounded-md text-center  relative`,
        className,
      )}
    >
      <div
        onClick={toggleDropdown}
        className={cn(
          'inline-flex justify-between items-center p-[10px] w-full ',

          className,
        )}
      >
        <div className='text-center mx-auto'>
          {selectedOptions.length > 0
            ? selectedOptions.map((option, index) => (
                <span
                  key={index}
                  className=' inline-flex items-center mr-2 mb-2 bg-neutral-20 p-1'
                >
                  {option.label}
                  <button
                    className='h-[14px] w-[14px] text-[12px] flex items-center justify-center ml-2'
                    onClick={e => {
                      e.stopPropagation();
                      handleDeleteOption(index);
                    }}
                  >
                    X
                  </button>
                </span>
              ))
            : title}
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
              onClick={() => handleOptionClick(option, index)}
              className={cn('py-[10.5px] border border-netural-40')}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
