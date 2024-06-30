import { ReactSVG } from 'react-svg';
import { IconProps } from './types';
import classNames from 'classnames/bind';

import styles from './icon.module.scss';
const cx = classNames.bind(styles);

const Icon = ({ className = '', iconName, iconColorType = undefined }: IconProps) => {
  const handleBeforeInjection = (svg: SVGElement) => {
    if (iconColorType) {
      const svgElements = svg.querySelectorAll('path, circle, rect, line, polyline, polygon');
      svgElements.forEach((element) => {
        element.setAttribute(iconColorType, 'currentColor');
      });
    }

    svg.setAttribute('alt', iconName);
    svg.setAttribute('aria-label', iconName);
  };

  return (
    <ReactSVG
      src={`/assets/icons/${iconName}.svg`}
      beforeInjection={handleBeforeInjection}
      wrapper="span"
      className={cx('container', className)}
    />
  );
};

export default Icon;
