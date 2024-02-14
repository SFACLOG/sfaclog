import Image from 'next/image';

const Footer = () => {
  return (
    <section className='w-full h-[380px] px-[calc((100%-1180px)/2)] py-[74px] bg-neutral-60'>
      <div className='flex gap-[22px] mb-[55px]'>
        <Image
          src='/images/sns/github.svg'
          width={45}
          height={45}
          alt='github'
        />
        <Image
          src='/images/sns/instagram.svg'
          width={45}
          height={45}
          alt='instagram'
        />
        <Image
          src='/images/sns/facebook.svg'
          width={45}
          height={45}
          alt='facebook'
        />
      </div>
      <article className='flex flex-col gap-[14px] text-body2 text-neutral-40'>
        <p className='text-body1 text-white'>인사이드아웃 사회적 협동조합</p>
        <div className='flex justify-between'>
          <p>
            고유번호: 324-82-00580 ⏐ 이사장: 염민호 (와이엠에스닷코) ⏐통신판매업
            신고번호: 2022-경기김포-3659
          </p>
          <span className='text-body1 text-white'>고객센터</span>
        </div>
        <div className='flex justify-between'>
          <p>
            주소: 서울특별시 강서구 마곡중앙2로 11, 3층 305호 (마곡동, M밸리 W
            TOWER III)
          </p>
          <span className='text-body1'>cs@sniperfactory.com</span>
        </div>
        <div className='flex justify-between'>
          <p>개인 정보 처리방침 ⏐ 서비스 이용약관 ⏐ 환불규정</p>
          <span className='text-body1'>연락처 : 050-6683-1001</span>
        </div>
      </article>
    </section>
  );
};

export default Footer;
