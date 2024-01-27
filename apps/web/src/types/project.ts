import { User } from './user';

export interface Project {
  id: string;
  title: string;
  content: string;
  deadline: string;
  preference: string;
  images: string;
  size: number;
  likes: number;
  view: number;
  userId: Pick<User, 'id'>;
}

export interface ProjectLike {
  id: string;
  userId: Pick<User, 'id'>;
  projectId: Pick<Project, 'id'>;
}

export interface ProjectComment {
  id: string;
  content: string;
  likes: number;
  userId: Pick<User, 'id'>;
  projectId: Pick<Project, 'id'>;
  parentId: Pick<ProjectComment, 'id'>;
}

export interface ProjectCommentLike {
  id: string;
  userId: Pick<User, 'id'>;
  projectCommentId: Pick<ProjectComment, 'id'>;
}

export interface Skill {
  id: string;
  name: string; // TODO: 리터럴 타입 고려
}

export interface Position {
  id: string;
  name: string; // TODO: 리터럴 타입 고려
}

export interface Meeting {
  id: string;
  type: string; // TODO: 리터럴 타입 고려
}

export interface ProjectSkill {
  id: string;
  projectId: Pick<Project, 'id'>;
  skillId: Pick<Skill, 'id'>;
}

export interface ProjectPosition {
  id: string;
  projectId: Pick<Project, 'id'>;
  positionId: Pick<Position, 'id'>;
}

export interface ProjectMeeting {
  id: string;
  projectId: Pick<Project, 'id'>;
  meetingId: Pick<Meeting, 'id'>;
}
