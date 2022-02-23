export interface TechStack {
  name: string;
  used: string;
}

export interface ProjectInfo {
  _id?: string;
  name: string;
  description: string;
  image: string;
  link: string;
  sourcecode: string;
  details: TechStack[];
  added: number;
}
