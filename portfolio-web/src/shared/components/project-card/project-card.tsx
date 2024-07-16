import { ProjectCardProps } from './types';
import Image from 'next/image';

import styles from './project-card.module.scss';
import NavigationButton from '@components/navigation-button/navigation-button';
import BlockRendererClient from '@components/block-renderer-client/block-renderer-client';

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={project.thumbnail.url}
        alt={project.thumbnail.alt}
        width={500}
        height={200}
      />
      <h3>{project.name}</h3>
      <div className={styles.tags}>
        <span className={styles.yearTag}>{project.lastUpdated.split('-')[0]}</span>
        {project.technologies.map(({ id, name }) => (
          <span
            className={styles.technologyTag}
            key={id}
          >
            {name}
          </span>
        ))}
      </div>
      <div className={styles.description}>
        <BlockRendererClient content={project.description} />
      </div>

      <div className={styles.detailBtn}>
        <NavigationButton
          href={`projects/${project.id}`}
          variant="filled"
          trailingIcon="arrow-right"
          size="small"
        >
          Details
        </NavigationButton>
      </div>
    </div>
  );
};

export default ProjectCard;
