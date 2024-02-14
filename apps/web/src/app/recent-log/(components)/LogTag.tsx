import React from 'react';

const LogTag = ({ tag }: { tag: string }) => {
  return (
    <div className='w-fit text-body1 bg-neutral-10 text-neutral-40 rounded-full py-[5px] px-[15px]'>
      {`# ${tag}`}
    </div>
  );
};

export default LogTag;
