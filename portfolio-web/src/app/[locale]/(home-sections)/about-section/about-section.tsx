import SectionDivider from '@components/section-divider/section-divider';
import styles from './about-section.module.scss';
import TechnologyList from '@components/technology-list/technology-list';

const technologies = [
  { iconName: 'layout', name: 'Front-end', technologies: ['React', 'Next.js', 'Tailwind CSS', 'Sass'] },
  { iconName: 'server', name: 'Back-end', technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
  { iconName: 'smartphone', name: 'Mobile', technologies: ['React Native', 'Expo', 'Firebase'] },
];

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <SectionDivider title="About" />
      <div className={styles.content}>
        <div className={styles.aboutSection}>
          <p>
            My name is Qiang Loozen, I am 22 years old and currently live in the Netherlands. I First started my journey
            studying Network Engineering at Radius College located in Breda. Besides some general system engineering
            tasks, we learned more about how to setup and design enterprise network infrastructures with Cisco routers,
            switches and Windows/Linux servers. After finishing this study I came to a conclusion that this wasnt really
            something I saw myself doing for the rest of my life. The study software engineering at Avans Hogeschool
            looked very promising. My first year was challenging since this was in the period of the Covid pandemic, but
            I really liked it from the start. <br /> <br /> Outside my studies and work I like to game/ hangout with my
            friends, follow formula 1, work on some hobby projects and watch my favourite TV shows and movies.
          </p>
        </div>

        <div className={styles.experienceSection}>
          {technologies.map(({ iconName, name, technologies }, index) => (
            <TechnologyList
              iconName={iconName}
              key={name}
              title={name}
              technologies={technologies}
              showDivider={index !== technologies.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
