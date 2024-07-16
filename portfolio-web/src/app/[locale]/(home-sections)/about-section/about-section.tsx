import SectionDivider from '@components/section-divider/section-divider';
import styles from './about-section.module.scss';
import TechnologyList from '@components/technology-list/technology-list';
import { RB19 } from '@components/rb19/rb19';
import { fetchAbout, fetchDevelopmentCategories } from './api';
import { BlockRendererClient, MotionDiv } from '@components';
import { getTranslations } from 'next-intl/server';
import { fadeUp, staggerContainer } from '@animations/variants';

const AboutSection = async () => {
  const t = await getTranslations('about');
  const content = await fetchAbout();
  const developmentCategories = await fetchDevelopmentCategories();

  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ amount: 0.2 }}
      className={styles.container}
    >
      <MotionDiv variants={fadeUp}>
        <SectionDivider title={t('about')} />
      </MotionDiv>

      <div className={styles.content}>
        <MotionDiv
          variants={fadeUp}
          className={styles.aboutSection}
        >
          <BlockRendererClient content={content} />
        </MotionDiv>

        <div className={styles.experienceSection}>
          {developmentCategories.map(({ id, iconName, name, technologies }, index) => (
            <MotionDiv
              key={name}
              variants={fadeUp}
            >
              <TechnologyList
                iconName={iconName}
                title={name}
                technologies={technologies.map((technology) => technology.name)}
                showDivider={index !== technologies.length - 1}
              />
            </MotionDiv>
          ))}
        </div>
      </div>
      <MotionDiv variants={fadeUp}>
        <RB19 />
      </MotionDiv>
    </MotionDiv>
  );
};

export default AboutSection;
