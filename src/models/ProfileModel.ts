import { ImageResponse, ResponseObject } from "./StrapiReponse";

export type ProfileResponse = ResponseObject<{
  picture: ImageResponse;
}>;

export type ProfileModel = {
  imageUrl: string;
  alt: string | undefined;
};
