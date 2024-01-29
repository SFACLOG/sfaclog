import { Input } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Label',
    required: true,
    placeholder: 'placeholder',
    description: 'description',
    styles: 'w-96',
  },
};

export const Success = {
  args: {
    status: 'success',
    label: 'Label',
    required: true,
    placeholder: 'placeholder',
    description: 'description',
    styles: 'w-96',
  },
};

export const Error = {
  args: {
    status: 'error',
    label: 'Label',
    required: true,
    placeholder: 'placeholder',
    description: 'description',
    styles: 'w-96',
  },
};

export const All = () => (
  <div className='flex flex-col gap-4'>
    <Input placeholder='placeholder' />
    <Input placeholder='placeholder' label='Label + Input' />
    <Input placeholder='placeholder' label='Label + Required Input' required />
    <Input
      placeholder='placeholder'
      label='Label + Input + Description'
      description='description'
    />
  </div>
);
