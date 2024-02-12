import pb from '.';

interface SkillProp {
  project_id: string;
  skill_id: string;
}

export const postSkill = async (data: SkillProp) => {
  const record = await pb.collection('project_skill').create(data);
  console.log(record);
  return record;
};

export const getSkillByName = async (names: string[]) => {
  const records: any[] = [];
  for (const name of names) {
    const record = await pb
      .collection('skill')
      .getFirstListItem(`name = "${name}"`);
    records.push(record);
  }
  console.log(records);
  return records;
};

export const getAllSkills = async (ids: string[]) => {
  const records: any[] = [];
  for (const id of ids) {
    const record = await pb.collection('project_skill').getFullList({
      filter: `project_id = "${id}"`,
    });
    records.push(record);
  }
  return records;
};
