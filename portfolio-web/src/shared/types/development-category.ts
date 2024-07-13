import { Technology, technologyListMapper } from './technology';

export type DevelopmentCategory = {
  id: number;
  name: string;
  iconName: string;
  technologies: Technology[];
};

export const developmentCategoryMapper = (json: any): DevelopmentCategory => ({
  id: json.id,
  name: json.attributes.name,
  iconName: json.attributes.iconName,
  technologies: technologyListMapper(json.attributes.technologies),
});

export const developmentCategoryListMapper = (json: any): DevelopmentCategory[] =>
  json.data.map(developmentCategoryMapper);
