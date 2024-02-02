import { DevCard } from '.';

export default {
  title: 'CARDS/DevCard',
  component: DevCard,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    thumbnail: '/images/gray_box.svg',
    icons: ['/images/chipIcon/figma.svg', 'images/chipIcon/react.svg'],
    title: '아에이오우아에이오우아에이오우',
    time: '3일전',
    likes: 680,
    src: '/images/avatar.svg',
    name: 'dion',
    tags: ['# AI', '# 커리어', '# 디지털노마드'],
  },
};
