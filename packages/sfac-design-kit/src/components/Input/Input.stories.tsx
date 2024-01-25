import { Input } from '.';

export default {
  title: 'ATOMS/Input',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {};

export const Theme = () => (
  <>
    <Input theme='primary' />
    <Input />
  </>
);

export const Size = () => (
  <>
    <Input size='large' />
    <Input size='medium' />
    <Input size='small' />
  </>
);
