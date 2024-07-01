export type Project = {
  id: number;
  name: string;
  description: string;
  lastUpdated: string;
  technologies: string[];
  status: string;
};

export type ProjectCardProps = {
  project: Project;
};
