import { useTranslations } from 'next-intl';
import { NavigationButton } from '@components';
import Image from 'next/image';

import styles from './page.module.scss';
import HeroSection from './(home-sections)/hero-section/hero-section';
import AboutSection from './(home-sections)/about-section/about-section';

const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Home;
