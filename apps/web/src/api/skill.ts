import pb from '.';

interface SkillProp {
  project_id: string;
  skill_id: string;
}

export const postSkill = async (data: SkillProp) => {
  const record = await pb.collection('project_skill').create(data);
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

export const getProjectSkillByData = async (data: SkillProp) => {
  const records = await pb.collection('project_skill').getFullList({
    filter: `project_id = "${data.project_id}"&& skill_id = "${data.skill_id}"`,
  });

  return records;
};

export const updateSkill = async (id: any, data: SkillProp) => {
  const record = await pb.collection('project_skill').update(id, data);

  return record;
};

export const getProjectSkillById = async (id: string) => {
  const record = await pb.collection('project_skill').getFullList({
    filter: `project_id = "${id}"`,
  });

  return record;
};

export const deleteSkill = async (ids: any[]) => {
  for (const item of ids) {
    await pb.collection('project_skill').delete(item.id);
  }
};
