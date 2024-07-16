import { IconButton } from '@components';
import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';

const FormButton = () => {
  const { pending } = useFormStatus();
  const t = useTranslations('contact');

  return (
    <IconButton
      type="submit"
      variant="outlined"
      trailingIcon="send"
      isLoading={pending}
    >
      {t('send')}
    </IconButton>
  );
};

export default FormButton;
