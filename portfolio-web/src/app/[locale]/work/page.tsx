import ProjectCard from '@components/project-card/project-card';
import styles from './page.module.scss';
import classnames from 'classnames/bind';
import { fetchProjects } from './api';
const cx = classnames.bind(styles);

const Page = async () => {
  const projects = await fetchProjects();

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
