import { getAllSkills } from '@/api/skill';
import { useQuery } from '@tanstack/react-query';

const getSkillData = async (id: string[]) => {
  try {
    if (id) {
      const posts = await getAllSkills(id);
      return posts;
    }
  } catch (e) {
    return console.error(e);
  }
};

export const useGetSkillData = (id: string[]) => {
  return useQuery({
    queryKey: ['skills', id],
    queryFn: () => getSkillData(id),
  });
};
