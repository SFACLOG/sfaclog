import { Button, RDTestButton } from '.';

export default {
  title: 'ATOMS/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Button',
  },
};

export const Theme = () => (
  <>
    <Button theme='primary'>Button</Button>
    <Button>Button</Button>
  </>
);

export const Size = () => (
  <>
    <Button size='large'>Button</Button>
    <Button size='medium'>Button</Button>
    <Button size='small'>Button</Button>
  </>
);

export const RadixTest = () => (
  <>
    <RDTestButton />
  </>
);
