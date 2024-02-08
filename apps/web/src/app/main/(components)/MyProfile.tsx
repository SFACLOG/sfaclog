import React from 'react';
import { Avatar, SquareButton } from 'sfac-design-kit';

const MyProfile = () => {
  return (
    <div>
      <div className='text-title3 mb-5'>내 프로필</div>
      <div className='flex justify-between w-[580px] px-[30px] py-6 border border-neutral-10 rounded-[20px]'>
        <div className='flex gap-5 items-center'>
          <Avatar
            className='w-[80px] h-[80px]'
            src='https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <div className='flex flex-col gap-[9px]'>
            <div className='text-title3'>차윤정</div>
            <div className='flex gap-8 text-caption1'>
              <div className='flex gap-[15px]'>
                <span>팔로워</span>
                <span>67</span>
              </div>
              <div className='flex gap-[15px]'>
                <span>팔로잉</span>
                <span>54</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[9px]'>
          <SquareButton
            theme={'secondary'}
            size={'sm'}
            className='w-40 px-3 font-semibold'
          >
            프로필 수정하기
          </SquareButton>
          <SquareButton
            theme={'secondary'}
            size={'sm'}
            className='w-40 px-3 font-semibold'
          >
            + 새 로그 작성
          </SquareButton>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
