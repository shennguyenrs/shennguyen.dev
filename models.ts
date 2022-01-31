export interface TechStack {
  name: string;
  used: string;
}

export interface ProjectInfo {
  name: string;
  description: string;
  image: string;
  details: TechStack[];
}
