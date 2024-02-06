import { useState } from 'react';
import { Chip, IconChip } from '.';

export default {
  title: 'ATOMS/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: '#tag',
  },
};

const [isClicked, setIsClicked] = useState<boolean>(false);

const handleClick = () => {
  setIsClicked(!isClicked);
};

export const ChipUseage = () => (
  <>
    <Chip>#UI/UX</Chip>
  </>
);

export const IconChipUseage = () => (
  <>
    <IconChip
      image='/images/chipIcon/react.svg'
      onClick={handleClick}
      isClicked={isClicked}
    >
      React
    </IconChip>
    <IconChip image='/images/chipIcon/java.svg'>Java</IconChip>
  </>
);
