import SectionDivider from '@components/section-divider/section-divider';
import styles from './project-section.module.scss';
import ProjectCard from '@components/project-card/project-card';
import { NavigationButton } from '@components';
import { fetchRecentProjects } from './api';
import { getTranslations } from 'next-intl/server';

const ProjectSection = async () => {
  const projects = await fetchRecentProjects();
  const t = await getTranslations('recentProjects');

  return (
    <div className={styles.container}>
      <SectionDivider title={t('recentProjects')} />
      <div className={styles.content}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <NavigationButton
        className={styles.viewProjectsBtn}
        href="/projects"
        trailingIcon="arrow-right"
      >
        {t('allProjects')}
      </NavigationButton>
    </div>
  );
};

export default ProjectSection;
