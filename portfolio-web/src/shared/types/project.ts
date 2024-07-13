import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { Technology, technologyListMapper } from './technology';

export type Project = {
  id: number;
  name: string;
  description: BlocksContent;
  githubUrl?: string;
  lastUpdated: string;
  projectType: string;
  status: string;
  thumbnail: string;
  technologies: Technology[];
};

export const projectMapper = (json: any): Project => ({
  id: json.id,
  name: json.attributes.name,
  description: json.attributes.description,
  githubUrl: json.attributes.githubUrl,
  lastUpdated: json.attributes.lastUpdated,
  projectType: json.attributes.projectType,
  status: json.attributes.status,
  thumbnail: json.attributes.thumbnail.data.attributes.url,
  technologies: technologyListMapper(json.attributes.technologies),
});

export const projectListMapper = (json: any): Project[] => json.data.map(projectMapper);
