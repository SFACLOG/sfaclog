import {
  deleteProject,
  getAllProjectImageById,
  getAllProjects,
  getProjectById,
} from '@/api/project';
import {
  getAllUsersById,
  getUserAllProfileById,
  getUserProfileById,
} from '@/api/user';
import { useQuery } from '@tanstack/react-query';

const getProjectData = async () => {
  try {
    const posts = await getAllProjects();
    return posts;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetProjectData = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjectData(),
  });
};

const getAllUserDataById = async (id: string[]) => {
  try {
    const user = await getAllUsersById(id);

    if (!user) throw Error('getUserData error!');

    return user;
  } catch (e) {
    throw e;
  }
};

export const useGetAllUserById = (id: string[]) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => getAllUserDataById(id),
  });
};

const getAllUserProfileById = async (id: string[]) => {
  try {
    const user = await getUserAllProfileById(id);

    if (!user) throw Error('getUserData error!');

    return user;
  } catch (e) {
    throw e;
  }
};

export const useGetAllUserProfileById = (id: string[]) => {
  return useQuery({
    queryKey: ['usersprofile', id],
    queryFn: () => getAllUserProfileById(id),
  });
};

const getUserProfileByUserId = async (id: string) => {
  try {
    const user = await getUserProfileById(id);

    if (!user) throw Error('getUserData error!');

    return user;
  } catch (e) {
    throw e;
  }
};

export const useGetUserProfileById = (id: string) => {
  return useQuery({
    queryKey: ['userprofile', id],
    queryFn: () => getUserProfileByUserId(id),
  });
};

const getUserIdByProjectId = async (id: string) => {
  try {
    const posts = await getProjectById(id);
    return posts.user_id;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetUserIdByProjectId = (id: string) => {
  return useQuery({
    queryKey: ['projectId', id],
    queryFn: () => getUserIdByProjectId(id),
  });
};

const getProjectDataByProjectId = async (id: string) => {
  try {
    const posts = await getProjectById(id);
    return posts;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetProjectDataByProjectId = (id: string) => {
  return useQuery({
    queryKey: ['projectData', id],
    queryFn: () => getProjectDataByProjectId(id),
  });
};

const getProjectImageByProjectId = async (id: string) => {
  try {
    const user = await getAllProjectImageById(id);

    if (!user) throw Error('getUserData error!');

    return user;
  } catch (e) {
    throw e;
  }
};

export const useGetProjectImageByProjectId = (id: string) => {
  return useQuery({
    queryKey: ['projectimage', id],
    queryFn: () => getProjectImageByProjectId(id),
  });
};

const deleteProjectByProjectId = async (id: string) => {
  try {
    const user = await deleteProject(id);

    return user;
  } catch (e) {
    throw e;
  }
};

export const useDeleteProjectByProjectId = (id: string) => {
  return useQuery({
    queryKey: ['deleteproject', id],
    queryFn: () => deleteProjectByProjectId(id),
  });
};
