import { getLocale } from 'next-intl/server';
import { Hero, heroMapper } from 'shared/types/hero';

export const fetchHero = async (): Promise<Hero> => {
  const locale = await getLocale();

  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/hero?locale=${locale}&populate=*`);
  const json = await res.json();
  return heroMapper(json);
};
