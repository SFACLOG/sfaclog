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
  frontend?: string;
  backend?: string;
  machineLearning?: string;
  cloudCloud?: string;
  database?: string;
  android?: string;
  ios?: string;
}

export interface Proposal {
  projcet?: boolean;
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
