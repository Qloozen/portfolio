import { getRequestConfig } from 'next-intl/server';

export const i18n = {
  locales: ['en', 'nl'],
  defaultLocale: 'en',
} as const;

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../translations/${locale}.json`)).default,
  };
});
