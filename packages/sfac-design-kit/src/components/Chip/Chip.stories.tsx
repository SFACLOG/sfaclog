import React, { useState } from 'react';
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

export const ChipUseage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Chip onClick={handleClick}>#UI/UX</Chip>
    </>
  );
};

export const IconChipUseage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
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
};
