import { IconButton } from '@components';
import { useFormStatus } from 'react-dom';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <IconButton
      type="submit"
      variant="outlined"
      trailingIcon="send"
      isLoading={pending}
    >
      Send email
    </IconButton>
  );
};

export default FormButton;
