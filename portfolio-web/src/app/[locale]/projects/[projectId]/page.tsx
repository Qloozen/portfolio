import styles from './page.module.scss';
import classnames from 'classnames/bind';
import { fetchProject } from './api';
import PageContent from './page-content';

const cx = classnames.bind(styles);

const Page = async ({ params: { projectId } }: { params: { projectId: string } }) => {
  const project = await fetchProject(Number(projectId));

  return <PageContent project={project} />;
};

export default Page;
