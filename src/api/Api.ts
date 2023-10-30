import axios from "axios";
import { Project, ProjectResponse } from "../models/ProjectModel";
import { ProfileModel, ProfileResponse } from "../models/ProfileModel";
import { AboutModel, AboutResponse } from "../models/AboutModel";
import { Experience, ExperienceResponse } from "../models/ExperienceModel";

export const BASE_URL = "https://portfolio-cms.qloozen.nl";

export const fetchProjects = (): Promise<Project[]> => {
  return axios
    .get<ProjectResponse>(`${BASE_URL}/api/projects?populate=*`)
    .then((res) => {
      const response = res.data.data;
      const projects = response.map((project) => {
        return {
          id: project.id,
          name: project.attributes.name,
          description: project.attributes.description,
          githubUrl: project.attributes.githubUrl,
          tags: project.attributes.tags.data.map((tag) => tag.attributes.name),
          status: project.attributes.status,
          thumbnail:
            BASE_URL + project.attributes.thumbnail.data.attributes.url,
          media: project.attributes.media.data.map(
            (img_response) => BASE_URL + img_response.attributes.url
          ),
        };
      });
      return projects;
    });
};

export const fetchExperiences = (): Promise<Experience[]> => {
  return axios
    .get<ExperienceResponse>(`${BASE_URL}/api/experiences?populate=*`)
    .then((res) => {
      const response = res.data.data;
      const experiences = response.map((experience) => {
        console.log(experience);
        return {
          id: experience.id,
          name: experience.attributes.name,
          technologies: experience.attributes.technologies.data.map(
            (technology) => {
              return {
                id: technology.id,
                name: technology.attributes.name,
                lastWorkedWith: technology.attributes.lastWorkedWith,
                rating: technology.attributes.rating,
              };
            }
          ),
        };
      });
      return experiences;
    });
};

export const fetchProfile = (): Promise<ProfileModel> => {
  return axios
    .get<ProfileResponse>(`${BASE_URL}/api/profile?populate=*`)
    .then((res) => {
      const { url, alternativeText } =
        res.data.data.attributes.picture.data.attributes;

      return {
        imageUrl: BASE_URL + url,
        alt: alternativeText,
      };
    });
};

export const fetchAbout = (): Promise<AboutModel> => {
  return axios
    .get<AboutResponse>(`${BASE_URL}/api/about?populate=*`)
    .then((res) => ({ about: res.data.data.attributes.about }));
};
