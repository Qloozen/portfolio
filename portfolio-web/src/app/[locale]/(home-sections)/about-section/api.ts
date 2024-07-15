import { BlocksContent } from '@strapi/blocks-react-renderer';
import { getLocale } from 'next-intl/server';
import { DevelopmentCategory, developmentCategoryListMapper } from 'shared/types/development-category';

export const fetchAbout = async (): Promise<BlocksContent> => {
  const locale = await getLocale();

  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/about?locale=${locale}`);
  const json = await res.json();
  return json.data.attributes.about;
};

export const fetchDevelopmentCategories = async (): Promise<DevelopmentCategory[]> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/development-categories?populate=*`);
  const json = await res.json();
  return developmentCategoryListMapper(json);
};
