import { getLocale } from 'next-intl/server';
import { Project, projectListMapper } from 'shared/types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  const locale = await getLocale();

  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/projects?populate=*&locale=${locale}`);
  const json = await res.json();
  console.log(`${process.env.NEXT_BASE_API_URL}/projects?populate=*?locale=${locale}`);

  return projectListMapper(json);
};
