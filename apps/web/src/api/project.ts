import { Project } from '@/types/project';
import pb from '.';
export const getProjectsbyLikes = async (likes: number, page: number) => {
  const perPage = 2;
  const records = await pb.collection('project').getList(page, perPage, {
    filter: `likes = "${likes}"`,
  });

  return records;
};

export const getProjectById = async (id: string) => {
  const projectId = await pb.collection('project').getOne(id);

  return projectId;
};

export const postProject = async (data: Project) => {
  const project = await pb.collection('project').create(data);

  return project;
};

export const getLatestProjectById = async (user_id: string) => {
  const records = await pb.collection('project').getFullList({
    sort: '-created ',
    filter: `user_id = "${user_id}"`,
  });
  console.log(records[0]);
  return records[0];
};
