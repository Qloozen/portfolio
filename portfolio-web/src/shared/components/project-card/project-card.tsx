import { ProjectCardProps } from './types';
import Image from 'next/image';

import styles from './project-card.module.scss';
import NavigationButton from '@components/navigation-button/navigation-button';

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/assets/images/project.png"
        alt="dijd"
        width={500}
        height={200}
        objectFit="cover"
      />
      <h3>{project.name}</h3>
      <div className={styles.tags}>
        <span className={styles.yearTag}>{project.lastUpdated.split('-')[0]}</span>
        {project.technologies.map((technology) => (
          <span
            className={styles.technologyTag}
            key={technology}
          >
            {technology}
          </span>
        ))}
      </div>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.detailBtn}>
        <NavigationButton
          href={`work/${project.id}`}
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
