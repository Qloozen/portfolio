import Image from 'next/image';
import { BlockRendererClient, MotionDiv, MotionH1, MotionP, NavigationButton } from '@components';

import styles from './hero-section.module.scss';
import { getTranslations } from 'next-intl/server';
import { fetchHero } from './api';
import { fadeLeft, fadeUp, scale, staggerContainer } from '@animations/variants';

const HeroSection = async () => {
  const t = await getTranslations('hero');
  const hero = await fetchHero();

  return (
    <div className={styles.container}>
      <MotionDiv
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        className={styles.descriptionSection}
      >
        <MotionP variants={fadeUp}>{t('greeting')}</MotionP>
        <MotionH1 variants={fadeUp}>
          {t('greeting2')} <span>Qiang Loozen</span>
        </MotionH1>
        <MotionDiv variants={fadeUp}>
          <BlockRendererClient content={hero.description} />
        </MotionDiv>
        <MotionDiv variants={fadeUp}>
          <NavigationButton
            className={styles.contactButton}
            href="/contact"
            trailingIcon="arrow-right"
            variant="filled"
          >
            {t('contact')}
          </NavigationButton>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView="show"
        variants={{ ...scale, show: { ...scale.show, transition: { delay: 0.5, duration: 0.5 } } }}
        className={styles.imageSection}
      >
        <Image
          src={hero.profile.url}
          alt="hero image"
          fill
          objectFit="contain"
        />
      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView="show"
        variants={{ ...fadeLeft, show: { ...fadeLeft.show, transition: { delay: 0.5, duration: 0.5 } } }}
        className={styles.socialSection}
      >
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
      </MotionDiv>
    </div>
  );
};

export default HeroSection;
