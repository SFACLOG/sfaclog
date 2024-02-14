'use client';

const LinkCopy = () => {
  let currentUrl = window.document.location.href;
  let t = document.createElement('textarea');
  document.body.appendChild(t);
  t.value = currentUrl;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
  alert('링크가 복사되었습니다.');
};

export default LinkCopy;
