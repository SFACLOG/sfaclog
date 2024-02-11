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
