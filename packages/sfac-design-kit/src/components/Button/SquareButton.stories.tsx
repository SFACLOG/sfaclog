import SquareButton from './SquareButton';

export default {
  title: 'ATOMS/SquareButton',
  component: SquareButton,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'SquareButton',
  },
};

export const Theme = () => (
  <>
    <SquareButton>SquareButton</SquareButton>
    <SquareButton theme='disable'>SquareButton</SquareButton>
  </>
);

export const Size = () => (
  <>
    <SquareButton size='sm'>SquareButton</SquareButton>
    <SquareButton size='md'>SquareButton</SquareButton>
    <SquareButton size='lg'>SquareButton</SquareButton>
  </>
);

export const FullWidth = () => (
  <>
    <SquareButton fullWidth={false}>SquareButton</SquareButton>
    <SquareButton fullWidth={true}>SquareButton</SquareButton>
  </>
);

export const HeadIcon = () => (
  <>
    <SquareButton
      headIcon={'https://cdn-icons-png.flaticon.com/512/2111/2111466.png'}
    >
      SquareButton
    </SquareButton>
  </>
);
