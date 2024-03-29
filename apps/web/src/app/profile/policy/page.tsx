'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Policy = () => {
  const router = useRouter();

  return (
    <main className='relative max-w-[729px] mx-auto bg-white rounded-[40px]'>
      <div className='relative flex flex-col items-center gap-[55px] px-[100px] py-[60px] '>
        <button
          className='absolute top-[61px] left-[100px] px-2'
          onClick={() => router.back()}
        >
          <Image
            src='/images/left_arrow.svg'
            width={15}
            height={28}
            alt='back'
          />
        </button>
        <h2 className='self-center text-h2'>이용약관&개인정보처리방침</h2>
        <section>
          <p className='mb-[15px] font-semibold'>서비스 이용약관</p>
          <article className='h-[415px] px-[16px] py-5 border border-neutral-40 text-caption1 text-neutral-60 whitespace-pre-wrap overflow-y-auto'>
            {`[스팩로그 이용약관]

제1조 (목적)
 1. 본 약관은 [스팩로그]가 제공하는 블로그 서비스(이하 "서비스")의 이용과 관련하여 [스팩로그]와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
제2조 (용어의 정의)
 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
   · 1.1 "서비스": [스팩로그]가 제공하는 블로그 플랫폼 및 관련 서비스를 의미합니다.
   · 1.2 "이용자": 서비스를 이용하는 개인 또는 단체를 의미합니다.
   · 1.3 "회원": 서비스에 가입하여 [스팩로그]와 이용계약을 체결한 자를 의미합니다.
   · 1.4 "게시물": 이용자가 서비스를 통해 게시, 등록한 부호, 문자, 음성, 음향, 영상 등의 정보를 의미합니다.
제3조 (이용 계약의 체결)
 1. 서비스 이용 계약은 이용자가 본 약관에 동의하고, [스팩로그]의 회원 가입 양식을 작성하여 제출함으로써 체결됩니다.
 2. 이용자는 본 약관에 동의함과 동시에 [스팩로그]의 개인정보처리방침에도 동의한 것으로 간주됩니다.
제4조 (서비스의 제공 및 변경)
 1. [스팩로그]는 이용자에게 블로그 플랫폼 및 관련 서비스를 제공합니다. 서비스의 내용은 [스팩로그]의 정책에 따라 추가, 변경, 중단될 수 있습니다.
 [스팩로그]는 서비스의 변경 및 중단으로 발생하는 손해에 대하여 어떠한 책임도 부담하지 않습니다.
제5조 (이용자의 계정 및 정보 관리)
이용자는 서비스 가입 시 개인정보를 성실하게 입력하여야 합니다. 부정확한 정보 입력으로 발생하는 문제에 대한 책임은 이용자 본인에게 있습니다.
이용자는 자신의 계정 정보를 안전하게 관리해야 하며, 제3자에게 계정을 사용하게 할 경우 [스팩로그]는 이에 대한 책임을 지지 않습니다.
제6조 (게시물의 관리)
이용자가 작성한 게시물은 당해 이용자의 책임하에 관리되며, [스팩로그]는 게시물의 내용이 법률이나 이 약관에 위배되는 경우에는 해당 게시물을 삭제할 수 있습니다.
이용자가 작성한 게시물로 인해 발생한 법적 책임은 해당 이용자 본인에게 있으며, [스팩로그]는 이에 대한 어떠한 책임도 부담하지 않습니다.
제7조 (서비스 이용 제한 및 중지)
[스팩로그]는 이용자가 본 약관에 위배되거나 법령을 위반한 경우, 서비스 이용을 제한하거나 중지할 수 있습니다.
이용자는 [스팩로그]의 서비스 이용을 중지하고자 하는 경우에는 [스팩로그]에게 이를 요청할 수 있습니다.
제8조 (서비스 이용료)
[스팩로그]는 기본적으로 서비스 이용에 대한 이용료를 부과하지 않습니다. 다만, 향후 추가적인 유료 서비스가 제공될 경우 별도의 이용료가 부과될 수 있습니다.
유료 서비스 이용 시에는 이용자에게 사전 고지하고 해당 서비스의 이용료에 대한 결제 방법을 안내합니다.
제9조 (면책조항)
[스팩로그]는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 인하여 서비스 제공에 장애가 발생한 경우에는 서비스 제공에 대한 책임이 면제됩니다.
[스팩로그]는 이용자가 서비스를 이용하여 기대하는 특정 결과에 대해서는 책임을 지지 않습니다.
제10조 (권리의 귀속)
[스팩로그]가 제공하는 서비스 및 그에 필요한 소프트웨어에 대한 지적 재산권은 [스팩로그]에 귀속됩니다. 이용자는 본 약관에서 명시된 서비스 이용 권한 외에는 어떠한 권리도 획득하지 않습니다.
제11조 (약관의 변경)
[스팩로그]는 약관 변경 시 적절한 방법으로 이용자에게 통지합니다.
변경된 약관은 이용자가 변경에 동의하는 경우 즉시 효력이 발생하며, 동의하지 않을 경우 기존 약관이 계속 적용됩니다.제12조 (분쟁의 해결)
본 약관과 관련하여 이용자와 [스팩로그] 간에 분쟁이 발생한 경우, 양 당사자는 분쟁 해결을 위해 성실히 협의합니다.
협의가 이루어지지 않을 경우, 관련 법령에 따른 권리를 주장할 수 있습니다.
제13조 (준거법 및 재판관할)
본 약관은 대한민국 법률에 따라 해석되며, 본 약관으로 발생한 분쟁에 대해서는 대한민국의 법원을 관할법원으로 합니다.
제14조 (기타)
본 약관에 명시되지 않은 사항에 대해서는 관련 법령 및 [스팩로그]의 정책에 따릅니다.
본 약관은 2024년 [월] [일]부터 시행됩니다.
이용자는 본 약관을 확인하고 동의함으로써 서비스를 이용할 수 있습니다.
본 이용약관은 [스팩로그]와 이용자 간의 상호 이해를 돕고 서비스 이용에 필요한 기본적인 규칙을 정하는 것을 목적으로 합니다. 이용자는 이 약관을 주의 깊게 읽고 동의한 뒤 서비스를 이용해 주시기 바랍니다. 약관에 동의하지 않을 경우 서비스 이용이 제한될 수 있습니다.`}
          </article>
        </section>
        <section>
          <p className='mb-[15px] font-semibold'>개인정보처리방침</p>
          <article className='h-[415px] px-[16px] py-5 border border-neutral-40 text-caption1 text-neutral-60 whitespace-pre-wrap overflow-y-auto'>
            {`[스팩로그 개인정보처리방침]
  
스팩로그는 사용자의 개인정보를 중요하게 생각하며, 이를 보호하기 위해 최선의 노력을 다하고 있습니다. 본 개인정보처리방침은 스팩로그가 제공하는 서비스를 이용하시는 분들의 개인정보를 어떻게 수집, 사용, 보호하는지에 대한 정보를 제공합니다. 개인정보처리방침은 법령 및 지침의 변경에 따라 수시로 개정될 수 있으므로, 이를 확인하시어 주기적으로 참고하시기 바랍니다.
 1. 수집하는 개인정보 항목
   · 스팩로그는 블로그 서비스를 제공함에 따라 다음과 같은 개인정보를 수집할 수 있습니다.
     · 필수정보: 사용자 아이디, 비밀번호, 이메일 주소
     · 선택정보: 프로필 사진, 닉네임, 블로그 주소 등 사용자가 직접 입력하는 정보
     · 서비스 이용 기록: 로그인 기록, 블로그 작성 기록, 댓글 작성 기록, IP 주소, 쿠키, 서비스 이용에 관한 통계 등
 2. 개인정보의 수집 및 이용 목적
   · 스팩로그는 수집한 개인정보를 다음과 같은 목적으로 이용합니다.
     · 회원제 서비스 제공: 블로그 작성, 댓글 작성, 커뮤니티 활동 등을 위한 회원 제공
     · 서비스 개선 및 개인맞춤 서비스 제공: 이용자들에게 최적화된 서비스 제공을 위해 통계 및 분석에 활용
     · 이벤트 및 광고 정보 제공: 새로운 서비스, 이벤트, 광고 등의 정보 제공 및 홍보
 3. 개인정보의 보유 및 보관 기간
   · [스팩로그]는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 따라 일정 기간 동안 보관할 필요가 있는 경우 해당 기간 동안 보관하고 안전하게 처리합니다.
 4. 개인정보의 제3자 제공
   · [스팩로그]는 사용자의 동의 없이는 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
     · 법령의 규정에 따라 수사, 조사, 사법기관의 요청이 있는 경우
     · 서비스 제공에 필요한 업무를 외부에 위탁하는 경우
서비스 제공에 필요한 업무를 외부에 위탁하는 경우
개인정보의 안전성 확보 조치
[스팩로그]는 개인정보보호를 위한 다양한 기술적, 관리적, 물리적 조치를 취하여 사용자의 개인정보를 안전하게 관리하고 있습니다.
사용자의 권리와 의무
사용자는 언제든지 자신의 개인정보를 열람, 정정, 삭제할 수 있습니다. 또한 개인정보 수집 및 이용에 대한 동의 철회도 가능합니다.
개인정보 보호책임자 및 연락처
[스팩로그]는 사용자의 개인정보보호를 위해 개인정보 보호책임자를 지정하고 있습니다. 개인정보와 관련된 문의사항 및 불만사항은 아래의 연락처로 문의하시기 바랍니다.
개인정보 보호책임자: [성명]
이메일 주소: [이메일 주소]
전화번호: [전화번호]
본 개인정보처리방침은 2024년 [월] [일]부터 시행되며, 이후 변경되는 사항에 대해서는 별도의 통지 없이 변경될 수 있습니다. 최신 버전의 개인정보처리방침은 [스팩로그] 블로그에서 확인하실 수 있습니다.`}
          </article>
        </section>
      </div>
    </main>
  );
};

export default Policy;
