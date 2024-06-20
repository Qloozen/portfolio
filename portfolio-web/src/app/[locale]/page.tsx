import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('translations');

  return (
    <main className="home">
      <div className="home__description">
        <h1>{t('example')}</h1>
      </div>
    </main>
  );
};

export default Home;
