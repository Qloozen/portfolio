import SectionDivider from '@components/section-divider/section-divider';
import styles from './project-section.module.scss';
import ProjectCard from '@components/project-card/project-card';
import { NavigationButton } from '@components';
import { fetchRecentProjects } from './api';

const ProjectSection = async () => {
  const projects = await fetchRecentProjects();

  return (
    <div className={styles.container}>
      <SectionDivider title="Recent Projects" />
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
        View Projects
      </NavigationButton>
    </div>
  );
};

export default ProjectSection;
