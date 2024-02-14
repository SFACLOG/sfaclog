'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils';
import ImageWrapper from '../../common/ImageWrapper';
import UP_ARROW_ICON from '../../../../public/images/ic_up_arrow.svg';
import DOWN_ARROW_ICON from '../../../../public/images/ic_down_arrow.svg';
import { IconChip } from '../../Chip';
import { usePathname } from 'next/navigation';

export interface SelectChipBoxOption {
  value: string;
  label: string;
}

export interface SelectChipBoxProps {
  children?: ReactNode;
  title: string;
  className?: string;
  onChange?: (selectedOption: SelectChipBoxOption[]) => void;
  defaultValue?: SelectChipBoxOption[];
}

export const chipoptions = [
  { value: '/images/chipIcon/javascript.svg', label: 'Javascript' },
  { value: '/images/chipIcon/django.svg', label: 'Django' },
  { value: '/images/chipIcon/figma.svg', label: 'Figma' },
  { value: '/images/chipIcon/flutter.svg', label: 'Flutter' },
  { value: '/images/chipIcon/git.svg', label: 'Git' },
  { value: '/images/chipIcon/java.svg', label: 'Java' },
  { value: '/images/chipIcon/kotlin.svg', label: 'Kotlin' },
  { value: '/images/chipIcon/mongodb.svg', label: 'MongoDB' },
  { value: '/images/chipIcon/mysql.svg', label: 'MySQL' },
  { value: '/images/chipIcon/nestjs.svg', label: 'Nestjs' },
  { value: '/images/chipIcon/nextjs.svg', label: 'Nextjs' },
  { value: '/images/chipIcon/nodejs.svg', label: 'Nodejs' },
  { value: '/images/chipIcon/react.svg', label: 'React' },
  { value: '/images/chipIcon/reactnative.svg', label: 'ReactNative' },
  { value: '/images/chipIcon/spring.svg', label: 'Spring' },
  { value: '/images/chipIcon/swift.svg', label: 'Swift' },
  { value: '/images/chipIcon/typescript.svg', label: 'TypeScript' },
  { value: '/images/chipIcon/vue.svg', label: 'Vue' },
  { value: '', label: '기타' },
];

export const SelectChipBox = ({
  className,
  title,
  onChange,
  defaultValue,
}: SelectChipBoxProps) => {
  useEffect(() => {
    if (onChange && defaultValue) {
      onChange(defaultValue);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectChipBoxOption[]>(
    defaultValue || [],
  );
  const [clickedChipIndexes, setClickedChipIndexes] = useState<number[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    const newClickedChipIndexes = selectedOptions.map(option =>
      chipoptions.findIndex(chip => chip.value === option.value),
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

  const handleOptionClick = (option: SelectChipBoxOption, index: number) => {
    const selectedIndex = selectedOptions.findIndex(
      selectedOption => selectedOption.value === option.value,
    );

    let updatedOptions: SelectChipBoxOption[];

    if (selectedIndex === -1) {
      updatedOptions = [...selectedOptions, option];
    } else {
      updatedOptions = selectedOptions.filter(
        selectedOption => selectedOption.value !== option.value,
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
        `inline-flex flex-col items-center min-w-[140px] min-h-[38px] text-neutral-60 text-btn border border-neutral-40 rounded-md text-center  ${isOpen && 'h-[320px] px-[52px]'}`,
        className,
      )}
    >
      {pathname !== '/project' ? (
        <div
          onClick={toggleDropdown}
          className={cn(`flex justify-between  items-center  p-[10px] w-full`)}
        >
          <div className={`text-center ${!isOpen && 'mx-auto'}`}>
            {isOpen
              ? selectedOptions.length > 0
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
                : title
              : selectedOptions.length > 0
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
      ) : (
        <div
          onClick={toggleDropdown}
          className={cn(
            `flex justify-center ${isOpen && 'justify-between'} items-center  py-[10.5px] w-full`,
            selectedOptions.length > 0 && ' text-primary-100',
          )}
        >
          <div className='mr-[15px] '>
            {isOpen
              ? selectedOptions.length > 0
                ? selectedOptions.map(option => option.label).join(', ')
                : title
              : selectedOptions.length > 0
                ? selectedOptions[0].label +
                  (selectedOptions.length > 1 ? ', ...' : '')
                : title}
          </div>

          {!isOpen ? (
            <ImageWrapper path={UP_ARROW_ICON} alt='Dropdown Icon' />
          ) : (
            <ImageWrapper path={DOWN_ARROW_ICON} alt='Dropdown Icon' />
          )}
        </div>
      )}
      {isOpen && (
        <div className='w-[665px] h-[225px] rounded-[5px]'>
          <div className='border border-b-1 border-neutral-50 mb-[15px] '></div>
          <div className='flex flex-wrap gap-5'>
            {chipoptions.map((option, index) => (
              <IconChip
                key={index}
                image={option.value}
                onClick={() => handleOptionClick(option, index)}
                isClicked={clickedChipIndexes.includes(index)}
              >
                {option.label}
              </IconChip>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
