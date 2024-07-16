import classNames from 'classnames/bind';
import { MenuToggleProps } from './types';

import styles from './menu-toggle.module.scss';
const cx = classNames.bind(styles);

const MenuToggle = ({ className = '', isMenuOpen, onToggleMenu }: MenuToggleProps) => {
  return (
    <button
      className={cx('container', className, { 'container--open': isMenuOpen })}
      onClick={() => onToggleMenu()}
    >
      <span />
    </button>
  );
};

export default MenuToggle;
