import {
  ImageCollectionResponse,
  ImageResponse,
  ResponseCollection,
} from "./StrapiReponse";

export type Project = {
  id: number;
  name: string;
  description: string;
  githubUrl: string | undefined;
  tags: string[];
  thumbnail: string;
  status: string;
  media: string[];
};

export type ProjectResponse = ResponseCollection<
  Omit<Project, "id" | "tags" | "thumbnail" | "media"> & {
    tags: ResponseCollection<{ name: string }>;
    thumbnail: ImageResponse;
    media: ImageCollectionResponse;
  }
>;
