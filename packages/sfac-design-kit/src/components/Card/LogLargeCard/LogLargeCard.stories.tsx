import { LogLargeCard } from '.';

export default {
  title: 'CARDS/LogLargeCard',
  component: LogLargeCard,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    thumbnail: './images/gray_box.svg',
    tags: ['AI', '커리어', '디지털 노마드'],
    title: 'api 와장창 호출하지 않는 법 (Feat. 디바운스)',
    summary: `당신이 개발자라면 디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것!\n\n디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것`,
    likes: 17,
    comments: 7,
  },
};

export const Sized = {
  args: {
    width: 'max-w-[780px]',
    thumbnail: './images/gray_box.svg',
    tags: ['AI', '커리어', '디지털 노마드'],
    title: 'api 와장창 호출하지 않는 법 (Feat. 디바운스)',
    summary: `당신이 개발자라면 디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것!\n\n디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것`,
    likes: 17,
    comments: 7,
  },
};

export const Clip = {
  args: {
    width: 'max-w-[400px]',
    thumbnail: './images/gray_box.svg',
    tags: ['AI', '커리어', '디지털 노마드'],
    title: 'api 와장창 호출하지 않는 법 (Feat. 디바운스)',
    summary: `당신이 개발자라면 디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것!\n\n디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것`,
    likes: 17,
    comments: 7,
  },
};

export const All = () => (
  <div className='flex flex-col gap-12'>
    <LogLargeCard
      thumbnail='./images/gray_box.svg'
      tags={['AI', '커리어', '디지털 노마드']}
      title='api 와장창 호출하지 않는 법 (Feat. 디바운스)'
      summary={`당신이 개발자라면 디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것!\n\n디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것`}
      likes={17}
      comments={7}
    />
    <LogLargeCard
      width='max-w-[780px]'
      thumbnail='./images/gray_box.svg'
      tags={['AI', '커리어', '디지털 노마드']}
      title='api 와장창 호출하지 않는 법 (Feat. 디바운스)'
      summary={`당신이 개발자라면 디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것!\n\n디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것`}
      likes={17}
      comments={7}
    />
    <LogLargeCard
      width='max-w-[400px]'
      thumbnail='./images/gray_box.svg'
      tags={['AI', '커리어', '디지털 노마드']}
      title='api 와장창 호출하지 않는 법 (Feat. 디바운스)'
      summary={`당신이 개발자라면 디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것!\n\n디바운스와 스로틀링에 대해 한 번쯤은 들어본 적이 있을 것이다 들어보지 못했다고? 그럼 지금부터 알아가면 되는 것`}
      likes={17}
      comments={7}
    />
  </div>
);
