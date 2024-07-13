import { Project, projectListMapper } from 'shared/types/project';

export const fetchRecentProjects = async (): Promise<Project[]> => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API_URL}/projects?populate=*&sort=lastUpdated:desc&pagination[pageSize]=3`
  );
  const json = await res.json();
  return projectListMapper(json);
};
