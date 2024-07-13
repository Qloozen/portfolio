import { Project, projectListMapper } from 'shared/types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/projects?populate=*`);
  const json = await res.json();
  return projectListMapper(json);
};
