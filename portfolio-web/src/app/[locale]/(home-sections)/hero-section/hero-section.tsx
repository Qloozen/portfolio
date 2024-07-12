import Image from 'next/image';
import { BlockRendererClient, NavigationButton } from '@components';

import styles from './hero-section.module.scss';
import { getTranslations } from 'next-intl/server';
import { fetchHero } from './api';

const HeroSection = async () => {
  const t = await getTranslations('hero');

  const heroContent = await fetchHero();

  return (
    <div className={styles.container}>
      <div className={styles.descriptionSection}>
        <p>{t('greeting')}</p>
        <h1>
          {t('greeting2')} <span>Qiang Loozen</span>
        </h1>

        <BlockRendererClient content={heroContent} />

        <NavigationButton
          className={styles.contactButton}
          href="/contact"
          trailingIcon="arrow-right"
          variant="filled"
        >
          Contact me
        </NavigationButton>
      </div>
      <div className={styles.imageSection}>
        <Image
          src="/assets/images/portrait.png"
          alt="hero image"
          fill
          objectFit="contain"
        />
      </div>
      <div className={styles.socialSection}>
        <NavigationButton
          target="_blank"
          href="https://github.com/Qloozen"
          leadingIcon="github"
        />
        <NavigationButton
          target="_blank"
          href="https://www.linkedin.com/in/qiangloozen/"
          leadingIcon="linkedin"
        />
      </div>
    </div>
  );
};

export default HeroSection;
