import Image from 'next/image';

import styles from './page.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const project = {
  name: 'projectname',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum tenetur reiciendis! Voluptate fugiat enim veritatis iure provident, possimus odit labore animi, delectus quod eveniet sequi. Voluptate recusandae sequi tenetur pariatur non in expedita error. Fugit similique doloribus minima. Excepturi aspernatur nemo vitae molestiae quidem ipsum placeat animi maxime sequi iusto. Veritatis aspernatur ad voluptates nemo sed quos, illo impedit beatae nesciunt ipsam delectus repellat ut, placeat vero nostrum reprehenderit molestiae animi quas? Eveniet ad accusamus, magni dolorum repudiandae temporibus voluptatem laudantium quas eos quibusdam voluptatum odit dignissimos maiores debitis exercitationem doloremque autem molestiae officia a soluta distinctio quis facilis.',
  lastUpdated: '2021-01-01',
  technologies: ['React', 'Next.js', 'Tailwind CSS', 'Sass'],
  status: 'In progress',
  type: 'School Project',
  gitHub: undefined,
};

const Page = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/assets/images/project.png"
        alt="Picture of the author"
        fill
      />
      <div className={styles.overview}>
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
        <div className={styles.tags}>
          <span>{project.type}</span>
          <span>{project.status}</span>
          <span>last updated: {project.lastUpdated}</span>
          {project.gitHub && <a href={project.gitHub}>GitHub</a>}
        </div>
      </div>

      <div className={styles.technologyContainer}>
        <h2>Technologies</h2>
        <div className={styles.technologies}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
      <div className={styles.galleryContainer}>
        <h2>Gallery</h2>
        <div className={styles.gallery}>
          {' '}
          {[1, 2, 3, 4, 5].map((image) => (
            <Image
              key={image}
              className={styles.galleryImage}
              src="/assets/images/project.png"
              alt="Picture of the author"
              width={300}
              height={200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
