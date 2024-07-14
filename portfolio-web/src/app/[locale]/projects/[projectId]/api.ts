import { Project, projectMapper } from 'shared/types/project';

export const fetchProject = async (id: number): Promise<Project> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/projects/${id}?populate=*`);
  const json = await res.json();
  return projectMapper(json.data);
};
