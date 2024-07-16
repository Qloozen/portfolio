import { TextAreaProps } from './types';
import styles from './text-area.module.scss';
import classnames from 'classnames/bind';
import FormElement from '@components/form-element/form-element';
const cx = classnames.bind(styles);

const TextArea = ({ label, errorMessages, required, ...textAreaProps }: TextAreaProps) => {
  return (
    <FormElement
      label={label}
      errorMessages={errorMessages}
      required={required}
    >
      <textarea
        {...textAreaProps}
        required={required}
        id={label}
        className={cx('textarea', { 'textarea--error': errorMessages && errorMessages?.length > 0 })}
      />
    </FormElement>
  );
};

export default TextArea;
