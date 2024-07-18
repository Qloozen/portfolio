'use client';

import Image from 'next/image';
import { PageContentProps } from './types';
import styles from './page-content.module.scss';
import { BlockRendererClient } from '@components';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';

const PageContent = ({
  project: { description, gallery, id, lastUpdated, name, projectType, status, technologies, thumbnail, githubUrl },
}: PageContentProps) => {
  const t = useTranslations('projectPage');

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const fadeOut = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        style={{ scale: scale, opacity: fadeOut }}
      >
        <Image
          className={styles.image}
          src={thumbnail.url}
          alt={thumbnail.alt}
          fill
        />
      </motion.div>
      <div className={styles.overview}>
        <div>
          <h1>{name}</h1>
          <BlockRendererClient content={description} />
        </div>
        <div className={styles.tags}>
          <span>{projectType}</span>
          <span>{status}</span>
          <span>
            {t('lastUpdated')}: {lastUpdated}
          </span>
          {githubUrl && <a href={githubUrl}>GitHub</a>}
        </div>
      </div>

      <div className={styles.technologyContainer}>
        <h2>{t('technologies')}</h2>
        <div className={styles.technologies}>
          {technologies.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </div>
      </div>
      <div className={styles.galleryContainer}>
        <h2>{t('gallery')}</h2>
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

export default PageContent;
