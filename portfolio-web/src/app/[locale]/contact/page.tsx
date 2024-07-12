'use client';

import { sendEmail } from './email.actions';
import { useFormState } from 'react-dom';
import { TextArea, TextInput } from '@components';
import styles from './page.module.scss';
import FormButton from './formButton';
import { FormState } from './type';
import { useEffect, useRef } from 'react';

const initialState: FormState = {
  data: {
    full_name: '',
    user_email: '',
    message: '',
  },
  errors: undefined,
};

const ContactPage = () => {
  const [state, formAction] = useFormState(sendEmail, initialState);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.errors) {
      ref.current?.reset();
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <form
        ref={ref}
        action={formAction}
        className={styles.contactForm}
      >
        <TextInput
          label="Full Name"
          name="full_name"
          required
          errorMessages={state.errors?.full_name}
        />

        <TextInput
          label="Email"
          name="user_email"
          required
          errorMessages={state.errors?.user_email}
          type="email"
        />

        <TextArea
          rows={5}
          label="message"
          name="message"
          errorMessages={state.errors?.message}
        />
        <div className={styles.bottom}>
          {state.errors?.general && <p className={styles.error}>{state.errors.general}</p>}
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
