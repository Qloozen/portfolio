import axios from "axios";
import { Project, ProjectResponse } from "../models/ProjectModel";

export const fetchProjects = (): Promise<Project[]> => {
  return axios
    .get<ProjectResponse>(
      "https://portfolio-cms.qloozen.nl/api/projects?populate=*"
    )
    .then((res) => {
      const response = res.data.data;
      const projects = response.map((project) => ({
        id: project.id,
        name: project.attributes.name,
        description: project.attributes.description,
        githubUrl: project.attributes.githubUrl,
        tags: project.attributes.tags.data.map((tag) => tag.attributes.name),
      }));
      return projects;
    });
};
