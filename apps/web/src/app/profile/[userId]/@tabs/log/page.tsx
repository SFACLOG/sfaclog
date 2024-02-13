'use client';

import { usePathname } from 'next/navigation';
import { Children, useCallback, useEffect, useRef } from 'react';
import { LargeLogCard } from 'sfac-design-kit';
import { useGetPostsByUserId } from '@/hooks/usePostData';
import { Post } from '@/types/post';

const LogSection = () => {
  const observerRef = useRef(null);
  const pathname = usePathname();
  const {
    data: posts,
    hasNextPage,
    fetchNextPage,
  } = useGetPostsByUserId(pathname.split('/')[2]);

  const handleObserver = useCallback(
    ([entries]: IntersectionObserverEntry[]) => {
      if (entries.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(handleObserver);

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, handleObserver]);

  if (!posts) return;

  return (
    <section className='flex flex-col gap-[60px] max-w-[780px] mx-auto mt-10'>
      {Children.toArray(
        posts.pages.map((group: any) =>
          group.items.map((item: Post) => (
            <LargeLogCard
              thumbnail={`${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/post/${item.id}/${item.thumbnail}`}
              title={item.title}
              summary={item.content}
              comments={item.comments}
              likes={item.likes}
              tags={item.tag && Object.keys(item.tag)}
            />
          )),
        ),
      )}
      <div ref={observerRef}></div>
    </section>
  );
};

export default LogSection;
