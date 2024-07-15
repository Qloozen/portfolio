import SectionDivider from '@components/section-divider/section-divider';
import styles from './about-section.module.scss';
import TechnologyList from '@components/technology-list/technology-list';
import { RB19 } from '@components/rb19/rb19';
import { fetchAbout, fetchDevelopmentCategories } from './api';
import { BlockRendererClient } from '@components';
import { getTranslations } from 'next-intl/server';

const AboutSection = async () => {
  const t = await getTranslations('about');

  const content = await fetchAbout();
  const developmentCategories = await fetchDevelopmentCategories();

  return (
    <div className={styles.container}>
      <SectionDivider title={t('about')} />

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
