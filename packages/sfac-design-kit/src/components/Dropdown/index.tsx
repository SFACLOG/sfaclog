import { ReactNode } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropDownProps {
  title: string;
  children: ReactNode;
  options: DropdownOption[];
}

export const DropDown = ({ title, options }: DropDownProps) => {
  return (
    <div className='mt-4'>
      <label className='block font-medium '>{title}</label>
      <select className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
