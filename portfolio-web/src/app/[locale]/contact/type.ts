export type ContactData = {
  full_name: string;
  user_email: string;
  message: string;
};

export type FormState = {
  data?: ContactData;
  errors?: {
    full_name?: string[];
    user_email?: string[];
    message?: string[];
    general?: string;
  };
};
