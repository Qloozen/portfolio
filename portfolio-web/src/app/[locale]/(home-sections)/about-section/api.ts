import { BlocksContent } from '@strapi/blocks-react-renderer';
import { DevelopmentCategory, developmentCategoryListMapper } from 'shared/types/development-category';

export const fetchAbout = async (): Promise<BlocksContent> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/about`);
  const json = await res.json();
  return json.data.attributes.about;
};

export const fetchDevelopmentCategories = async (): Promise<DevelopmentCategory[]> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/development-categories?populate=*`);
  const json = await res.json();
  return developmentCategoryListMapper(json);
};
