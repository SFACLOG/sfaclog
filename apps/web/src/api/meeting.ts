import pb from '.';

interface MeetingProp {
  project_id: string;
  meeting_id: string;
}

export const postMeeting = async (data: MeetingProp) => {
  const record = await pb.collection('project_meeting').create(data);

  return record;
};

export const updateMeeting = async (id: any, data: MeetingProp) => {
  const record = await pb.collection('project_meeting').update(id, data);

  return record;
};

export const getProjectMeetingByData = async (data: MeetingProp) => {
  const records = await pb.collection('project_meeting').getFullList({
    filter: `project_id = "${data.project_id}"&& meeting_id = "${data.meeting_id}"`,
  });

  return records;
};

export const getMeeting = async (type: string) => {
  const records = await pb
    .collection('meeting')
    .getFirstListItem(`type = "${type}"`);

  return records;
};

export const getMeetingById = async (id: string) => {
  const records = await pb
    .collection('meeting')
    .getFirstListItem(`id = "${id}"`);

  return records;
};

export const getAllMeetings = async (ids: string[]) => {
  const records: any[] = [];
  for (const id of ids) {
    const record = await pb.collection('project_meeting').getFullList({
      filter: `project_id = "${id}"`,
    });
    records.push(record);
  }
  return records;
};
