import { getAllMeetings } from '@/api/meeting';
import { useQuery } from '@tanstack/react-query';

const getMeetingData = async (id: string[]) => {
  try {
    if (id) {
      const posts = await getAllMeetings(id);
      return posts;
    }
  } catch (e) {
    return console.error(e);
  }
};

export const useGetMeetingData = (id: string[]) => {
  return useQuery({
    queryKey: ['meetings', id],
    queryFn: () => getMeetingData(id),
  });
};
