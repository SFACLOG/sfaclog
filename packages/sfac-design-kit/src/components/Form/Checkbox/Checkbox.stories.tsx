import { useRef, useState } from 'react';
import { Checkbox } from '.';

export default {
  title: 'FORMS/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export const Checked = {
  args: {
    label: 'Label',
    checked: true,
  },
};

export const Unchecked = {
  args: {
    label: 'Label',
    checked: false,
  },
};

export const All = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox label='label1' />
      <Checkbox label='label2' defaultChecked />
    </div>
  );
};

export const Test = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    if (inputRef.current) {
      setIsChecked(inputRef.current.checked);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <Checkbox label='test' ref={inputRef} onChange={toggleCheckbox} />
      <div>checked: {String(isChecked)}</div>
    </div>
  );
};
