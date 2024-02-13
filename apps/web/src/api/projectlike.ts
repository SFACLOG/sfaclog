import pb from '.';
interface ProjectLikeProp {
  project_id: string;
  user_id: string;
}

export const postProjectLike = async (data: ProjectLikeProp) => {
  const record = await pb.collection('project_like').create(data);

  return record;
};
export const deleteProjectLike = async (data: ProjectLikeProp) => {
  const like = await pb.collection('project_like').getFullList({
    filter: `project_id = "${data.project_id}"&& user_id = "${data.user_id}"`,
  });

  if (like.length > 0) {
    await pb.collection('project_like').delete(like[0].id);
  }
};

export const getProjectLike = async (data: ProjectLikeProp) => {
  const like = await pb.collection('project_like').getFullList({
    filter: `project_id = "${data.project_id}"&& user_id = "${data.user_id}"`,
  });
  if (like) {
    return true;
  } else {
    return false;
  }
};
