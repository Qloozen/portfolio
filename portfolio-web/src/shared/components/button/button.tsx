import { ButtonProps } from './types';
import classNames from 'classnames/bind';

import styles from './button.module.scss';
const cx = classNames.bind(styles);

const Button = ({
  className = '',
  children,
  onClick,
  type = 'button',
  variant = 'text',
  size = 'medium',
  disabled = false,
  ...htmlProps
}: ButtonProps) => {
  return (
    <button
      {...htmlProps}
      onClick={onClick}
      type={type}
      className={cx('container', variant, size, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
