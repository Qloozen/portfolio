import { ResponseObject } from "./StrapiReponse";

export type AboutModel = {
  about: string;
};

export type AboutResponse = ResponseObject<AboutModel>;
