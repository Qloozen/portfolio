import { ResponseCollection } from "./StrapiReponse";

export type Experience = {
  id: number;
  name: "Front-end" | "Back-end" | "Mobile";
  technologies: Technology[];
};

export type Technology = {
  id: number;
  name: string;
  lastWorkedWith: string;
  rating: number;
};

export type ExperienceResponse = ResponseCollection<
  Omit<Experience, "id" | "technologies"> & {
    technologies: ResponseCollection<Omit<Technology, "id">>;
  }
>;
