import { Avatar } from '.';
import AVATAR from '/images/avatar.svg';

export default {
  title: 'ATOMS/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const Large = {
  args: {
    src: AVATAR,
    size: 'large',
  },
};

export const Medium = {
  args: {
    src: AVATAR,
    size: 'medium',
  },
};

export const Small = {
  args: {
    src: AVATAR,
    size: 'small',
  },
};

export const Tiny = {
  args: {
    src: AVATAR,
    size: 'tiny',
  },
};

export const All = () => (
  <div className='flex items-end gap-4'>
    <Avatar src={AVATAR} size='large' />
    <Avatar src={AVATAR} size='medium' />
    <Avatar src={AVATAR} size='small' />
    <Avatar src={AVATAR} size='tiny' />
  </div>
);
