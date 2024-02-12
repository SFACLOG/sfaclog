export interface User {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  description?: string;
  sfaclogUrl?: string;
  sfaclogTitle?: string;
  interest?: Interest;
  proposal?: Proposal;
  sns?: Sns;
}

export interface Interest {
  frontend?: boolean;
  backend?: boolean;
  machineLearning?: boolean;
  cloudComputing?: boolean;
  database?: boolean;
  container?: boolean;
  serverless?: boolean;
  mobile?: boolean;
}

export interface Proposal {
  project?: boolean;
  recruit?: boolean;
  opinion?: boolean;
}

export interface Sns {
  instagram?: string;
  github?: string;
  sfacfolio?: string;
  rocketpunch?: string;
  youtube?: string;
}

export interface Follow {
  id: string;
  followee: Pick<User, 'id'>;
  follwer: Pick<User, 'id'>;
}

export interface UserInfo {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  email: string;
  emailVisibility: boolean;
  follower: number;
  following: number;
  id: string;
  interests: {
    backend: boolean;
    cloudComputing: boolean;
    container: boolean;
    database: boolean;
    frontend: boolean;
    machineLearning: boolean;
    mobile: boolean;
    serverless: boolean;
  };
  nickname: string;
  profile_image: string;
  proposals: {
    opinion: boolean;
    project: boolean;
    recruit: boolean;
  };
  sfaclog_title: string;
  sns: {
    facebook: string;
    github: string;
    instagram: string;
  };
  updated: string;
  username: string;
  verified: boolean;
}
