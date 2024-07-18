import ProjectCard from '@components/project-card/project-card';
import styles from './page.module.scss';
import { fetchProjects } from './api';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
  const projects = await fetchProjects();
  const t = await getTranslations('projectPage');

  return (
    <div className={styles.container}>
      <h1>{t('allProjects')}</h1>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
