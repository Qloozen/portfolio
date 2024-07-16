import SectionDivider from '@components/section-divider/section-divider';
import styles from './project-section.module.scss';
import ProjectCard from '@components/project-card/project-card';
import { MotionDiv, NavigationButton } from '@components';
import { fetchRecentProjects } from './api';
import { getTranslations } from 'next-intl/server';
import { fadeUp, staggerContainer } from '@animations/variants';

const ProjectSection = async () => {
  const projects = await fetchRecentProjects();
  const t = await getTranslations('recentProjects');

  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ amount: 0.2 }}
      className={styles.container}
    >
      <MotionDiv variants={fadeUp}>
        <SectionDivider title={t('recentProjects')} />
      </MotionDiv>
      <div className={styles.content}>
        {projects.map((project) => (
          <MotionDiv
            key={project.id}
            variants={fadeUp}
          >
            <ProjectCard project={project} />
          </MotionDiv>
        ))}
      </div>
      <NavigationButton
        className={styles.viewProjectsBtn}
        href="/projects"
        trailingIcon="arrow-right"
      >
        {t('allProjects')}
      </NavigationButton>
    </MotionDiv>
  );
};

export default ProjectSection;
