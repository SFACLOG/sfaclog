import { getAllPositions } from '@/api/position';
import { useQuery } from '@tanstack/react-query';

const getPositionData = async (id: string[]) => {
  try {
    if (id) {
      const posts = await getAllPositions(id);
      return posts;
    }
  } catch (e) {
    return console.error(e);
  }
};

export const useGetPositionData = (id: string[]) => {
  return useQuery({
    queryKey: ['positions', id],
    queryFn: () => getPositionData(id),
  });
};
