import { TextInputProps } from './types';
import styles from './text-input.module.scss';
import classnames from 'classnames/bind';
import FormElement from '@components/form-element/form-element';
const cx = classnames.bind(styles);

const TextInput = ({ label, errorMessages, required, ...inputProps }: TextInputProps) => {
  return (
    <FormElement
      label={label}
      errorMessages={errorMessages}
      required={required}
    >
      <input
        {...inputProps}
        required={required}
        id={label}
        className={cx('input', { 'input--error': errorMessages && errorMessages?.length > 0 })}
      />
    </FormElement>
  );
};

export default TextInput;
