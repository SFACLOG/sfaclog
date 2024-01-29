import { DropDown } from '.';

export default {
  title: 'ATOMS/DropDown',
  component: DropDown,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Button',
  },
};

const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
];

export const Theme = () => (
  <>
    <DropDown title='여기드롭' options={options}>
      DropDown
    </DropDown>
  </>
);
