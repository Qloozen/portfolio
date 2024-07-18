import SectionDivider from '@components/section-divider/section-divider';
import styles from './experience-section.module.scss';
import { fetchWork } from './api';
import { getTranslations } from 'next-intl/server';
import { MotionDiv } from '@components';
import { fadeUp, staggerContainer } from '@animations/variants';

const ExperienceSection = async () => {
  const work = await fetchWork();
  const t = await getTranslations('experience');

  return (
    <div className={styles.container}>
      <MotionDiv
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ amount: 0.2 }}
      >
        <SectionDivider title={t('experience')} />
      </MotionDiv>

      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        variants={staggerContainer}
        className={styles.timeline}
      >
        {work.map(({ company, id, description, location, position, end, start, durationMonths, durationYears }) => (
          <MotionDiv
            key={id}
            className={styles.box}
            variants={fadeUp}
          >
            <div className={styles.content}>
              <p className={styles.time}>
                {start} - {end} · {durationYears > 0 && `${durationYears} ${t('years')}, `}
                {durationMonths} {t('months')}
              </p>
              <p className={styles.company}>
                {company} - {location}
              </p>
              <p className={styles.position}>{position}</p>
              <p className={styles.description}>{description}</p>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
};

export default ExperienceSection;
