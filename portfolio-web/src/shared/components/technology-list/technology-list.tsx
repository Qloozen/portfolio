import { TechnologyListProps } from './types';
import styles from './technology-list.module.scss';
import Icon from '@components/icon/icon';

const TechnologyList = ({ iconName, technologies, title, showDivider = true }: TechnologyListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <Icon iconName={iconName} />
        <p>
          Used for <span>{title}</span>
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
