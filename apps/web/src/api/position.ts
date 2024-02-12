import pb from '.';

interface PositionProp {
  project_id: string;
  position_id: string;
}

export const postPosition = async (data: PositionProp) => {
  const record = await pb.collection('project_position').create(data);
  console.log(record);
  return record;
};

export const getPositionByName = async (names: string[]) => {
  const records: any[] = [];
  for (const name of names) {
    const record = await pb
      .collection('position')
      .getFirstListItem(`name = "${name}"`);
    records.push(record);
  }
  console.log(records);
  return records;
};

export const getAllPositions = async (ids: string[]) => {
  const records: any[] = [];
  for (const id of ids) {
    const record = await pb.collection('project_position').getFullList({
      filter: `project_id = "${id}"`,
    });
    records.push(record);
  }
  return records;
};
