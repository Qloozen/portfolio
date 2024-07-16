import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { Technology, technologyListMapper } from './technology';
import { Image } from './image';

export type Project = {
  id: number;
  name: string;
  description: BlocksContent;
  githubUrl?: string;
  lastUpdated: string;
  projectType: string;
  status: string;
  thumbnail: Image;
  technologies: Technology[];
  gallery: Image[];
};

export const projectMapper = (json: any): Project => ({
  id: json.id,
  name: json.attributes.name,
  description: json.attributes.description,
  githubUrl: json.attributes.githubUrl,
  lastUpdated: json.attributes.lastUpdated,
  projectType: json.attributes.projectType,
  status: json.attributes.status,
  thumbnail: {
    url: process.env.NEXT_BASE_CMS_URL + json.attributes.thumbnail.data.attributes.url,
    alt: json.attributes.thumbnail.data.attributes.alternativeText,
  },
  technologies: technologyListMapper(json.attributes.technologies),
  gallery: json.attributes.gallery.data.map((image: any) => ({
    url: process.env.NEXT_BASE_CMS_URL + image.attributes.url,
    alt: image.attributes.alternativeText,
  })),
});

export const projectListMapper = (json: any): Project[] => json.data.map(projectMapper);
