import { BlocksContent } from '@strapi/blocks-react-renderer';

export const fetchAbout = async (): Promise<BlocksContent> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/about`);
  const data = await res.json();
  return data.data.attributes.about;
};
