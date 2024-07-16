import { BlocksContent } from '@strapi/blocks-react-renderer';
import { Image } from './image';

export type Hero = {
  description: BlocksContent;
  profile: Image;
};

export const heroMapper = (json: any): Hero => ({
  description: json.data.attributes.description,
  profile: {
    url: process.env.NEXT_BASE_CMS_URL + json.data.attributes.profile.data.attributes.url,
    alt: json.data.attributes.profile.data.attributes.alternativeText,
  },
});
