import SectionDivider from '@components/section-divider/section-divider';
import styles from './experience-section.module.scss';

const work = [
  {
    start: '2015',
    end: '2022',
    company: 'Albert Heijn',
    position: 'Vakkenvuller',
    description: 'Vakkenvuller bij Albert Heijn',
  },
  {
    start: '2017',
    end: '2022',
    company: 'Albert Heijn',
    position: 'Kassamedewerker',
    description: 'Kassamedewerker bij Albert Heijn',
  },
  {
    start: '2019',
    end: '2022',
    company: 'Albert Heijn',
    position: 'Teamleider',
    description: 'Teamleider bij Albert Heijn',
  },
  {
    start: '2021',
    end: '2022',
    company: 'Albert Heijn',
    position: 'Assistent Supermarktmanager',
    description: 'Assistent Supermarktmanager bij Albert Heijn',
  },
];

const ExperienceSection = () => {
  return (
    <div className={styles.container}>
      <SectionDivider title="Experience" />

      <div className={styles.timeline}>
        {work.map((job, index) => (
          <div
            key={index}
            className={styles.box}
          >
            <div className={styles.content}>
              <p className={styles.duration}>
                {job.start} - {job.end}
              </p>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.position}>{job.position}</p>
              <p className={styles.description}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
