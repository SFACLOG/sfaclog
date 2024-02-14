import pb from '.';

interface PositionProp {
  project_id: string;
  position_id: string;
}

export const postPosition = async (data: PositionProp) => {
  const record = await pb.collection('project_position').create(data);

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

export const getPositionsById = async (id: string) => {
  const record = await pb.collection('project_position').getFullList({
    filter: `project_id = "${id}"`,
  });

  return record;
};

export const getProjectPositionByData = async (data: PositionProp) => {
  const records = await pb.collection('project_position').getFullList({
    filter: `project_id = "${data.project_id}"&& position_id = "${data.position_id}"`,
  });

  return records;
};

export const updatePosition = async (id: any, data: PositionProp) => {
  const record = await pb.collection('project_position').update(id, data);

  return record;
};

export const deletePosition = async (ids: any[]) => {
  for (const item of ids) {
    await pb.collection('project_position').delete(item.id);
  }
};

// for (const item of position) {
//   if (item?.id) {
//     await pb.collection('project_position').delete(item.id);
//   }
// }
