import { getTags } from '@/api/tag';
import { useQuery } from '@tanstack/react-query';

export const useGetTags = (page: number, perPage: number) => {
  return useQuery({
    queryKey: ['tags', page, perPage],
    queryFn: () => getTags(page, perPage),
  });
};
