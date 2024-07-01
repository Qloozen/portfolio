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
      <p className={styles.credits}>
        This work is based on &quot;Oracle Red Bull F1 Car RB19 2023&quot;
        (https://sketchfab.com/3d-models/oracle-red-bull-f1-car-rb19-2023-e4afe46f3aab4b23a418da06fc163821) by Redgrund
        (https://sketchfab.com/redgrund) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
      </p>
    </div>
  );
};

export default Home;
