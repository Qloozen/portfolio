'use client';

import Link from 'next/link';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { IconButton, MenuToggle } from '@components';

import styles from './navbar.module.scss';
const cx = classNames.bind(styles);

const paths = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();

  console.log(theme);

  const parts = pathName.split('/');
  const activePath = parts.length > 2 ? `/${parts[2]}` : '/';

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <h1>
          Qiang <span>Loozen</span>
        </h1>
        <MenuToggle
          className={styles.menuToggle}
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>

      <div className={cx('dropdownContainer', { 'dropdownContainer--open': isMenuOpen })}>
        <nav className={styles.navSection}>
          <ul
            className={styles.navlist}
            role="list"
          >
            {paths.map((path) => (
              <li key={path.name}>
                <Link
                  className={cx('navLink', { 'navLink--active': activePath === path.path })}
                  href={path.path}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.themeSection}>
          <IconButton
            className={styles.themeToggle}
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            leadingIcon={theme === 'dark' ? 'sun' : 'moon'}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
