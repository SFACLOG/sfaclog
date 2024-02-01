import { ProfileCard } from '.';

export default {
  title: 'CARDS/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
};

export const My = {
  args: {
    avatar: '/images/avatar.svg',
    name: '닉네임',
    description: `개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`,
    following: 77,
    follower: 777,
    github: 'https://www.google.com/',
    instgram: 'https://www.google.com/',
    facebook: 'https://www.google.com/',
    isMine: true,
    onClickFollow: () => {},
    onClickEdit: () => {},
  },
};

export const Other = {
  args: {
    avatar: '/images/avatar.svg',
    name: '닉네임',
    description: `개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`,
    following: 77,
    follower: 777,
    github: 'https://www.google.com/',
    instgram: 'https://www.google.com/',
    facebook: 'https://www.google.com/',
    isMine: false,
    onClickFollow: () => {},
    onClickEdit: () => {},
  },
};

export const Sized = {
  args: {
    width: 780,
    avatar: '/images/avatar.svg',
    name: '닉네임',
    description: `개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`,
    following: 77,
    follower: 777,
    github: 'https://www.google.com/',
    instgram: 'https://www.google.com/',
    facebook: 'https://www.google.com/',
    isMine: false,
    onClickFollow: () => {},
    onClickEdit: () => {},
  },
};

export const Clip = {
  args: {
    width: 500,
    avatar: '/images/avatar.svg',
    name: '닉네임',
    description: `개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`,
    following: 77,
    follower: 777,
    github: 'https://www.google.com/',
    instgram: 'https://www.google.com/',
    facebook: 'https://www.google.com/',
    isMine: false,
    onClickFollow: () => {},
    onClickEdit: () => {},
  },
};

export const All = () => (
  <div className='flex flex-col gap-8'>
    <ProfileCard
      avatar={'/images/avatar.svg'}
      name={'닉네임'}
      description={`개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`}
      following={77}
      follower={777}
      github={'https://www.google.com/'}
      instgram={'https://www.google.com/'}
      facebook={'https://www.google.com/'}
      isMine={true}
      onClickFollow={() => {}}
      onClickEdit={() => {}}
    />
    <ProfileCard
      avatar={'/images/avatar.svg'}
      name={'닉네임'}
      description={`개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`}
      following={77}
      follower={777}
      github={'https://www.google.com/'}
      instgram={'https://www.google.com/'}
      facebook={'https://www.google.com/'}
      isMine={false}
      onClickFollow={() => {}}
      onClickEdit={() => {}}
    />
    <ProfileCard
      width={780}
      avatar={'/images/avatar.svg'}
      name={'닉네임'}
      description={`개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`}
      following={77}
      follower={777}
      github={'https://www.google.com/'}
      instgram={'https://www.google.com/'}
      facebook={'https://www.google.com/'}
      isMine={false}
      onClickFollow={() => {}}
      onClickEdit={() => {}}
    />
    <ProfileCard
      width={500}
      avatar={'/images/avatar.svg'}
      name={'닉네임'}
      description={`개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는 서비스를 만들고 싶습니다.\n\n[경력]\nFrontend Engineer (2017.03.01 ~ 현재)`}
      following={77}
      follower={777}
      github={'https://www.google.com/'}
      instgram={'https://www.google.com/'}
      facebook={'https://www.google.com/'}
      isMine={false}
      onClickFollow={() => {}}
      onClickEdit={() => {}}
    />
  </div>
);
