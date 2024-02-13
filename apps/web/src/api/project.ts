import { Project, ProjectInfo } from '@/types/project';
import pb from '.';
export const getProjectsbyLikes = async (likes: number) => {
  const records = await pb.collection('project').getFullList({
    filter: `likes = "${likes}"`,
  });

  return records;
};

export const getAllProjects = async () => {
  const records = await pb.collection('project').getFullList({
    sort: '-views',
  });

  return records;
};

export const getProjectById = async (id: string) => {
  const projectId: ProjectInfo = await pb.collection('project').getOne(id);

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

  return records[0];
};

export const getAllProjectImageById = async (id: string) => {
  const record = await pb.collection('project').getFullList({
    filter: `id = "${id}"`,
  });
  const allImages = record[0].images;
  const records: any[] = [];
  for (const image of allImages) {
    const url = pb.files.getUrl(record[0], image);
    records.push(url);
  }
  return records;
};

export const updateProjectIs = async (id: string, data: ProjectInfo) => {
  await pb.collection('project').update(id, data);
};

export const updateProjectId = async (id: string, data: Project) => {
  await pb.collection('project').update(id, data);
};

export const deleteProject = async (id: string) => {
  try {
    const meetingPromise = pb.collection('project_meeting').getFullList({
      filter: `project_id = "${id}"`,
    });
    const skillPromise = pb.collection('project_skill').getFullList({
      filter: `project_id = "${id}"`,
    });
    const positionPromise = pb.collection('project_position').getFullList({
      filter: `project_id = "${id}"`,
    });
    const likePromise = pb.collection('project_like').getFullList({
      filter: `project_id = "${id}"`,
    });
    const commentPromise = pb.collection('project_comment').getFullList({
      filter: `project_id = "${id}"`,
    });

    const [meeting, skill, position, like, comment] = await Promise.all([
      meetingPromise,
      skillPromise,
      positionPromise,
      likePromise,
      commentPromise,
    ]);

    if (meeting.length > 0 && meeting[0]?.id) {
      await pb.collection('project_meeting').delete(meeting[0]?.id);
    }
    for (const item of skill) {
      if (item?.id) {
        await pb.collection('project_skill').delete(item.id);
      }
    }
    for (const item of position) {
      if (item?.id) {
        await pb.collection('project_position').delete(item.id);
      }
    }
    if (like.length > 0 && like[0]?.id) {
      await pb.collection('project_like').delete(like[0]?.id);
    }
    for (const item of comment) {
      if (item?.id) {
        await pb.collection('project_comment').delete(item.id);
      }
    }

    await pb.collection('project').delete(id);
  } catch (error) {
    console.error('Error while deleting project:', error);
  }
};

// export const deleteProeject = async (id: string) => {

// const meeting = await pb.collection('project_meeting').getFullList({
//   filter: `project_id = "${id}"`,
// });
// const skill = await pb.collection('project_skill').getFullList({
//   filter: `project_id = "${id}"`,
// });
// const position = await pb.collection('project_position').getFullList({
//   filter: `project_id = "${id}"`,
// });
// const like = await pb.collection('project_like').getFullList({
//   filter: `project_id = "${id}"`,
// });
// const comment = await pb.collection('project_comment').getFullList({
//   filter: `project_id = "${id}"`,
// });
// const comment_like = await pb.collection('project_comment_like').getFullList({
//   filter: `project_comment_id = "${comment[0].id}"`,
// });

// await pb.collection('project_meeting').delete(meeting[0].id);
// for (const item of skill) {
//   await pb.collection('project_skill').delete(item.id);
// }
// for (const item of position) {
//   await pb.collection('project_position').delete(item.id);
// }
// await pb.collection('project_like').delete(like[0].id);
// for (const item of comment) {
//   await pb.collection('project_comment').delete(item.id);
// }
// for (const item of comment_like) {
//   await pb.collection('project_comment_like').delete(item.id);
// }
// await pb.collection('project_meeting').delete(id);
// };

// export const deleteProejectMeeting = async (id: string) => {
//   const meeting = await pb.collection('project_meeting').getFullList({
//     filter: `project_id = "${id}"`,
//   });
//   const skill = await pb.collection('project_skill').getFullList({
//     filter: `project_id = "${id}"`,
//   });
//   const position = await pb.collection('project_position').getFullList({
//     filter: `project_id = "${id}"`,
//   });
//   const like = await pb.collection('project_like').getFullList({
//     filter: `project_id = "${id}"`,
//   });
//   const comment = await pb.collection('project_comment').getFullList({
//     filter: `project_id = "${id}"`,
//   });
//   const comment_like = await pb.collection('project_comment_like').getFullList({
//     filter: `project_comment_id = "${comment[0].id}"`,
//   });

//   await pb.collection('project_meeting').delete(meeting[0].id);
//   for(const item of skill){
//     await pb.collection('project_skill').delete(item.id);
//   }
//   for(const item of position){
//     await pb.collection('project_position').delete(item.id);
//   }
//   await pb.collection('project_like').delete(like[0].id);
//   for(const item of comment){
//   await pb.collection('project_comment').delete(item.id);
// }
// for(const item of comment_like){
//   await pb.collection('project_comment_like').delete(item.id);
// }
//   await pb.collection('project_meeting').delete(id);
// };
