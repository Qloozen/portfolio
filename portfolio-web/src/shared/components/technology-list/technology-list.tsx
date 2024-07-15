import { TechnologyListProps } from './types';
import styles from './technology-list.module.scss';
import Icon from '@components/icon/icon';
import { useTranslations } from 'next-intl';

const TechnologyList = ({ iconName, technologies, title, showDivider = true }: TechnologyListProps) => {
  const t = useTranslations('about');

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <Icon iconName={iconName} />
        <p>
          {t('usedFor')} <span>{title}</span>
        </p>
      </div>
      <ul className={styles.list}>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
      {showDivider && <hr className={styles.divider} />}
    </div>
  );
};

export default TechnologyList;
