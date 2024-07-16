import { SpinnerProps } from './types';
import styles from './spinner.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  return (
    <div
      className={cx('container', size)}
      aria-label="loading spinner"
    />
  );
};

export default Spinner;
