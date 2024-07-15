import Image from 'next/image';
import { BlockRendererClient, NavigationButton } from '@components';

import styles from './hero-section.module.scss';
import { getTranslations } from 'next-intl/server';
import { fetchHero } from './api';

const HeroSection = async () => {
  const t = await getTranslations('hero');

  const hero = await fetchHero();

  return (
    <div className={styles.container}>
      <div className={styles.descriptionSection}>
        <p>{t('greeting')}</p>
        <h1>
          {t('greeting2')} <span>Qiang Loozen</span>
        </h1>

        <BlockRendererClient content={hero.description} />

        <NavigationButton
          className={styles.contactButton}
          href="/contact"
          trailingIcon="arrow-right"
          variant="filled"
        >
          {t('contact')}
        </NavigationButton>
      </div>
      <div className={styles.imageSection}>
        <Image
          src={hero.profile.url}
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
