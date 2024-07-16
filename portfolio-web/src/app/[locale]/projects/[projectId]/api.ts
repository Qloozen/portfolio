import { getLocale } from 'next-intl/server';
import { Project, projectMapper } from 'shared/types/project';

export const fetchProject = async (id: number): Promise<Project> => {
  const locale = await getLocale();

  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/projects/${id}?populate=*&locale=${locale}`);
  const json = await res.json();
  return projectMapper(json.data);
};
