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

export const ChipUseage = () => (
  <>
    <Chip>#UI/UX</Chip>
  </>
);

export const IconChipUseage = () => (
  <>
    <IconChip image='/images/chipIcon/react.svg'>React</IconChip>
    <IconChip image='/images/chipIcon/java.svg'>Java</IconChip>
  </>
);
