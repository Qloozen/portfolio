import { ImageResponse, ResponseCollection } from "./StrapiReponse";

export type Project = {
  id: number;
  name: string;
  description: string;
  githubUrl: string | undefined;
  tags: string[];
  thumbnail: string;
  //   media: string[];
};

export type ProjectResponse = ResponseCollection<
  Omit<Project, "id" | "tags" | "thumbnail"> & {
    tags: ResponseCollection<{ name: string }>;
    thumbnail: ImageResponse;
  }
>;
