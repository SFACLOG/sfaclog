import { Input } from '.';

export default {
  title: 'ATOMS/Button',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Button',
  },
};

export const Theme = () => (
  <>
    <Input theme='primary'>Button</Input>
    <Input>Button</Input>
  </>
);

export const Size = () => (
  <>
    <Input size='large'>Button</Input>
    <Input size='medium'>Button</Input>
    <Input size='small'>Button</Input>
  </>
);
