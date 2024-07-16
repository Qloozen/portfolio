'use client';

import { Button } from '@components';
import styles from './error.module.scss';
import { useTranslations } from 'next-intl';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  const t = useTranslations('error');

  return (
    <div className={styles.container}>
      <h2>{t('somethingWentWrong')}</h2>
      <Button
        variant="outlined"
        onClick={() => reset()}
      >
        {t('tryAgain')}
      </Button>
    </div>
  );
};

export default Error;
