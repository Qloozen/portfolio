import SectionDivider from '@components/section-divider/section-divider';
import styles from './experience-section.module.scss';
import { fetchWork } from './api';

const ExperienceSection = async () => {
  const work = await fetchWork();

  return (
    <div className={styles.container}>
      <SectionDivider title="Experience" />

      <div className={styles.timeline}>
        {work.map(({ company, id, description, location, position, start, end }) => (
          <div
            key={id}
            className={styles.box}
          >
            <div className={styles.content}>
              <p className={styles.duration}>
                {start} - {end ? end : 'Present'}
              </p>
              <p className={styles.company}>
                {company} - {location}
              </p>
              <p className={styles.position}>{position}</p>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
