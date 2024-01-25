import { Input } from '.';

export default {
  title: 'ATOMS/Input',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Input',
  },
};

export const Theme = () => (
  <>
    <Input theme='primary'>Input</Input>
    <Input>Input</Input>
  </>
);

export const Size = () => (
  <>
    <Input size='large'>Input</Input>
    <Input size='medium'>Input</Input>
    <Input size='small'>Input</Input>
  </>
);
