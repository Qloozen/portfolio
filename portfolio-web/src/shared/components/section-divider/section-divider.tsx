import { SectionDividerProps } from './types';
import classNames from 'classnames/bind';
import styles from './section-divider.module.scss';

const cx = classNames.bind(styles);

const SectionDivider = ({ title, titleAlignment = 'left' }: SectionDividerProps) => {
  return (
    <div className={cx('container', titleAlignment)}>
      <h2>{title}</h2>
      <hr className={styles.divider} />
    </div>
  );
};

export default SectionDivider;
