export const convertTimeFormat = (created: string) => {
  const currentDate = new Date();
  const createdDate = new Date(created);

  const timeDiff = currentDate.getTime() - createdDate.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return '방금';
  else if (minutes < 60) return `${minutes}분 전`;
  else if (hours < 24) return `${hours}시간 전`;
  else if (days < 7) return `${days}일 전`;
  else {
    return createdDate
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replaceAll(' ', '');
  }
};
