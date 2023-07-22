import axios from "axios";
import { Project, ProjectResponse } from "../models/ProjectModel";

export const BASE_URL = "https://portfolio-cms.qloozen.nl";

export const fetchProjects = (): Promise<Project[]> => {
  return axios
    .get<ProjectResponse>(`${BASE_URL}/api/projects?populate=*`)
    .then((res) => {
      const response = res.data.data;
      const projects = response.map((project) => {
        console.log({
          img: project.attributes.thumbnail.data.attributes.url,
        });
        return {
          id: project.id,
          name: project.attributes.name,
          description: project.attributes.description,
          githubUrl: project.attributes.githubUrl,
          tags: project.attributes.tags.data.map((tag) => tag.attributes.name),
          thumbnail:
            BASE_URL + project.attributes.thumbnail.data.attributes.url,
        };
      });
      return projects;
    });
};
