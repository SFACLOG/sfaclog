import pb from '.';

interface MeetingProp {
  project_id: string;
  meeting_id: string;
}

export const postMeeting = async (data: MeetingProp) => {
  const record = await pb.collection('project_meeting').create(data);
  console.log(record);
  return record;
};

export const getMeeting = async (type: string) => {
  const records = await pb
    .collection('meeting')
    .getFirstListItem(`type = "${type}"`);
  console.log(records);
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
