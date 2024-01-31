import RoundButton from './RoundButton';

export default {
  title: 'ATOMS/RoundButton',
  component: RoundButton,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'RoundButton',
  },
};

export const Theme = () => (
  <>
    <RoundButton theme='primary'>RoundButton</RoundButton>
    <RoundButton theme='secondary'>RoundButton</RoundButton>
    <RoundButton theme='tertiary'>RoundButton</RoundButton>
    <RoundButton theme='disable'>RoundButton</RoundButton>
    <RoundButton theme='disableSecondary'>RoundButton</RoundButton>
  </>
);

export const Size = () => (
  <>
    <RoundButton size='xs'>RoundButton</RoundButton>
    <RoundButton size='sm'>RoundButton</RoundButton>
    <RoundButton size='md'>RoundButton</RoundButton>
    <RoundButton size='lg'>RoundButton</RoundButton>
  </>
);

export const HeadIcon = () => (
  <>
    <RoundButton headIcon='https://cdn.icon-icons.com/icons2/1639/PNG/512/12123eyes_109574.png'>
      RoundButton
    </RoundButton>
  </>
);
