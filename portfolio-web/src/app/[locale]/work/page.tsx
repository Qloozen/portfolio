import ProjectCard from '@components/project-card/project-card';
import styles from './page.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const projects = [
  {
    id: 1,
    name: 'projectname',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum tenetur reiciendis! Voluptate fugiat enim veritatis iure provident, possimus odit labore animi, delectus quod eveniet sequi. Voluptate recusandae sequi tenetur pariatur non in expedita error. Fugit similique doloribus minima. Excepturi aspernatur nemo vitae molestiae quidem ipsum placeat animi maxime sequi iusto. Veritatis aspernatur ad voluptates nemo sed quos, illo impedit beatae nesciunt ipsam delectus repellat ut, placeat vero nostrum reprehenderit molestiae animi quas? Eveniet ad accusamus, magni dolorum repudiandae temporibus voluptatem laudantium quas eos quibusdam voluptatum odit dignissimos maiores debitis exercitationem doloremque autem molestiae officia a soluta distinctio quis facilis.',
    lastUpdated: '2021-01-01',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Sass'],
    status: 'In progress',
  },
  {
    id: 2,
    name: 'projectname',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum tenetur reiciendis! Voluptate fugiat enim veritatis iure provident, possimus odit labore animi, delectus quod eveniet sequi. Voluptate recusandae sequi tenetur pariatur non in expedita error. Fugit similique doloribus minima. Excepturi aspernatur nemo vitae molestiae quidem ipsum placeat animi maxime sequi iusto. Veritatis aspernatur ad voluptates nemo sed quos, illo impedit beatae nesciunt ipsam delectus repellat ut, placeat vero nostrum reprehenderit molestiae animi quas? Eveniet ad accusamus, magni dolorum repudiandae temporibus voluptatem laudantium quas eos quibusdam voluptatum odit dignissimos maiores debitis exercitationem doloremque autem molestiae officia a soluta distinctio quis facilis.',
    lastUpdated: '2021-01-01',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase'],
    status: 'In progress',
  },
  {
    id: 3,
    name: 'projectname',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum tenetur reiciendis! Voluptate fugiat enim veritatis iure provident, possimus odit labore animi, delectus quod eveniet sequi. Voluptate recusandae sequi tenetur pariatur non in expedita error. Fugit similique doloribus minima. Excepturi aspernatur nemo vitae molestiae quidem ipsum placeat animi maxime sequi iusto. Veritatis aspernatur ad voluptates nemo sed quos, illo impedit beatae nesciunt ipsam delectus repellat ut, placeat vero nostrum reprehenderit molestiae animi quas? Eveniet ad accusamus, magni dolorum repudiandae temporibus voluptatem laudantium quas eos quibusdam voluptatum odit dignissimos maiores debitis exercitationem doloremque autem molestiae officia a soluta distinctio quis facilis.',
    lastUpdated: '2021-01-01',
    technologies: ['React Native', 'Expo', 'Firebase'],
    status: 'In progress',
  },
  {
    id: 4,
    name: 'projectname',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum tenetur reiciendis! Voluptate fugiat enim veritatis iure provident, possimus odit labore animi, delectus quod eveniet sequi. Voluptate recusandae sequi tenetur pariatur non in expedita error. Fugit similique doloribus minima. Excepturi aspernatur nemo vitae molestiae quidem ipsum placeat animi maxime sequi iusto. Veritatis aspernatur ad voluptates nemo sed quos, illo impedit beatae nesciunt ipsam delectus repellat ut, placeat vero nostrum reprehenderit molestiae animi quas? Eveniet ad accusamus, magni dolorum repudiandae temporibus voluptatem laudantium quas eos quibusdam voluptatum odit dignissimos maiores debitis exercitationem doloremque autem molestiae officia a soluta distinctio quis facilis.',
    lastUpdated: '2021-01-01',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Sass'],
    status: 'In progress',
  },
  {
    id: 5,
    name: 'projectname',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum tenetur reiciendis! Voluptate fugiat enim veritatis iure provident, possimus odit labore animi, delectus quod eveniet sequi. Voluptate recusandae sequi tenetur pariatur non in expedita error. Fugit similique doloribus minima. Excepturi aspernatur nemo vitae molestiae quidem ipsum placeat animi maxime sequi iusto. Veritatis aspernatur ad voluptates nemo sed quos, illo impedit beatae nesciunt ipsam delectus repellat ut, placeat vero nostrum reprehenderit molestiae animi quas? Eveniet ad accusamus, magni dolorum repudiandae temporibus voluptatem laudantium quas eos quibusdam voluptatum odit dignissimos maiores debitis exercitationem doloremque autem molestiae officia a soluta distinctio quis facilis.',
    lastUpdated: '2021-01-01',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase'],
    status: 'In progress',
  },
  {
    id: 6,
    name: 'projectname',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum tenetur reiciendis! Voluptate fugiat enim veritatis iure provident, possimus odit labore animi, delectus quod eveniet sequi. Voluptate recusandae sequi tenetur pariatur non in expedita error. Fugit similique doloribus minima. Excepturi aspernatur nemo vitae molestiae quidem ipsum placeat animi maxime sequi iusto. Veritatis aspernatur ad voluptates nemo sed quos, illo impedit beatae nesciunt ipsam delectus repellat ut, placeat vero nostrum reprehenderit molestiae animi quas? Eveniet ad accusamus, magni dolorum repudiandae temporibus voluptatem laudantium quas eos quibusdam voluptatum odit dignissimos maiores debitis exercitationem doloremque autem molestiae officia a soluta distinctio quis facilis.',
    lastUpdated: '2021-01-01',
    technologies: ['React Native', 'Expo', 'Firebase'],
    status: 'In progress',
  },
];

const Page = () => {
  return (
    <div className={styles.container}>
      <h1>All Projects</h1>
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