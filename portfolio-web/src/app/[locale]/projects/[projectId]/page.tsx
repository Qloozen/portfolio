import Image from 'next/image';

import styles from './page.module.scss';
import classnames from 'classnames/bind';
import { fetchProject } from './api';
import { BlockRendererClient } from '@components';
const cx = classnames.bind(styles);

const Page = async ({ params: { projectId } }: { params: { projectId: string } }) => {
  const { description, gallery, lastUpdated, name, projectType, status, technologies, thumbnail, githubUrl } =
    await fetchProject(Number(projectId));

  return (
    <div className={styles.container}>
      <Image
        style={{ objectFit: 'cover' }}
        className={styles.image}
        src={thumbnail.url}
        alt={thumbnail.alt}
        fill
      />
      <div className={styles.overview}>
        <div>
          <h1>{name}</h1>
          <BlockRendererClient content={description} />
        </div>
        <div className={styles.tags}>
          <span>{projectType}</span>
          <span>{status}</span>
          <span>last updated: {lastUpdated}</span>
          {githubUrl && <a href={githubUrl}>GitHub</a>}
        </div>
      </div>

      <div className={styles.technologyContainer}>
        <h2>Technologies</h2>
        <div className={styles.technologies}>
          {technologies.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </div>
      </div>
      <div className={styles.galleryContainer}>
        <h2>Gallery</h2>
        <div className={styles.gallery}>
          {gallery.map(({ url, alt }) => (
            <Image
              key={url}
              className={styles.galleryImage}
              src={url}
              alt={alt}
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
