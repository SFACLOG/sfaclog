import { getPostByPostId } from '@/api/postDetail';
import React from 'react';
import MarkdownViewer from '../(components)/MarkdownViewer';
import LogHeader from '../(components)/LogHeader';
import AuthorProfile from '../(components)/AuthorProfile';

const RecentLogDetailPage = async ({ params }: { params: { id: string } }) => {
  const logData = await getPostByPostId(params.id);
  return (
    <div className='mx-auto container'>
      <h3 className='text-title1 py-[25px] border-b border-neutral-20'>
        blog title
      </h3>
      <LogHeader
        tags={logData.tags}
        title={logData.title}
        userId={logData.userId}
        nickname={logData.nickname}
        profileImage={logData.profileImage}
        likes={logData.likes}
        logId={params.id}
      />
      <MarkdownViewer source={logData.content} />
      <AuthorProfile
        userId={logData.userId}
        nickname={logData.nickname}
        profileImage={logData.profileImage}
        follower={logData.follower}
        following={logData.following}
      />
      <div>댓글</div>
    </div>
  );
};

export default RecentLogDetailPage;
