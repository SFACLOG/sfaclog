import { ReactNode, useState, useEffect, useRef } from 'react';
import { SelectBoxOption } from '.';
import { cn } from '../../../utils';

export interface SelectSeriesBoxProps {
  children?: ReactNode;
  title: string;
}

export const SelectSeriesBox: React.FC<SelectSeriesBoxProps> = ({
  title,
}: SelectSeriesBoxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectBoxOption | null>(
    null,
  );
  const [isAddingSeries, setIsAddingSeries] = useState<boolean>(false);
  const [newSeriesText, setNewSeriesText] = useState<string>('');
  const [seriesList, setSeriesList] = useState<SelectBoxOption[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectBoxOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleRemoveOption = (
    event: React.MouseEvent<HTMLButtonElement>,
    option: SelectBoxOption,
  ) => {
    event.stopPropagation();
    setSeriesList(prev => {
      const updatedList = prev.filter(item => item !== option);
      setSelectedOption(null);
      return updatedList;
    });
  };

  const handleAddSeriesClick = () => {
    setIsAddingSeries(true);
  };

  const handleAddSeriesSubmit = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    if (newSeriesText.trim() !== '') {
      const newSeries: SelectBoxOption = {
        value: newSeriesText,
        label: newSeriesText,
      };
      setSeriesList([...seriesList, newSeries]);
      setIsAddingSeries(false);
      setNewSeriesText('');
    }
  };

  const handleCloseDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setIsAddingSeries(false);
      setNewSeriesText('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseDropdown);
    return () => {
      document.removeEventListener('click', handleCloseDropdown);
    };
  }, []);

  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center min-w-[300px] min-h-[42px] text-neutral-60 text-btn border border-netural-10 rounded-md text-center',
      )}
      ref={dropdownRef}
    >
      <div
        onClick={toggleDropdown}
        className={cn(
          'flex justify-between p-[10px] w-full cursor-pointer',
          selectedOption !== null && 'bg-primary-10',
        )}
      >
        <div
          className={cn(
            'mr-[5px] text-neutral-20',
            selectedOption && ' text-neutral-60',
          )}
        >
          {selectedOption !== null ? selectedOption.label : title}
        </div>
        {!isOpen ? (
          <img src='/images/ic_down_arrow.svg' alt='Dropdown Icon' />
        ) : (
          <img src='/images/ic_up_arrow.svg' alt='Dropdown Icon' />
        )}
      </div>
      {isOpen && (
        <div className='w-full'>
          {seriesList.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={cn('flex justify-between p-[10px] border-t-[1px]', {
                'bg-primary-10': selectedOption === option,
              })}
            >
              <div>{option.label}</div>
              <button
                className='w-[22px] h-[22px]'
                onClick={event => {
                  handleRemoveOption(event, option);
                }}
              >
                <img src='/images/ic_x.svg' alt='X Icon' />
              </button>
            </div>
          ))}
          {isAddingSeries && (
            <div className='flex justify-between p-[10px] border-t-[1px]'>
              <input
                type='text'
                value={newSeriesText}
                onChange={e => setNewSeriesText(e.target.value)}
              />
              <button onClick={handleAddSeriesSubmit}>
                <img src='/images/ic_plus.svg' alt='plus Icon' />
              </button>
            </div>
          )}

          <div
            onClick={handleAddSeriesClick}
            className='flex justify-between p-[10px] border-t-[1px] text-neutral-20 cursor-pointer'
          >
            + 시리즈 추가
          </div>
        </div>
      )}
    </div>
  );
};
