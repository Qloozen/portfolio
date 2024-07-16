import classNames from 'classnames/bind';
import { NavigationButtonProps } from './types';
import { Icon } from '@components';

import styles from './navigation-button.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

const NavigationButton = ({
  href,
  target,
  className,
  leadingIcon = undefined,
  trailingIcon = undefined,
  children,
  size = 'medium',
  variant = 'text',
  iconColorType = undefined,
}: NavigationButtonProps) => {
  return (
    <Link
      target={target}
      href={href}
      className={cx('container', variant, size, className)}
    >
      {leadingIcon && (
        <Icon
          iconColorType={iconColorType}
          iconName={leadingIcon}
        />
      )}
      {children && children}
      {trailingIcon && (
        <Icon
          iconColorType={iconColorType}
          iconName={trailingIcon}
        />
      )}
    </Link>
  );
};

export default NavigationButton;
