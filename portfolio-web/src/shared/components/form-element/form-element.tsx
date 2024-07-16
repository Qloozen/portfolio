import { FormElementProps } from './types';
import styles from './form-element.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const FormElement = ({ children, label, required = false, errorMessages = undefined }: FormElementProps) => {
  return (
    <div className={styles.container}>
      <label
        className={cx('label', { 'label--required': required })}
        htmlFor={label}
      >
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {children}
      {errorMessages && errorMessages.length > 0 && <span className={styles.error}>{errorMessages[0]}</span>}
    </div>
  );
};

export default FormElement;
