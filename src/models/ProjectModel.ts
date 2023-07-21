import { StrapiResponse } from "./StrapiReponse";

export type Project = {
  id: number;
  name: string;
  description: string;
  githubUrl: string | undefined;
  tags: string[];
};

export type ProjectResponse = StrapiResponse<
  Omit<Project, "id" | "tags"> & { tags: StrapiResponse<{ name: string }> }
>;
