import SectionDivider from '@components/section-divider/section-divider';
import styles from './about-section.module.scss';
import TechnologyList from '@components/technology-list/technology-list';
import { RB19 } from '@components/rb19/rb19';
import { fetchAbout, fetchDevelopmentCategories } from './api';
import { BlockRendererClient } from '@components';

const technologies = [
  { iconName: 'layout', name: 'Front-end', technologies: ['React', 'Next.js', 'Tailwind CSS', 'Sass'] },
  { iconName: 'server', name: 'Back-end', technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
  { iconName: 'smartphone', name: 'Mobile', technologies: ['React Native', 'Expo', 'Firebase'] },
];

const AboutSection = async () => {
  const content = await fetchAbout();
  const developmentCategories = await fetchDevelopmentCategories();

  return (
    <div className={styles.container}>
      <SectionDivider title="About" />

      <div className={styles.content}>
        <div className={styles.aboutSection}>
          <BlockRendererClient content={content} />
        </div>

        <div className={styles.experienceSection}>
          {developmentCategories.map(({ id, iconName, name, technologies }, index) => (
            <TechnologyList
              iconName={iconName}
              key={name}
              title={name}
              technologies={technologies.map((technology) => technology.name)}
              showDivider={index !== technologies.length - 1}
            />
          ))}
        </div>
      </div>

      <RB19 />
    </div>
  );
};

export default AboutSection;
