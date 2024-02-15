'use client';
import React, { useState } from 'react';
import { Avatar, SquareButton } from 'sfac-design-kit';
import Image from 'next/image';
import { getUserId } from '@/api/user';
import { useGetUserById } from '@/hooks/useUserData';

interface User {
  name: string;
  avatar: string;
}

interface Comment {
  text: string;
  user: User;
  date: string;
  likes: number;
  subComments?: SubComment[];
}

interface SubComment {
  text: string;
  user: User;
  date: string;
}

const Comments = () => {
  const isUser = getUserId();
  const { data: userInfo } = useGetUserById(isUser);

  const [newComment, setNewComment] = useState<string>('');
  const [subComments, setSubComments] = useState<{ [key: number]: string }>({});
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyIndex, setReplyIndex] = useState<number | null>(null);
  const [showSubComments, setShowSubComments] = useState<{
    [key: number]: boolean;
  }>({});

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const comment: Comment = {
        text: newComment,
        user: {
          name: userInfo?.nickname,
          avatar: userInfo?.profile_image
            ? userInfo?.profile_image
            : '/images/project/avatar1.svg',
        },
        date: new Date().toLocaleDateString(),
        likes: 0,
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleSubCommentSubmit = (commentId: number) => {
    const subCommentText = subComments[commentId];
    if (subCommentText && subCommentText.trim() !== '') {
      const subComment: SubComment = {
        text: subCommentText,
        user: {
          name: userInfo?.nickname,
          avatar: userInfo?.profile_image
            ? userInfo?.profile_image
            : '/images/project/avatar1.svg',
        },
        date: new Date().toLocaleDateString(),
      };
      const updatedComments = comments.map((comment, index) =>
        index === commentId
          ? {
              ...comment,
              subComments: [...(comment.subComments || []), subComment],
            }
          : comment,
      );
      setComments(updatedComments);
      setSubComments({ ...subComments, [commentId]: '' });
    }
  };

  const toggleSubComments = (index: number) => {
    setShowSubComments({
      ...showSubComments,
      [index]: !showSubComments[index],
    });
  };

  const handleReplyToggle = (index: number) => {
    setReplyIndex(replyIndex === index ? null : index);
  };

  return (
    <div>
      <p className='text-h2 mb-10'>댓글({comments.length})</p>
      <div className='mb-[30px]'>
        <div className='mb-[15px]'>
          <div className='flex items-center text-subtitle text-neutral-100'>
            <Avatar
              size={'small'}
              src={
                userInfo?.profile_image
                  ? `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/_pb_users_auth_/${isUser}/${userInfo.profile_image}`
                  : '/images/project/avatar1.svg'
              }
              className='mr-5'
            />
            <p>{userInfo?.nickname}</p>
          </div>
        </div>
        <div className='flex flex-col items-end gap-[15px]'>
          <textarea
            placeholder='댓글을 작성하세요'
            className='bg-neutral-5 w-full h-[120px] p-[15px] max-h-[120px] overflow-y-auto text-body1 rounded-[10px] placeholder:text-neutral-100 '
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          <SquareButton
            theme={'disable'}
            className='text-btn text-neutral-50'
            onClick={handleCommentSubmit}
          >
            댓글 작성
          </SquareButton>
        </div>
      </div>

      {comments.map((comment, index) => (
        <div key={index} className='flex flex-col items-start gap-[25px]'>
          <div className='flex w-full justify-between items-center'>
            <div className='flex justify-center items-center gap-5'>
              <Avatar size={'small'} src='/images/project/avatar1.svg' />
              <p className='text-subtitle text-neutral-100'>
                {comment.user.name}
              </p>
              <p className='text-caption2 text-neutral-80'>{comment.date}</p>
            </div>
            <div className='flex items-end gap-[10px]'>
              <div className='flex items-end gap-[5px]'>
                <Image
                  src='/images/project/like.svg'
                  alt='like'
                  width={22}
                  height={22}
                  className='grayscale'
                />
                <p className='text-caption2 text-primary-100'>
                  {comment.likes}
                </p>
              </div>
              <p
                className='text-caption2 text-neutral-80 cursor-pointer'
                onClick={() => handleReplyToggle(index)}
              >
                답글달기
              </p>
            </div>
          </div>
          <p>{comment.text}</p>
          {replyIndex === index && (
            <div className='flex flex-col items-end gap-[15px] w-full'>
              <textarea
                placeholder='대댓글을 작성하세요'
                value={subComments[index] || ''}
                className='bg-neutral-5 w-full h-[120px] p-[15px] max-h-[120px] overflow-y-auto text-body1 rounded-[10px]'
                onChange={e =>
                  setSubComments({ ...subComments, [index]: e.target.value })
                }
              />
              <SquareButton
                theme={'disable'}
                className='text-btn text-neutral-50'
                onClick={() => {
                  handleSubCommentSubmit(index);
                  setReplyIndex(null);
                }}
              >
                대댓글 작성
              </SquareButton>
            </div>
          )}
          {comment.subComments && (
            <p
              className='text-caption2 text-neutral-80 cursor-pointer'
              onClick={() => toggleSubComments(index)}
            >
              {showSubComments[index]
                ? '답글 숨기기'
                : `${comment.subComments.length}개의 답글`}
            </p>
          )}
          {showSubComments[index] &&
            comment.subComments &&
            comment.subComments.map((subComment, subIndex) => (
              <div key={subIndex} className='ml-5'>
                <div className='flex items-center gap-5 mb-5'>
                  <Avatar size={'small'} src={subComment.user.avatar} />
                  <p className='text-subtitle text-neutral-100'>
                    {subComment.user.name}
                  </p>
                  <p className='text-caption2 text-neutral-80'>
                    {subComment.date}
                  </p>
                </div>
                <p>{subComment.text}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Comments;
