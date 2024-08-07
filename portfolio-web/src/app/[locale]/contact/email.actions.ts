'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { FormState } from './type';
import { getTranslations } from 'next-intl/server';

const schema = z.object({
  full_name: z.string().min(1).max(100),
  user_email: z.string().email(),
  message: z.string().min(10, 'minError').max(1000, 'maxError'),
});

export async function sendEmail(prevState: any, formData: FormData): Promise<FormState> {
  const t = await getTranslations('contact');

  const validatedFields = schema.safeParse({
    full_name: formData.get('full_name'),
    user_email: formData.get('user_email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors as Record<string, string[]>;
    const translatedErrors = Object.keys(errors).reduce(
      (acc, key) => {
        acc[key] = errors[key]?.map((error: string) => t(error)) || [];
        return acc;
      },
      {} as Record<string, string[]>
    );

    return {
      errors: translatedErrors,
    };
  }

  const resend = new Resend(`${process.env.NEXT_RESEND_API_KEY}`);

  const res = await resend.emails.send({
    from: `Qiang Loozen - Portfolio <${process.env.NEXT_FROM_EMAIL}>`,
    to: `${process.env.NEXT_TO_EMAIL}`,
    subject: 'New email from portfolio',
    html: `
      <h1>New email from portfolio</h1>
      <p><strong>Name:</strong> ${validatedFields.data.full_name}</p>
      <p><strong>Email:</strong> ${validatedFields.data.user_email}</p>
      <p><strong>Message:</strong> ${validatedFields.data.message}</p>
    `,
  });

  if (res.error) {
    return {
      errors: {
        general: t('globalError'),
      },
    };
  }

  return {
    errors: undefined,
    data: {
      full_name: validatedFields.data.full_name,
      user_email: validatedFields.data.user_email,
      message: validatedFields.data.message,
    },
  };
}
