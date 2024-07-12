import { BlocksContent } from '@strapi/blocks-react-renderer';

export const fetchHero = async (): Promise<BlocksContent> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/hero`);
  const json = await res.json();
  return json.data.attributes.description;
};
