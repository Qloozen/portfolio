import { useTranslations } from 'next-intl';
import { NavigationButton } from '@components';
import Image from 'next/image';

import styles from './page.module.scss';

const Home = () => {
  const t = useTranslations('hero');

  return (
    <div className={styles.container}>
      <div className={styles.descriptionSection}>
        <p>{t('greeting')}</p>
        <h1>
          {t('greeting2')} <span>Qiang Loozen</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis cupiditate ducimus perferendis? Natus
          dolores iste adipisci quaerat et quos velit placeat at minima magnam aut, cupiditate architecto recusandae
          nostrum.
        </p>

        <NavigationButton
          className={styles.contactButton}
          href={''}
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

export default Home;
