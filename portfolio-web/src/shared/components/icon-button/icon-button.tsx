import classNames from 'classnames/bind';
import { IconButtonProps } from './types';
import { Button, Icon } from '@components';

import styles from './icon-button.module.scss';

const cx = classNames.bind(styles);

const IconButton = ({
  className = '',
  leadingIcon = undefined,
  trailingIcon = undefined,
  children,
  size = 'medium',
  variant = 'text',
  iconColorType = undefined,
  ...buttonProps
}: IconButtonProps) => {
  return (
    <Button
      {...buttonProps}
      size={size}
      variant={variant}
      className={cx('container', className)}
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
    </Button>
  );
};

export default IconButton;
