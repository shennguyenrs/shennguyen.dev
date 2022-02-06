export interface TechStack {
  name: string;
  used: string;
}

export enum WebStatus {
  UP = 'online',
  DOWN = 'offline',
  DEV = 'development',
}

export interface ProjectInfo {
  name: string;
  description: string;
  image: string;
  link: string;
  status: WebStatus;
  details: TechStack[];
}
