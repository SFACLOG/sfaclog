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
        'inline-flex flex-col items-center justify-center min-w-[140px] min-h-[38px] text-neutral-60 text-btn border border-netural-10 rounded-md text-center bg-white',
        selectedOption && 'bg-primary-10',
        className,
      )}
    >
      <div
        onClick={toggleDropdown}
        className={cn(
          'flex items-center justify-center  py-auto w-full min-h-[38px]',
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
