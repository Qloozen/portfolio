import classNames from 'classnames/bind';
import { IconButtonProps } from './types';
import { Button, Icon, Spinner } from '@components';

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
  isLoading = false,
  ...buttonProps
}: IconButtonProps) => {
  return (
    <Button
      {...buttonProps}
      size={size}
      variant={variant}
      className={cx('container', className)}
    >
      {leadingIcon && !isLoading && (
        <Icon
          iconColorType={iconColorType}
          iconName={leadingIcon}
        />
      )}
      {leadingIcon && isLoading && <Spinner size="small" />}
      {children && children}
      {trailingIcon && !isLoading && (
        <Icon
          iconColorType={iconColorType}
          iconName={trailingIcon}
        />
      )}
      {trailingIcon && isLoading && <Spinner size="small" />}
    </Button>
  );
};

export default IconButton;
